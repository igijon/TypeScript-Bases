/*
    ===== Código de TypeScript =====
*/

class Heroe {
    alterEgo: string;
    edad: number;
    nombreReal: number;

    imprimirNombre() {
        return this.alterEgo+' '+this.nombreReal;
    }

}

interface Personaje2 {
    alterEgo?: string;
    edad?: number;
    nombreReal?: number;

    imprimirNombre?: () => string; //Pero no puedo implementarlo aquí
}

const ironman = new Heroe();
const spiderman: Personaje2 = {}

console.log(ironman);
