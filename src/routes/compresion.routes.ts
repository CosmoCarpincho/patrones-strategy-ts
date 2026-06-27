import { Router } from 'express';
import { CompresionController } from '../controllers/CompresionController.js';
import { CompresionRAR } from '../strategies/classic/RARStrategy.js';
import { CompresionZIP } from '../strategies/classic/ZipStrategy.js';

const router = Router();
const controller = new CompresionController();

router.post('/clasica/rar', controller.usarEstrategiaClasica(new CompresionRAR()));
router.post('/clasica/zip', controller.usarEstrategiaClasica(new CompresionZIP()));
// router.post('/duck-typing', controller.usarEstrategiaEstructural);
// router.post('/funcional', controller.usarEstrategiaFuncional);
// router.post('/diccionario', controller.usarEstrategiaDiccionario);

export default router;