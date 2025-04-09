//----------------------- Lexical scop ---------------------------------
// function sharwan(){
//     const FullName = "sharwan jung kunwar";
//     let age = 22;

//     function love(val){
//         const myCode = "10101";
//         const name = "mahakal";
//         const wife = "parvati";
//         let age = 100;

//         console.log(`${name} + ${wife} and ${FullName} is devoted to them.`);
//     }
//     love();
        // console.log(myCode);         //you can't access
    
// }

// sharwan();




//----------------------- Closer ---------------------------------
function parentFunction(){
    const dadName = "dad";
    let money = 2000;

    function childFunction(){
        const sonName = "son"
        const takeSome = money-1000;
        console.log(dadName);           //you can access your dad name
        console.log(takeSome);
    }
    // console.log(takeSome);  // you can't access the takeSome
    return childFunction;
}

const myFun = parentFunction();
myFun();

