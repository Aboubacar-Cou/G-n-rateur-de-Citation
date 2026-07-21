import {Citation} from './Citation.js'

const stat = document.querySelector(".stat");
const btn =document.createElement("button");
btn.textContent ="Generate";
btn.classList.add("button");
stat.appendChild(btn);
const h3 = document.createElement("h3");
const p = document.createElement("p");
p.classList.add("para");
h3.classList.add("h3");

btn.addEventListener("click",generate);

 function generate(){
     let i= parseInt(Math.random()*6);
    p.textContent = Sitation[i].description;
    h3.textContent = Sitation[i].auteur;
    stat.insertBefore(h3,btn);
    stat.insertBefore(p,btn);
   
 }