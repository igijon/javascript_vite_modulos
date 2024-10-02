import '/css/styles.css'
import vanillaLogo from '/what-is-vanila-js.png'
import { getName, getGrade } from "/js/students";

let divImg = document.getElementById('app');
let img = document.createElement('img');
img.src = vanillaLogo;
divImg.append(img);
console.log(getName(73), getGrade(73)) //Suzy