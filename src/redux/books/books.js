import {
  addNewBookToAPI,
  getAllBooksFromAPI,
  removeBookFromAPI,
} from '../bookAPIServices';

const ADD = 'bookStore/books/ADD';
const REMOVE = 'bookStore/books/REMOVE';
const FILTER = 'bookStore/books/FILTER';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.item_id !== action.id);
    case FILTER:
      return state.filter((book) => book.category === action.category);
    case GET_BOOKS:
      return [...state, ...action.books];
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

export const getBookList = (books) => ({
  type: GET_BOOKS,
  books,
});

export const getAllBooks = () => async (dispatch) => {
  const booksFromAPI = await getAllBooksFromAPI();
  const books = [];
  Object.keys(booksFromAPI).forEach((id) => {
    books.push({
      item_id: id,
      title: booksFromAPI[id][0].title,
      category: booksFromAPI[id][0].category,
      author: booksFromAPI[id][0].author,
    });
  });
  dispatch(getBookList(books));
};

export const deleteBook = (id) => async (dispatch) => {
  await removeBookFromAPI(id).then(() => {
    dispatch(removeBook(id));
  });
};

export const addNewBook = (book) => async (dispatch) => {
  await addNewBookToAPI(book).then(() => {
    dispatch(addBook(book));
  });
};

export const filterBooks = (category) => (dispatch) => {
  dispatch(filterBook(category));
};

export default bookReducer;
