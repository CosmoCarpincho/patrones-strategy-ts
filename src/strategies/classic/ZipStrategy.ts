import { IEstrategiaCompresion } from './interfaces/IEstrategiaCompresion.js';

export class CompresionZIP implements IEstrategiaCompresion {
    comprimir(archivo: string): string {
        return `[ZIP] El archivo ${archivo} se comprimio usando ZIP. (strategy GOF, clásica)`;
    }
}