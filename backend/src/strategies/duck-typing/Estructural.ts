export type Compresor = {
    comprimir(datos: string): string;
};

export type TipoCompresionEstructural = '7z' | 'rar' | 'zip';

export class CompresionEstructural7z {
    comprimir(datos: string): string {
        return `[7z] El archivo '${datos}' se comprimió aprovechando el Duck Typing de TS.`;
    }

    metodoExclusivoDe7z() {
        console.log('Haciendo cosas específicas de 7z');
    }
}

export class CompresionEstructuralRAR {
    comprimir(datos: string): string {
        return `[RAR] El archivo '${datos}' se comprimió aprovechando el Duck Typing de TS.`;
    }

    metodoExclusivoDeRAR() {
        console.log('Haciendo cosas específicas de RAR');
    }
}

export class CompresionEstructuralZIP {
    comprimir(datos: string): string {
        return `[ZIP] El archivo '${datos}' se comprimió aprovechando el Duck Typing de TS.`;
    }

    metodoExclusivoDeZIP() {
        console.log('Haciendo cosas específicas de ZIP');
    }
}

export class CompresorEstructuralFactory {
    static crear(tipo: TipoCompresionEstructural): Compresor {
        switch (tipo) {
            case '7z':
                return new CompresionEstructural7z();
            case 'rar':
                return new CompresionEstructuralRAR();
            case 'zip':
                return new CompresionEstructuralZIP();
            default:
                throw new Error(`Tipo de compresion estructural no soportado: ${tipo}`);
        }
    }
}

export class GestorEstructural {
    private compresor: Compresor;

    constructor(compresor: Compresor) {
        this.compresor = compresor;
    }

    procesar(datos: string): string {
        return this.compresor.comprimir(datos);
    }
}