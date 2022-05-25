/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Enrique'
}

const pasajero2: Pasajero = {
    nombre: 'Inma',
    hijos: ['Lucía', 'Ricardo']
}

function imprimeHijos( pasajero: Pasajero ): void {

    //Si hijos no tiene valor, no calculará el length. De este modo, si no tiene valor, devolverá un 0
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log( cuantosHijos );
    
}

imprimeHijos(pasajero1);