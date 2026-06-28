/**
 * ESTILO DICCIONARIO / REGISTRY
 * Ideal para APIs REST donde el cliente envía un string decidiendo el algoritmo.
 * Elimina la necesidad de usar sentencias if/else o switch en el controlador.
 */

// 1. Mapa de 'estrategias'/algoritmos en memoria

const EstrategiasDeCompresion = {
    'zip': (archivo: string) => `[Diccionario - ZIP] Comprimido: ${archivo}`,
    'rar': (archivo: string) => `[Diccionario - RAR] Comprimido: ${archivo}`,
    '7z': (archivo: string) => `[Diccionario - 7z] Comprimido: ${archivo}`
} as const;

// Extraemos los tipos de las claves dinámicamnte
export type TipoCompresion = keyof typeof EstrategiasDeCompresion;

// 2. Función despachadora (Contexto simplificado)
export function comprimirConDiccionario(tipo: string, archivo: string): string {

    // Existe la clave?
    if (!(tipo in EstrategiasDeCompresion)) {
        throw new Error(`Algoritmo ${tipo} no soportado.`);
    }

    // Ejecutamos
    const algorimo = EstrategiasDeCompresion[tipo as TipoCompresion];
    return algorimo(archivo);
}