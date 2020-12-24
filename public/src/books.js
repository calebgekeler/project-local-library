function findAuthorById(authors, id){
  let result = authors.find((author) => author.id === id)
  return result;
}

function findBookById(books, id){
  let result = books.find((book) => book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books){
  const result = [];
  let notReturned = books.filter((book) => book.borrows[0].returned === false);
  
  //console.log("NOT RETURNED", notReturned)

  let returned = books.filter((book) => book.borrows[0].returned === true);

  //console.log("RETURNED", returned)
  result.push(notReturned, returned);
  return result;
}

function getBorrowersForBook(book, accounts){
  let result = [];
  
  //console.log('BOOK', book)
  for(var account in accounts){
    for(var borrow in book.borrows){
      if(book.borrows[borrow].id === accounts[account].id){
        let {id, picture, age, name, company, email, registered} = accounts[account];
        let returned = book.borrows[borrow].returned
        result.push({id, returned, picture, age, name, company, email, registered});
      }
    }
  }
  
  console.log('FILTERED ACCOUNTS', result)
  
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
