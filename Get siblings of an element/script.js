const element = document.getElementById("element-id");
const siblings = Array.from(element.parentNode.children).filter(child => child !== element);
console.log(siblings);
