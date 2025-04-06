const ages = [22,23,45,69,44,10,15,18,14];
const kids = [];
const young = [];

// console.log("unsorted Ages");
// console.table(ages);

// ages.sort();

// console.log("sorted Array");
// console.table(ages);



//--------------- forEach --------------------------------------
// let hold = ages.forEach((age)=>{
    //     if(age<18){
        //         kids.push(age);
        //     }else{
            //         young.push(age);
            //     }   
            // })
            
// console.log("Kids");
// console.table(kids);
// console.log("Young");
// console.table(young);



//--------------- Filter --------------------------------------
// let kids = ages.filter((age)=>{
//     return age<18;
// })
// console.log(kids);


const books = [
    {
        title: "Book 01",
        genre: "Fiction",
        publicsh: 1982,
        edition: 2005
    },
    {
        title: "Book 02",
        genre: "Non-Fiction",
        publicsh: 1941,
        edition: 2001
    },
    {
        title: "Book 03",
        genre: "Fiction",
        publicsh: 1981,
        edition: 2002
    },
    {
        title: "Book 04",
        genre: "Science",
        publicsh: 2011,
        edition: 2022
    },
    {
        title: "Book 05",
        genre: "History",
        publicsh: 1981,
        edition: 2010
    }
]


let fictionBook = books.filter((book)=>{
    if(book.genre === "Fiction"){
        return book;
    }else{
        console.log(book);
    }
})

console.log("\n--------------------- fitction books ------------------------")
console.log(fictionBook[0].title);
console.log(fictionBook);