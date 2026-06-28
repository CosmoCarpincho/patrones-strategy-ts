import { IEstrategiaCompresion } from './interfaces/IEstrategiaCompresion.js';

export class CompresorArchivoContext {
    private estrategia: IEstrategiaCompresion;

    constructor(estrategia: IEstrategiaCompresion) {
        this.estrategia = estrategia;
    }

    setEstrategia(estrategia: IEstrategiaCompresion): void {
        this.estrategia = estrategia;
    }

    comprimir(archivo: string): string {
        return this.estrategia.comprimir(archivo);
    }
}