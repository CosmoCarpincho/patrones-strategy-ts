import { TipoCompresion, CompresionStrategySimpleFactory } from '../../strategies/classic/CompresionStrategyFactory.js';
import { CompresorArchivoContext } from '../../strategies/classic/CompresorArchivoContext.js';
export class CompresionService {
    comprimir(tipo: TipoCompresion, archivo: string): string {
        const estrategia = CompresionStrategySimpleFactory.crear(tipo);
        const gestor = new CompresorArchivoContext(estrategia);

        return gestor.comprimir(archivo);
    }
}