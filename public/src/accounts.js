function findAccountById(accounts, userId){
  var result = accounts.find((account) => account.id === userId);
  return result;
}

function sortAccountsByLastName(accounts){
  var result = accounts.sort((accountsA, accountsB) => accountsA.name.last.toLowerCase() > accountsB.name.last.toLowerCase() ? 1 : -1)
  return result;
}

function numberOfBorrows(account, books){
  var result = 0;
  for(let i = 0; i<books.length; i++){
    for(let j = 0; j<books[i].borrows.length; j++)
      if(account.id === books[i].borrows[j].id){
        result += 1;
      }
  }
  return result;
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
