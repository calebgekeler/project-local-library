function findIdMatch(arrToMatch, id){ //helper function
  let result = arrToMatch.find((item) => item.id === id);
  return result;
}

function findAccountById(accounts, userId){
  var result = findIdMatch(accounts, userId);
  return result;
}

function sortAccountsByLastName(accounts){
  var result = accounts.sort((accountsA, accountsB) => accountsA.name.last.toLowerCase() > accountsB.name.last.toLowerCase() ? 1 : -1)
  return result;
}

function numberOfBorrows(account, books){
  var result = 0;
  
  let borrowId = books.map((book) => book.borrows);
  //console.log('BORROWED ID', borrowId)
  let mergedArray = borrowId.flat(1);
  //console.log('FLAT', merge)
  result = mergedArray.filter((item) => item.id === account.id)
  //console.log(result);
  return result.length;
}

function getBooksPossessedByAccount(account, books, authors){
  let filteredBooks = books.find(function(bookInstance){
    for(let j = 0; j<bookInstance.borrows.length; j++){
      if(account.id === bookInstance.borrows[j].id && bookInstance.borrows[j].returned === false){
        return true;
      }
    }
  })  
  //console.log("FILTERED BOOKS", filteredBooks)

  let filteredAuthors = authors.find((author) => author.id === filteredBooks.authorId);

  // console.log("FILTERED AUTHORS", filteredAuthors);
  const {id, title, genre, authorID, borrows} = filteredBooks;
  let author = filteredAuthors;
 
  let result = [{id, title, genre, authorID, author, borrows}]
  //console.log("RESULT", result)
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
