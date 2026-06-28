import { IEstrategiaCompresion } from './interfaces/IEstrategiaCompresion.js';

export class Compresion7z implements IEstrategiaCompresion {
    comprimir(archivo: string): string {
        return `[7z] El archivo ${archivo} se comprimio usando 7z. (strategy GOF, clásica)`;
    }
}