import { comprimirConDiccionario, TipoCompresion } from '../../strategies/registry/Diccionario.js';

export class CompresionDiccionarioService {
    ejecutar(tipo: TipoCompresion, archivo: string): string {
        return comprimirConDiccionario(tipo, archivo);
    }
}