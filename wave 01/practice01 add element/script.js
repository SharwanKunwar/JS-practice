        
// function createElement(con){
//     const div = document.createElement("div");
//         div.setAttribute("id","main");
//         div.setAttribute("class", "box");
//         const myContent = document.createTextNode("Sharwan jung kunwar");
//         div.appendChild(myContent);
//         div.style.color = "white";
//         div.style.padding = "10px";
//         div.style.textAlign = "center";
//         div.style.fontSize = "20px";
//         div.style.margin = "10px"
//         div.style.backgroundColor = "black";


//         document.body.appendChild(div);
//     }
// createElement("love","gg");



function createElement(content){
    const div = document.createElement("div");
    div.style.width = "40%"
    div.setAttribute("id", "main");
    div.setAttribute("class", "box");
    div.style.color = "white";
    div.style.background = "black";
    div.style.padding = "10px";
    div.style.textAlign = "center";
    div.style.fontSize = "20px";
    div.style.margin = "10px";
    div.style.borderRadius = "10px";
    div.style.boxShadow = "1px 1px 7px black";
    const myContent = document.createTextNode(content)
    div.appendChild(myContent);

    console.log(div);
    document.body.appendChild(div);
}

const days = ["sunday", "monday", "tuesday", "wednesday", "thursday","friday", "saturday"];
days.push("my day joyful day");


// for(let i = 0; i < days.length; i++){
//     const currentDay = days[i];
//     createElement(`${currentDay}`);
// }

// demonstrates with forEach loop
// days.forEach((item) => {
//     createElement(item);
// })