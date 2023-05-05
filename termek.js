import { ADATLISTA } from "./adat.js";

class Termek { 
  constructor(szuloElem) {
    const item = ADATLISTA;
    const kontener = $("<div>");
    const nevElem = $("<div>").text(item.nev);
    const korElem = $("<div>").text(item.kor);
    const kepElem = $("<img>").attr("src", item.kep);
    kontener.append(nevElem, korElem, kepElem);
    $(szuloElem).append(kontener);
  }
}

export default Termek;
