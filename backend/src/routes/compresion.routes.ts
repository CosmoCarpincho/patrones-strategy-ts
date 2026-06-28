import { Router } from 'express';
import { CompresionController } from '../controllers/CompresionController.js';
import { CompresionRAR } from '../strategies/classic/CompresionRAR.js';
import { CompresionZIP } from '../strategies/classic/CompresionZIP.js';
import { Compresion7z } from '../strategies/duck-typing/Estructural.js';
import { comprimirRAR, comprimirZIP } from '../strategies/functional/Funcional.js';

const router = Router();
const controller = new CompresionController();

router.post('/clasica/rar', controller.usarEstrategiaClasica(new CompresionRAR()));
router.post('/clasica/zip', controller.usarEstrategiaClasica(new CompresionZIP()));
router.post('/duck-typing/7z', controller.usarEstrategiaEstructural(new Compresion7z()));
router.post('/funcional/rar', controller.usarEstrategiaFuncional(comprimirRAR));
router.post('/funcional/zip', controller.usarEstrategiaFuncional(comprimirZIP));
router.post('/diccionario/:tipo', controller.usarEstrategiaDiccionario());

export default router;