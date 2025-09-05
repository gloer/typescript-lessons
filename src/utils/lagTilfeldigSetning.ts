import {adjektiver, substantiver} from "./ord";

function finnTilfeldigOrd(ordliste : string[]) : string {
    const antallOrd = ordliste.length;
    const indeks = Math.random () * antallOrd;
    const i = Math.floor(indeks);
    return ordliste[i];
}

export function lagTilfeldigSetning() : string {
    return `${finnTilfeldigOrd(adjektiver)} ${finnTilfeldigOrd(substantiver)}`;
}
