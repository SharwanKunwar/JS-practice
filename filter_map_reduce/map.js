//map
// const ages = [22,23,54,66,88,15,12,14,19];
// const newNum = ages.map((num)=>{
//     return num+1;
// })
// console.log(newNum);


//map chaining

// const Numbers = [1,2,3,4,5];

// const finalNum = Numbers.map((num)=>{
//     return num*10;
// }).map((multValue)=>{
//     return multValue+1;
// }).map((multValueIncreaseValue)=>{
//     return (multValueIncreaseValue+"@code");
// }).filter((finalMapValue)=>{
//     return finalMapValue === "31@code"
//     // return finalMapValue;
// })
// console.log(finalNum);



//-----------Reduce---------------------------------
//used for calculation sum of the array 
// const price = [10,20,30,40,50];
// const total = price.reduce((acc, current)=>{
//     return acc+current;
// },0);
// console.log(total);

//--------Reduce with array object ----------------
// const book = [
//     {
//         title: "book01",
//         price: 100
//     },
//     {
//         title: "book02",
//         price: 200
//     },
//     {
//         title: "book03",
//         price: 150
//     }
// ]

// const totalPrice = book.reduce((pastPrice, itemPrice)=>{
//     return pastPrice + itemPrice.price;
// },0);
// console.log(totalPrice);