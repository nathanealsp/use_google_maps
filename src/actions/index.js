// THIS IS THE ACTION CREATOR --> AND IT RETURNS AN OBJECT AS AN ACTION

export function selectBook(book) {
  // SELECT BOOK IS AN ACTION CREATOR
  // NEEDS TO RETURN OBJECT WITH TYPE PROPERTY
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}
