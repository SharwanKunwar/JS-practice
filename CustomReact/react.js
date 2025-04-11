
const mainElement = document.querySelector("#Box");

const reactElement = {
    type: "h1",
    attributes: {
        id: "name",
        class: "text"
    },
    text: "This is h1 here"
}


function createReactElement(React_E, Root_E){
    let domElement = document.createElement(React_E.type);
    domElement.innerHTML = React_E.text;
    // domElement.setAttribute("id", React_E.attributes.id);
    // domElement.setAttribute("class", React_E.attributes.class);

    for( let attri in React_E.attributes){
        if(attri == 'children') continue;
        domElement.setAttribute(attri, React_E.attributes[attri]);
        console.log(`key: ${attri}  --> Value: = ${React_E.attributes[attri]}`);
    }

    Root_E.appendChild(domElement);
}

createReactElement(reactElement, mainElement);
