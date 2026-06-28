import { Request, Response } from 'express';
import { IEstrategiaCompresion } from '../strategies/classic/interfaces/IEstrategiaCompresion.js';
import { GestorArchivosClasico } from '../strategies/classic/GestorClasico.js';
import { Compresor, GestorEstructural } from '../strategies/duck-typing/Estructural.js';
import { FuncionCompresion, procesarArchivo } from '../strategies/functional/Funcional.js';
import { comprimirConDiccionario, TipoCompresion } from '../strategies/registry/Diccionario.js';

export class CompresionController {
    // private obtenerNombreEstrategia = (estrategia: unknown): string => {
    //     const estrategiaTipada = estrategia as { name?: string; constructor?: { name?: string; }; };

    //     return estrategiaTipada.name ?? estrategiaTipada.constructor?.name ?? 'EstrategiaDesconocida';
    // };

    public usarEstrategiaClasica = (estrategia: IEstrategiaCompresion) => {
        return (req: Request, res: Response) => {
            const { archivo } = req.body;

            const gestor = new GestorArchivosClasico(estrategia);
            const resultado = gestor.ejecutarCompresion(archivo);

            res.json({
                paradigma: 'GOF Strategy (tipo java)',
                // estrategia: this.obtenerNombreEstrategia(estrategia),
                resultado,
            });
        };
    };

    public usarEstrategiaEstructural = (compresor: Compresor) => {
        return (req: Request, res: Response) => {
            const { archivo } = req.body;

            const gestor = new GestorEstructural(compresor);
            const resultado = gestor.procesar(archivo);

            res.json({
                paradigma: 'Duck Typing',
                // estrategia: this.obtenerNombreEstrategia(compresor),
                resultado,
            });
        };
    };

    public usarEstrategiaFuncional = (algoritmo: FuncionCompresion) => {
        return (req: Request, res: Response) => {
            const { archivo } = req.body;
            const resultado = procesarArchivo(archivo, algoritmo);

            res.json({
                paradigma: 'Functional Strategy',
                // estrategia: this.obtenerNombreEstrategia(algoritmo),
                resultado,
            });
        };
    };

    public usarEstrategiaDiccionario = () => {
        return (req: Request, res: Response) => {
            const { archivo } = req.body;
            const { tipo } = req.params as { tipo: TipoCompresion; };

            const resultado = comprimirConDiccionario(tipo, archivo);

            res.json({
                paradigma: 'Registry / Dictionary',
                // estrategia: tipo,
                resultado,
            });
        };
    };

}