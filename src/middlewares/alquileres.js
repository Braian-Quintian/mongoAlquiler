import { Router } from 'express';
import { methodsAlquileres } from '../routes/alquileres.routes.js';
const router = Router();

router.get('/',limitGet(), methodsAlquileres.getAlquileres);
router.get('/inicio',limitGet(), methodsAlquileres.getAlquileresInicio);
router.get('/total',limitGet(), methodsAlquileres.getTotalAlquileres);
router.get('/entre',limitGet(), methodsAlquileres.getAlquileresEntre);
router.get('/:id',limitGet(), methodsAlquileres.getAlquilerById);
export {
    router
}