import { comprimirRAR, comprimirZIP, procesarArchivo } from '../../strategies/functional/Funcional.js';

type TipoAlgoritmoFuncional = 'rar' | 'zip';

export class CompresionFuncionalService {
    ejecutar(tipo: TipoAlgoritmoFuncional, archivo: string): string {
        const algoritmo = tipo === 'rar' ? comprimirRAR : comprimirZIP;

        return procesarArchivo(archivo, algoritmo);
    }
}