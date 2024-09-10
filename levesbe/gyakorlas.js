
import { kutyaLISTA } from "../adatok.js"
import { kutyaKiir } from "./fv.js"
import Kartya from "../view/Kartya.js"

// kutyák adatait megjelenítenénk a tartalom divben kulon a divekben, egymas mellett az egyes kutyak kulon adatait 

// Hozzunk letre valtozokat 
const cim = "Minden amit a kutyakrol tudni kell"
let nev = "Béla"
console.log("Név:",nev)
//Headert írjuk ki a headerbe a meglévő cím alá
// megfogjuk a html elemet
const cimElem = $("header")
console.log(cimElem)

//beleirunk/hozzafuz
cimElem.append(`<p>${cim}</p>`)

/*
const kutya1 = {
    nev:"Dézi",
    kor:12,
    nem:"nőstény"
}
kutya1.nev = "Morzsa"
console.log("kutya uj neve:",kutya1.nev)
*/

const taroloELEM = $(".tartalom");

kutyaLISTA.forEach((elem)=>{
    console.log("elem:",elem)
    kutyaKiir(elem)
    new Kartya(elem,taroloELEM);
});








