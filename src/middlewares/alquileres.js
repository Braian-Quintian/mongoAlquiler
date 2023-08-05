import { Router } from 'express';
import { methodsAlquileres } from '../routes/alquileres.routes.js';
const router = Router();

router.get('/', methodsAlquileres.getAlquileres);
router.get('/inicio', methodsAlquileres.getAlquileresInicio);
router.get('/total', methodsAlquileres.getTotalAlquileres);
router.get('/:id', methodsAlquileres.getAlquilerById);
export {
    router
}