
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "main-container")
    mainDiv.setAttribute("class", "box");
    mainDiv.style.height = "900px";
    mainDiv.style.display = "flex";
    mainDiv.style.justifyContent = "center";
    mainDiv.style.alignItems = "center";
    mainDiv.style.gap = "300px";
    mainDiv.style.borderRadius = "10px"
    mainDiv.style.flexDirection = "column";
    mainDiv.style.backgroundColor = "gray";
    document.body.appendChild(mainDiv);
    
    const simpleLongBox = document.createElement("div");
    simpleLongBox.setAttribute("id", "simple-long-box");
    simpleLongBox.setAttribute("class", "box");
    simpleLongBox.style.width = "100%";
    simpleLongBox.style.height = "200px";
    simpleLongBox.style.backgroundColor = "white";
    simpleLongBox.style.display = "flex";
    simpleLongBox.style.justifyContent = "center";
    simpleLongBox.style.alignItems = "center";
    simpleLongBox.style.gap = "15px";
    mainDiv.appendChild(simpleLongBox);

    const simpleLongBox02 = document.createElement("div");
    simpleLongBox02.style.width = "95%";
    simpleLongBox02.style.height = "200px";
    simpleLongBox02.style.backgroundColor = "black";
    simpleLongBox02.style.fontSize = "25px";
    simpleLongBox02.innerHTML = "The mazic you are looking for is in the work you are avoiding.";
    simpleLongBox02.style.fontFamily = "monospace";
    simpleLongBox02.style.textShadow = "2px 4px 5px pink"
    simpleLongBox02.style.color = "white";
    simpleLongBox02.style.borderRadius = "20px";
    simpleLongBox02.style.display = "flex";
    simpleLongBox02.style.justifyContent = "center";
    simpleLongBox02.style.alignItems = "center";
    simpleLongBox02.style.gap = "15px";
    mainDiv.appendChild(simpleLongBox02);




    function createSubElement(content){
        const element = document.createElement("div");
        element.setAttribute("id", "sun");
        element.setAttribute("class", "day");
        const mycontent = document.createTextNode(content);
        element.appendChild(mycontent);
        element.style.width = "200px";
        element.style.fontSize = "20px";
        element.style.height = "100px";
        element.style.borderRadius = "10px";
        element.style.display = "flex";
        element.style.justifyContent = "center";
        element.style.alignItems = "center";
        element.style.color = "white";
        element.style.backgroundColor = "black";
        return element;
    }

    function assignElement(element) {
        simpleLongBox.appendChild(element);

    }

    let week = ["SUNDAY", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    week.forEach( (item) => {
        let days = createSubElement(item.toUpperCase());
        assignElement(days);
    })


    const long02 = simpleLongBox();





