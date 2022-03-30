// prettier-ignore
export const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
export const APP_ID = 'hysE30djtlH3MtTWYhGd';

const getAllBooksFromAPI = async () => {
  const response = await fetch(`${BASE_URL}/${APP_ID}/books`);
  const data = await response.json();
  return data;
};
const removeBookFromAPI = async (id) => {
  await fetch(`${BASE_URL}/${APP_ID}/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const addNewBookToAPI = async (book) => {
  await fetch(`${BASE_URL}/${APP_ID}/books/`, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export { getAllBooksFromAPI, removeBookFromAPI, addNewBookToAPI };
