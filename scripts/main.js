import * as element from './createElements.js'

// Get body
let body = document.querySelector("body");

element.getNewElement(body, "lable0", "label", "En label");

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
element.getNewElementWithClass(divElement, "box3", "div", "box1", "C");
let box3 = document.getElementById("box3");
box3.style = "background-color:lightgreen";
element.getNewBoxContent(box3, 3);

let divElement2 = element.getNewElement(body, "content", "div", "");
element.getNewElementWithClass(divElement2, "box11", "div", "box", "A");
let box4 = document.getElementById("box11");
box4.style = "background-color:red";
element.getNewBoxContent(box4, 4);

element.getNewElementWithClass(divElement2, "box12", "div", "box", "B");
let box5 = document.getElementById("box12");
box5.style = "background-color:lightblue";
element.getNewBoxContent(box5, 5);

element.getNewElementWithClass(divElement2, "box13", "div", "box", "C");
let box6 = document.getElementById("box13");
box6.style = "background-color:lightgreen";
element.getNewBoxContent(box6, 6);

element.getNewElementWithClass(divElement2, "box14", "div", "box", "D");
let box7 = document.getElementById("box14");
box7.style = "background-color:purple";
element.getNewBoxContent(box7, 7);


