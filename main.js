// document.getElementById("lan-add-btn").addEventListener("click", () => {
//     let addRow = `<li class="list-group-item">

//                         <input class="form-check-input" type="checkbox" value="" id="checkDefault">
//                         <label class="form-check-label" for="checkDefault">
//                             <span id="lan-date-1"></span>
//                         </label>

//                     </li>
//                     <button type="button" id="lan-btn-1" class="btn btn-outline-dark btn-sm">Modifica</button>`;
//     document.getElementById("lan").innerHTML += addRow;
// })

document.getElementById("lan-btn-1").addEventListener("click", () => {
    let newDate1 = prompt("Inserisci il nuovo orario");
    const token1 = "token1";
    localStorage.setItem(token1, newDate1);
    document.getElementById("lan-date-1").innerText = newDate1;
})
document.getElementById("lan-btn-2").addEventListener("click", () => {
    let newDate2 = prompt("Inserisci il nuovo orario");
    const token2 = "token2";
    localStorage.setItem(token2, newDate2);
    document.getElementById("lan-date-2").innerText = newDate2;
})
document.getElementById("lan-btn-3").addEventListener("click", () => {
    let newDate3 = prompt("Inserisci il nuovo orario");
    const token3 = "token3";
    localStorage.setItem(token3, newDate3);
    document.getElementById("lan-date-3").innerText = newDate3;
})
document.getElementById("lan-btn-4").addEventListener("click", () => {
    let newDate4 = prompt("Inserisci il nuovo orario");
    const token4 = "token4";
    localStorage.setItem(token4, newDate4);
    document.getElementById("lan-date-4").innerText = newDate4;
})

document.addEventListener("DOMContentLoaded", () => {
    const token1 = "token1";
    const newDateSaved1 = localStorage.getItem(token1);
    if (newDateSaved1) {
        document.getElementById("lan-date-1").innerText = newDateSaved1;
    }
    const token2 = "token2";
    const newDateSaved2 = localStorage.getItem(token2);
    if (newDateSaved2) {
        document.getElementById("lan-date-2").innerText = newDateSaved2;
    }
    const token3 = "token3";
    const newDateSaved3 = localStorage.getItem(token3);
    if (newDateSaved3) {
        document.getElementById("lan-date-3").innerText = newDateSaved3;
    }
    const token4 = "token4";
    const newDateSaved4 = localStorage.getItem(token4);
    if (newDateSaved4) {
        document.getElementById("lan-date-4").innerText = newDateSaved4;
    }
})