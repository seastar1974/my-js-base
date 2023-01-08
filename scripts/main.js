import * as element from './createElements.js'

// Get body
let body = document.querySelector("body");

element.getNewElement(body, "lable0", "label", "En label");

// Row 1
// Box 1
let divElement = element.getNewElement(body, "content", "div", "");
element.getNewElementWithClass(divElement, "box1", "div", "box", "");
let box1 = document.getElementById("box1");
box1.style = "background-color:red";
element.getNewBoxContent(box1, 1);

// Box 2
element.getNewElementWithClass(divElement, "box2", "div", "box", "");
let box2 = document.getElementById("box2");
box2.style = "background-color:lightblue";
element.getNewBoxContent(box2, 2);

// Box 3
element.getNewElementWithClass(divElement, "box3", "div", "box", "");
let box3 = document.getElementById("box3");
box3.style = "background-color:lightgreen";
element.getNewBoxContent(box3, 3);

// Row 2
// Box 4
let divElement2 = element.getNewElement(body, "content", "div", "");
element.getNewElementWithClass(divElement2, "box4", "div", "box", "");
let box4 = document.getElementById("box4");
box4.style = "background-color:red";
element.getNewBoxContent(box4, 4);

// Box 5
element.getNewElementWithClass(divElement2, "box5", "div", "box", "");
let box5 = document.getElementById("box5");
box5.style = "background-color:lightblue";
element.getNewBoxContent(box5, 5);

// Box 6
element.getNewElementWithClass(divElement2, "box6", "div", "box", "");
let box6 = document.getElementById("box6");
box6.style = "background-color:lightgreen";
element.getNewBoxContent(box6, 6);

// Row 3
// Box 7
let divElement3 = element.getNewElement(body, "content", "div", "");
element.getNewElementWithClass(divElement3, "box7", "div", "box1", "");
let box7 = document.getElementById("box7");
box7.style = "background-color:purple";
element.getNewBoxContent(box7, 7);

// Box 8
element.getNewElementWithClass(divElement3, "box8", "div", "box", "");
let box8 = document.getElementById("box8");
box8.style = "background-color:magenta";
element.getNewBoxContent(box8, 8);

