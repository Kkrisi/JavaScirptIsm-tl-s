
export default class Kartya{
    //adattagok
    #obj={} //privát adattag
    #szuloElem;

    //constructor
    constructor(obj, szuloElem){
        this.#obj=obj
        this.#szuloElem=szuloElem
        this.kutyaKiir()
        //gombelem a Kartya saját adattagja lesz
        this.gombElem=$(".kivalaszt:last")
        console.log(this.gombElem)
        this.esemenKezelo()

    }

    //tagfüggvény
    kutyaKiir(){
        this.#szuloElem.append(`
            <div class="col-lg-4 col-md-6">
                <div class="card-body">
                    <h3 class="card-title">${this.#obj.nev}</h3>
                    <p>kor: ${this.#obj.kor}</p>
                    <p>neme: ${this.#obj.nem}</p>
                    <button class="btn brn-success" kivalaszt>Kiválasztott</button>
                </div>
            </div>
        `)
    }
    

    //gombesemények kezelése
    esemenKezelo(){
        this.gombElem.on("click",()=>{
            console.log(this)
            const e = new CustomEvent("kivalasztott",{detail:this.#obj})
            window.dispatchEvent(e)
        })
    }


    // Névtelen fügvvénynél ... a 'this' azt a HTML DOM elemet jelenti amelyikre épp hivatkozunk
    // Nyílfüggvény esetén a 'this' arrra az osztálypéldányra mutat amelyik az adott nyilvfüggvényt körbefogja
}