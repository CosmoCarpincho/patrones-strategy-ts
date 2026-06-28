// Firma
export type FuncionCompresion = (archivo: string) => string;

// Funciones que serian las estrategias de gof. (funciones puras)
export const comprimirRAR: FuncionCompresion = (archivo) => {
    return `[RAR] El archivo '${archivo}' se comprimió pasando una función por parámetro.`;
};

export const comprimirZIP: FuncionCompresion = (archivo) => {
    return `[ZIP] El archivo '${archivo}' se comprimió pasando una función por parámetro.`;
};

// Contexto (Usamos una función de orden superior)
export function procesarArchivo(archivo: string, algoritmo: FuncionCompresion): string {
    return algoritmo(archivo);
}


