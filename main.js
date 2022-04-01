console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById('node1') method to access this";
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const node2 = document.getElementsByClassName("node2");
node2[0].textContent = "I used the getElementByClassName('node2') method to access this";
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const h3 = document.getElementsByTagName("h3");
for(let i=0; i<h3.length; i++){
    h3[i].textContent = "I used the getElementByTagName('h3') method to access all of these";
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let p = document.createElement("p");
p.textContent = "This node was created using the createElement() method"
let parent = document.querySelector("#parent");
parent.appendChild(p);
// TODO: Append the created node to the parent node using the element.appendChild() method

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let a = document.createElement("a")
a.textContent = "I am an <a> tag"
a.href = "https://google.com";
a.target = "_blank";
parent.insertBefore(a, p);

// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let parent3 = document.getElementById("exercise-container3");
let N1 = document.getElementById("N1");
let input = document.createElement("input");
input.value = "Replaced N1 child";
parent3.replaceChild(input, N1)
// TODO: Remove the "New Child Node"
parent3.removeChild(input);

/*----------- Exercise #4: ANIMATIONS ----------- */
// TODO: Write your JavaScript here to make the red box go from left to right
// let interval = setInterval(move, 10);
let containter = document.querySelector("#container");
let box = document.querySelector("#box");

let left = 0;
let x = 0;

let interval = setInterval(() => {
    box.style.left = `${++x}px`;
    if(x>=container.clientWidth - box.clientWidth){
        clearInterval(interval)
    }
}, 10);

// BONUS - Make the red box go all the way around the perimeter of the green box

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    modalBtn.textContent = `Clicked ${++count};`
    btn.disabled = true;
    
    let main = document.querySelector(".root");
    let container = document.createElement("div");
    container.classList.add("modal-container");
    
    let modal = document.createElement("div");
    modal.classList.add("modal");

    let modalTitle = document.createElement("h2");
    modalTitle.textContent = "Modal Title";

    let modalText = document.createElement("p");
    modalTitls.textContent = "This is the text content of the modal";

    let modalBtn = document.createElement("button");
    modalBtn.document.classList.add("button")
    modal.Btn.textContent = "Close";
    modal.Btn.addEventListener("click", () => {
        main.removeChild(container);
        btn.disabled = false;
    });
modal.append(modalTitle, modalText, modalBtn);
container.appendChild(modal);

main.appendChild(container);

});