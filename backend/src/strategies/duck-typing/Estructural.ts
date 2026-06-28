// Tipado Estructural 
// OJO COmpresion7z NO implementa explícitamente el tipo Compresor

// 1. Forma esperada
export type Compresor = {
    comprimir(datos: string): string;
};

// 2. Estrategia concreta 
export class Compresion7z {
    comprimir(datos: string): string {
        return `[7z] El archivo '${datos}' se comprimió aprovechando el Duck Typing de TS.`;
    }

    // OJO -->
    // Método extra que la interfaz no pide, pero TS lo permite.
    metodoExclusivoDe7z() {
        console.log("Haciendo cosas específicas de 7z");
    }
}

// 3. Contexto
export class GestorEstructural {
    private compresor: Compresor;

    constructor(compresor: Compresor) {
        this.compresor = compresor;
    }

    procesar(datos: string): string {
        // ejecución porque Compresion7z tiene el método 'comprimir'
        return this.compresor.comprimir(datos);
    }
}