/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>( argumento: T ) {
    return argumento;
}

let soyString = queTipoSoy( 'Hola mundo' );
let soyNumero = queTipoSoy( 78 );
let soyArreglo = queTipoSoy([1,2,3]);

let soyExplicito = queTipoSoy<string>('Hola Mundo');