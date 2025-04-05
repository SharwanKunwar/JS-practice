//main div box for containing all other elements.
const div = document.createElement('div');
div.setAttribute("class", "container");
div.setAttribute("id", "main");
div.style.backgroundColor = "black";
div.style.color = "white";
div.style.padding = "10px";
div.style.height = "90vh";
div.style.gap = "15px";
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";
document.body.appendChild(div);







//method to create elements
function createNewElement(content){
    const element01 = document.createElement("div");
    element01.setAttribute("id", "e01");
    element01.setAttribute("class", "item")
    element01.style.width = "80px";
    element01.style.height = "82px";
    element01.style.display = "flex";
    element01.style.justifyContent = "center";
    element01.style.alignItems = "center";
    element01.style.fontFamily = "monospace";
    element01.style.color = "black";
    element01.style.boxShadow = "9px -11px 100px white"
    element01.style.fontWeight = "bold";
    element01.style.borderRadius = "5px";
    element01.style.fontSize = "25px";
    element01.style.cursor = "pointer";
    element01.style.textShadow = "2px 2px 4px"
    element01.style.backgroundColor = "white";
    const textContent = document.createTextNode(content);
    element01.appendChild(textContent);
    div.appendChild(element01);
}

let rand01 = Math.round(Math.random()*10+1);
let rand02 = Math.round(Math.random()*10+1);
let rand03 = Math.round(Math.random()*10+1);

createNewElement(rand01);
createNewElement(rand02);
createNewElement(rand03);


if(rand01 != rand02 || rand03 != rand01){

    setTimeout(() => {
        window.location.href = window.location.href;


    }, 10); // Refreshes after 5 seconds
}else{
    const title = document.createElement("h1");
title.setAttribute("title", "non");
title.style.marginLeft = "20px";
title.style.fontFamily = "monospace";
title.setAttribute("class", "title");
title.innerHTML = "Lucky number";

div.appendChild(title);
console.log(title);
}








