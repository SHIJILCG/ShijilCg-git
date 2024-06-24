let library = {
  name: "City Library",
  books: [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", copies: 5 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", copies: 2 },
  ],
};
function addBook(library, title, author, copies) {
  library.books.push({ title, author, copies });
}
function removeBook(library, title) {
  let indexToRemove = library.books.findIndex(book => book.title === title);
  library.books.splice(indexToRemove, 1);
}
function findBook(library, title) {
  let indexToRemove = library.books.find(book => book.title === title);
  console.log(indexToRemove);
}
// function UpdateBookCopies(library,title,copies){
//   let indexToRemove = library.books.find(book => book.title === title);
//     indexToRemove.copies +=copies;
// }
function ListAllBooks(library){
    let result=library.books.map(book=>book.title);
    console.log(result);
}
function TotalNumberofBooks(library){
  let result=library.books.reduce((total,value) => 
         total+value.copies,0
    );
    console.log(result);
}
TotalNumberofBooks(library)

