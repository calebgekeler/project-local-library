//DONE
function totalBooksCount(books){
  return books.length;
}
//DONE
function totalAccountsCount(accounts){
  return accounts.length;
}
//DONE
function booksBorrowedCount(books){
  let result = 0;
  for(let item in books){
    //console.log("LOOP TEST")
    if(books[item].borrows[0].returned === false){
      result += 1;
    }
  }
  return result;
}
//DONE
function getMostCommonGenres(books){
  const result = [];
  var scienceGenre = 0;
  var historicalFictionGenre = 0;
  var classicsGenre = 0;
  var travelGenre = 0;
  var youngAdultGenre = 0;
  var nonfictionGenre = 0;
  for(let i=0; i<books.length; i++){
    if(books[i].genre === "Science"){
      scienceGenre+=1;
    }
    else if(books[i].genre === "Historical Fiction"){
      historicalFictionGenre+=1;
    }
    else if(books[i].genre === "Classics"){
      classicsGenre+=1;
    }
    else if(books[i].genre === "Travel"){
      travelGenre+=1;
    }
    else if(books[i].genre === "Young Adult"){
      youngAdultGenre+=1;
    }
    else if(books[i].genre === "Nonfiction"){
      nonfictionGenre+=1;
    }
  }
  let genreArr =[
    {name: "Science", count: scienceGenre},
    {name: "Historical Fiction", count: historicalFictionGenre}, 
    {name: "Classics", count: classicsGenre}, 
    {name: "Travel", count: travelGenre}, 
    {name: "Young Adult", count: youngAdultGenre}, 
    {name: "Nonfiction", count: nonfictionGenre}
  ]
  genreArr.sort((setA, setB) => setA.count < setB.count ? 1 : -1)//new sorted array, passes by reference

  for(let i = 0; i<5;i++){
    result.push(genreArr[i]);
  }

  //console.log("GENRE OBJECT", genreArr)
  return result;
}
//DONE
function getMostPopularBooks(books){
  const result = [];
  let sortedBooks = books.sort((bookA, bookB) => bookA.borrows.length < bookB.borrows.length ? 1 : -1)
  //console.log("SORTED BOOKS", sortedBooks)
  for(let i = 0; i<5; i++){
    result.push({name: sortedBooks[i].title, count: sortedBooks[i].borrows.length})
  }
  //console.log("PUSH ATTEMPT", result)
  
  return result;
}

function getMostPopularAuthors(books, authors){
 const result = []
 //console.log(authors);
  for(let book in books){//nested for loops build authors array with count key and value
    for(let author in authors){
      if(authors[author].id === books[book].authorId){
        if(!authors[author].count){
          authors[author].count = books[book].borrows.length;
          break;
        }
        if(authors[author].count){
          authors[author].count+=books[book].borrows.length;
          break;
        }
      }
    }
  }
 authors.sort(function(authorA, authorB){
    if(authorA.count === undefined){
      authorA.count = 0}; 
    if(authorB.count === undefined){ 
      authorB.count = 0};
    authorA.count < authorB.count ? 1 : -1});
 authors.sort((authorA, authorB) => authorA.count < authorB.count ? 1 : -1);//sorts twice but the undefined values in the first sort through it off
 //console.log("AUTHORS AFTER SORT", authors);
 for(let i = 0; i<5; i++){//builds the results array
   result.push({name: `${authors[i].name.first} ${authors[i].name.last}`, count: authors[i].count})
 }
 
 //console.log("RESULT", result)


 return result;
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
