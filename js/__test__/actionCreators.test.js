// @flow

import {setSearchTerm, addAPIData} from '../actionCreators';

test('setSearchTerm', () => {
  expect(setSearchTerm('New York')).toMatchSnapshot();
});

test('addAPIData', () => {
  expect(
    addAPIData({
      title: 'Breaking Bad',
      year: '2008–2013',
      description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
      poster: 'bb.jpg',
      imdbID: 'tt0903747',
        trailer: 'XZ8daibM3AE',
        rating: '7.9'
    }),
  ).toMatchSnapshot();
});
