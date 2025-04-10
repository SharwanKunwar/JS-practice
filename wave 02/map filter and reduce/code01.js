//map filter and reduce

//map  : make new array and return
let arr = [33,44,54,35];
// console.log(arr);

// let hold = arr.map((item)=> item+2);  automatic reutrn 

// let hold = arr.map((item)=>{     //we have to return if we use {}
//     return item+2;
// })
// console.log(arr);


//ex 02  (value, index, array)
// let ages = [22,33,44,55,66];
// let hold_age = ages.map((value, index, array)=>{
//     console.log(value)
// })



// ----------- filter ------not effected orginal array ------------  // conditionals || true or false
// let ages = [22,33,44,645,88];

// let hold = ages.filter((age)=>{
//     return age<50;
    
// })
// console.log(hold);


//-------------------- reduce ------------------------ //return value of total of array 

let expense_list = [100,200,300,400,500];

let hold = expense_list.reduce((past , present)=>{
    return past + present;
})

console.log(hold);
