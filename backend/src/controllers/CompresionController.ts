import { Request, Response } from 'express';
import { TipoCompresion } from '../strategies/classic/CompresionStrategyFactory.js';
import { TipoCompresionEstructural } from '../strategies/duck-typing/Estructural.js';
import { TipoCompresion as TipoCompresionDiccionario } from '../strategies/registry/Diccionario.js';
import { CompresionService } from '../services/compresion/CompresionService.js';
import { CompresionDiccionarioService } from '../services/compresion/CompresionDiccionarioService.js';
import { CompresionEstructuralService } from '../services/compresion/CompresionEstructuralService.js';
import { CompresionFuncionalService } from '../services/compresion/CompresionFuncionalService.js';

export class CompresionController {
    // GOF
    private readonly compresionService = new CompresionService();
    // comprime con la estrategia de gof
    public comprimir = (req: Request, res: Response): void => {
        const { archivo } = req.body;
        const { tipo } = req.params as { tipo: TipoCompresion; };

        const resultado = this.compresionService.comprimir(tipo, archivo);

        res.json({
            paradigma: 'GOF Strategy (tipo java)',
            estrategia: tipo,
            resultado,
        });
    };


    // OTRAS FORMAS
    private readonly estructuralService = new CompresionEstructuralService();
    private readonly funcionalService = new CompresionFuncionalService();
    private readonly diccionarioService = new CompresionDiccionarioService();

    public comprimirConEstrategiaEstructural = (req: Request, res: Response): void => {
        const { archivo } = req.body;
        const { tipo } = req.params as { tipo: TipoCompresionEstructural; };

        const resultado = this.estructuralService.ejecutar(tipo, archivo);

        res.json({
            paradigma: 'Duck Typing',
            estrategia: tipo,
            resultado,
        });
    };

    public comprimirConEstrategiaFuncional = (req: Request, res: Response): void => {
        const { archivo } = req.body;
        const { algoritmo } = req.params as { algoritmo: 'rar' | 'zip'; };
        const resultado = this.funcionalService.ejecutar(algoritmo, archivo);

        res.json({
            paradigma: 'Functional Strategy',
            resultado,
        });
    };

    public comprimirConEstrategiaDiccionario = (req: Request, res: Response): void => {
        const { archivo } = req.body;
        const { tipo } = req.params as { tipo: TipoCompresionDiccionario; };

        const resultado = this.diccionarioService.ejecutar(tipo, archivo);

        res.json({
            paradigma: 'Registry / Dictionary',
            resultado,
        });
    };

}