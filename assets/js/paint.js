function configureListeners() {
    const images = document.getElementsByTagName('img');// select img elements  


     for (let i = 0; i < images.length; i++) {        
        images[i].addEventListener("mouseover", mouseOver, true);
        images[i].addEventListener("mouseout", mouseOut, true);// iterate over images and add mouseover event listeners      
    } 
}

function mouseOver(event) {
    const element = event.target;
    if (element.classList.contains("dim")) {
        element.classList.add("dim");
    }
    getProductInfo(element.id);
}

function mouseOut(event) {
    const element = event.target;
    if (element.classList.contains("dim")) {
        element.classList.remove("dim");
    }

    const colorPrice = document.getElementById("color-price");
    colorPrice.textContent = " ";

    const color = document.getElementById("color-name");
    color.textContent = "";

    event.preventDefault();
}

function getProductInfo(paintColor) {
    let colorInfo = {
        "pn1":{price: "$14.99", colorName: "Lime Green"},
        "pn2":{price: "$11.14", colorName: "Medium Brown"},
        "pn3":{price: "$22.99", colorName: "Royal Blue"},
        "pn4":{price: "$13.42", colorName: "Solid Red"},
        "pn5":{price: "$21.98", colorName: "Solid White"},
        "pn6":{price: "$4.99", colorName: "Solid Black"},
        "pn7":{price: "$8.22", colorName: "Solid Cyan"},
        "pn8":{price: "$11.99", colorName: "Solid Purple"},
        "pn9":{price: "$14.99", colorName: "Solid Yellow"},
    };
    const info = colorInfo[paintColor] || {price: "N/A", colorName: "Unknown"};
    updatePrice(info.price, info.colorName);
}
    
function updatePrice(price, colorName) {
           
    let colorPrice = document.getElementById("color-price"); // select element with corresponding id
    colorPrice.textContent = price;// display price
        
        let color = document.getElementById("color-name");// select element with corresponding id
        color.textContent = colorName;//display color name
}




/*function addOpacity(event) {
    if (this.classList.contains(".dim")){
        this.classList.add(".dim")
    }
    // add appropriate CSS class
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
    if (this.classList.contains(".dim")){
        this.classList.remove(".dim")
    }
     //remove appropriate CSS class

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}
*/
    //let updatePrice = updatePrice(colorName, price) 
    
    /*switch (paintColor) {
        case 'pn1':
            price = "$14.99"
            colorName = "Line Green" 
            updatePrice(price, colorName)       
            break;           
        case 'pn2':
            price = "$11.14"
            colorName = "Medium Brown"
            updatePrice(price, colorName) 
            break;            
        case 'pn3':
            price = "$22.99"
            colorName = "Royal blue"
            updatePrice(price, colorName) 
            break;   
        case 'pn4':
            price = "$4.99"
            colorName = "Solid Black" 
            updatePrice(price, colorName) 
            break;   
        case 'pn5':
            price = "$8.22"
            colorName = "Solid Cyan"
            updatePrice(price, colorName) 
            break;   
        case 'pn6':
            price = "$11.99"
            colorName = "Solid Purple"
            updatePrice(price, colorName) 
            break;   
        case 'pn7':
            price = "$13.42"
            colorName = "Solid Red"
            updatePrice(price, colorName) 
            break;   
        case 'pn8':
            price = "$21.98"
            colorName = "Solid White"
            updatePrice(price, colorName) 
            break;   
        case 'pn9':
            price = "$14.99"
            colorName = "Solid Yellow"
            updatePrice(price, colorName) 
            break;   
          default:              
    }
*/

    

