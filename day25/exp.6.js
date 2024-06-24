let library = {
    name: "City Library",
    books: [
        { 
            title: "The Great Gatsby", 
            author: "F. Scott Fitzgerald", 
            copies: 5,
            categories: ["Fiction", "Classic"],
            details: {
                pages: 180,
                year: 1925
            }
        },
        { 
            title: "To Kill a Mockingbird", 
            author: "Harper Lee", 
            copies: 2,
            categories: ["Fiction", "Classic"],
            details: {
                pages: 281,
                year: 1960
            }
        },
        { 
            title: "1984", 
            author: "George Orwell", 
            copies: 3,
            categories: ["Fiction", "Dystopian"],
            details: {
                pages: 328,
                year: 1949
            }
        }
    ]
};

function getLibraryStats(library) {
    let totalBooks=library.books.length;
    let totalCopies=library.books.reduce((total,value)=>total+value.copies,0)
    let averageCopies= totalBooks>0?totalCopies/totalBooks:0;
    let maxCopiesBook=library.books.reduce((sum,value)=>value.copies>sum.copies?value:sum)
    let authors=[...new Set(library.books.map(book=>book.author))];
    SortBooks=library.books.sort((a,b)=>b.copies-a.copies);
    return {
        totalBooks,
        totalCopies,
        averageCopies,
        maxCopiesBook,
        authors,
        SortBooks,
    };
}

// Example usage:
let libraryStats = getLibraryStats(library);
console.log("Library Statistics:");
console.log("Total number of books:", libraryStats.totalBooks);
console.log("Total number of copies:", libraryStats.totalCopies);
console.log("Average number of copies per book:", libraryStats.averageCopies.toFixed(2));
console.log("Book with the maximum number of copies:", libraryStats.maxCopiesBook.title);
console.log("Unique authors in the library:", libraryStats.authors);
console.log("Sort Books by Copies :", libraryStats.SortBooks);
