import Kartyak from "./view/Kartyak.js";
import { kutyaLISTA } from "./adatok.js";

const kivalasztottKutyaLista=[];
const taroloELEM = $(".tartalom");

new Kartyak(kutyaLISTA, taroloELEM)

// tegyük beke a kiválasztott kutya adatait a kivalasztottKutyaListaba

// itt feliratkozunk a kartya osztalyban létrehozott saját eseményünkre
$(window).on("kivalasztott",()=>{
    console.log(event.detail)
    kivalasztottKutyaLista.push(event.detail)
    console.log(kivalasztottKutyaLista)
})