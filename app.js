function createNewElement(tag, text) {

    let newTag = document.createElement(tag);
    let newEle = newTag.textContent = text;
    return newEle; 
    
}

const callUs = createNewElement('h2', "Call Us!");
const classNow = document.querySelector(".callNow");

classNow.appendChild(callUs);


const button = createNewElement('button', "530.600.2555");
button.classList.add('hollow', 'button', 'success');

classNow.appendChild(button);

