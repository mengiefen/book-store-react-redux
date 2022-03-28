const ADD = 'bookStore/books/ADD';
const REMOVE = 'bookStore/books/REMOVE';
const initialState = [
  {
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    progress: 64,
    id: '1',
  },
  {
    category: 'Action',
    title: 'Dune',
    author: 'Frank Herbert',
    progress: 88,
    id: '2',
  },
  {
    category: 'Economy',
    title: 'Capital in the Twenty Century',
    author: 'Suzanne Collins',
    progress: 66,
    id: '3',
  },
];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

export function addBook(book) {
  return {
    type: ADD,
    book,
  };
}

export function removeBook(id) {
  return {
    type: REMOVE,
    id,
  };
}
