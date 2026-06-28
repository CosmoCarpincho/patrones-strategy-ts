import { IEstrategiaCompresion } from './interfaces/IEstrategiaCompresion.js';

export class GestorArchivosClasico {
    private estrategia: IEstrategiaCompresion;

    constructor(estrategia: IEstrategiaCompresion) {
        this.estrategia = estrategia;
    }

    setEstrategia(estrategia: IEstrategiaCompresion): void {
        this.estrategia = estrategia;
    }

    ejecutarCompresion(archivo: string): string {
        return this.estrategia.comprimir(archivo);
    }
}