
import { kutyaLISTA } from "../adatok.js";

export function kutyaKiir(kutya){
    for (let i = 0; i < kutyaLISTA.length; i++) {
        const element = kutyaLISTA[i];
        
    }

    const taroloELEM = $(".tartalom")
    taroloELEM.append(`
        <div class="col-lg-4 col-md-6">
            <div class="card-body">
                <h3 class="card-title">${kutya.nev}</h3>
                <p>kor: ${kutya.kor}</p>
                <p>neme: ${kutya.nem}</p>
                <button class="btn brn-success"Kiválasztott></button>
            </div>
        </div>
    `)
}
