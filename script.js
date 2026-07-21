import {Citation} from './Citation.js'

const stat = document.querySelector(".stat");
console.log(stat);

const btn = document.createElement("button");
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
    p.textContent = Citation[i].description;
    h3.textContent = Citation[i].auteur;
    if(stat.contains(h3) && stat.contains(p)){
        stat.removeChild(h3);
        stat.removeChild(p);
    }
    stat.insertBefore(h3,btn);
    stat.insertBefore(p,btn);
 }