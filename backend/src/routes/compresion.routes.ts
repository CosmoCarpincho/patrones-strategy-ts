import { Router } from 'express';
import { CompresionController } from '../controllers/CompresionController.js';

const router = Router();
const controller = new CompresionController();

// Estrategia de GOF
router.post('/comprimir/gof/:tipo', controller.comprimir);



// OTRAS FORMAS
// Inyección de comportamiento por función
router.post('/comprimir/funcional/:algoritmo', controller.comprimirConEstrategiaFuncional);

// Despacho por registro
router.post('/comprimir/diccionario/:tipo', controller.comprimirConEstrategiaDiccionario);

// Contrato estructural
router.post('/comprimir/duck-typing/:tipo', controller.comprimirConEstrategiaEstructural);

export default router;