import {adjektiver, substantiver} from "./ord";

function finnTilfeldigOrd(ordliste) {
    const antallOrd = ordliste.length;
    const indeks = Math.random () * antallOrd;
    const i = Math.floor(indeks);
    return ordliste[i];
}

export function lagTilfeldigSetning() {
    return `${finnTilfeldigOrd(adjektiver)} ${finnTilfeldigOrd(substantiver)}`;
}
