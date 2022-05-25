/*
    ===== Código de TypeScript =====
*/

class Heroe {
    // alterEgo: string;
    // edad: number;
    // nombreReal: number;

    //Con una sola línea de código se crea la propiedad y se le asigna el valor que recibe
    //por parámetros
    constructor(
        public alterEgo?: string, 
        public edad?: number, 
        public nombreReal?: string
    ) {}
}



const ironman = new Heroe('Ironman', 45, 'Tony');

console.log(ironman);
