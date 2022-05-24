/*
    ===== Código de TypeScript =====
*/
let habilidades: (string | number | boolean)[] = ['Bash', 'Counter', 'Healing', 100, true];

habilidades.push(true);

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; //Pueblo natal será opcional
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);