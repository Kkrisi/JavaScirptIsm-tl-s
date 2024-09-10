export default class Kartyak {
    #lista=[]
    #taroloElem
    constructor(lista, taroloELEM){
        this.#lista=lista
        this.#taroloElem=taroloELEM
        this.kutyaKiir()
    }


    kutyaKiir(){
        this.#lista.forEach((elem)=>{
            console.log("elem:",elem)
            new Kartyak(elem, this.#taroloElem);
        });
    }
    
}