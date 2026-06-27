import { Request, Response } from 'express';
import { IEstrategiaCompresion } from '../strategies/classic/interfaces/IEstrategiaCompresion.js';
import { GestorArchivosClasico } from '../strategies/classic/GestorClasico.js';

export class CompresionController {
    public usarEstrategiaClasica = (estrategia: IEstrategiaCompresion) => {
        return (req: Request, res: Response) => {
            const { archivo } = req.body;

            const gestor = new GestorArchivosClasico(estrategia);
            const resultado = gestor.ejecutarCompresion(archivo);

            res.json({
                paradigma: 'GOF Strategy (tipo java)',
                estrategia: estrategia.constructor.name,
                resultado,
            });
        };
    };

}