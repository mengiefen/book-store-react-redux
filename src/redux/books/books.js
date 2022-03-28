const ADD = 'bookStore/books/ADD';
const REMOVE = 'bookStore/books/REMOVE';
const FILTER = 'bookStore/books/FILTER';
const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    case FILTER:
      return state.filter((book) => book.category === action.category);
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

export const filterBook = (category) => ({
  type: FILTER,
  category,
});

export default bookReducer;
