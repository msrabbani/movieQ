// @flow
import moxios from 'moxios';
import {setSearchTerm, addAPIData} from '../actionCreators';
import getAPIDetails from '../asyncActions'

const breakingBad = {
  title: 'Breaking Bad',
  year: '2008–2013',
  description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
  poster: 'bb.jpg',
  imdbID: 'tt0903747',
  trailer: 'XZ8daibM3AE',
  rating: '7.9',
};

test('setSearchTerm', () => {
  expect(setSearchTerm('New York')).toMatchSnapshot();
});

test('addAPIData', () => {
  expect(addAPIData(breakingBad)).toMatchSnapshot();
});

test('getAPIDetails', (done: Function)=> {
    const dispatchMock = jest.fn() // spy function
    moxios.withMock(()=> {
        getAPIDetails(breakingBad.imdbID)(dispatchMock)
        moxios.wait(()=> {
            const request = moxios.requests.mostRecent()
            request
                .respondWith({
                    status: 200,
                    response: breakingBad
                })
                .then(()=> {
                    expect(request.url).toEqual(`http://localhost:3000/${breakingBad.imdbID}`)
                    expect(dispatchMock).toBeCalledWith(addAPIData(breakingBad));
                    done()
                })
        })
    })
})
