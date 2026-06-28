import { GestorEstructural, CompresorEstructuralFactory, TipoCompresionEstructural } from '../../strategies/duck-typing/Estructural.js';

export class CompresionEstructuralService {
    ejecutar(tipo: TipoCompresionEstructural, archivo: string): string {
        const compresor = CompresorEstructuralFactory.crear(tipo);
        const gestor = new GestorEstructural(compresor);

        return gestor.procesar(archivo);
    }
}