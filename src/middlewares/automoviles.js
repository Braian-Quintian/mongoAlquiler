import { Router } from 'express';
import { methodsAutomoviles } from '../routes/automoviles.routes.js';
const router = Router();

router.get('/', methodsAutomoviles.getAutomoviles);
router.get('/disponibles', methodsAutomoviles.getAutomovilesDisponibles);
router.get('/capacidad', methodsAutomoviles.getCapacidadAutomoviles);
router.get('/ordenados', methodsAutomoviles.getAutomovilesOrdenados);

export {
    router
}