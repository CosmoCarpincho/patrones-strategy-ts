import { IEstrategiaCompresion } from './interfaces/IEstrategiaCompresion.js';
import { CompresionRAR } from './CompresionRAR.js';
import { CompresionZIP } from './CompresionZIP.js';
import { Compresion7z } from './Compresion7z.js';

export type TipoCompresion = 'rar' | 'zip' | '7z';

export class CompresionStrategySimpleFactory {
    static crear(tipo: TipoCompresion): IEstrategiaCompresion {
        switch (tipo) {
            case 'rar':
                return new CompresionRAR();
            case 'zip':
                return new CompresionZIP();
            case '7z':
                return new Compresion7z();
        }
    }
}