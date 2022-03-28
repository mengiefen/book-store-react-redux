const ADD = 'bookStore/books/ADD';
const REMOVE = 'bookStore/books/REMOVE';
const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE,
  id,
});

export default bookReducer;
