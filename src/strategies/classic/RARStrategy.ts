import { IEstrategiaCompresion } from './interfaces/IEstrategiaCompresion.js';

export class CompresionRAR implements IEstrategiaCompresion {
    comprimir(archivo: string): string {
        return `[RAR] El archivo ${archivo} se comprimio usando RAR. (strategy GOF, clásica)`;
    }
}