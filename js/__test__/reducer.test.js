import reducers from '../reducers';

test('reducers', () => {
  const state = reducers(
    {searchTerm: 'blac', apiData: {}},
    {type: 'SET_SEARCH_TERM', payload: 'black'},
  );
  expect(state).toEqual({searchTerm: 'black', apiData: {}});
});

test('ADD_API_DATA', () => {
  const state = reducers(
    {searchTerm: '', apiData: {}},
    {
      type: 'ADD_API_DATA',
      payload: {
        rating: '5.2',
        title: 'Breaking Bad',
        year: '2008–2013',
        description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        poster: 'bb.jpg',
        imdbID: 'tt0903747',
        trailer: 'XZ8daibM3AE',
      },
    },
  );
  expect(state).toEqual({
    searchTerm: '',
    apiData: {
      tt0903747: {
        rating: '5.2',
        title: 'Breaking Bad',
        year: '2008–2013',
        description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        poster: 'bb.jpg',
        imdbID: 'tt0903747',
        trailer: 'XZ8daibM3AE',
      },
    },
  });
});
