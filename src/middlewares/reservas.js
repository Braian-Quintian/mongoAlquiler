import { Router } from 'express';
import { methodsReservas } from '../routes/reservas.routes.js';
const router = Router();

router.get('/', methodsReservas.getReservas);
router.get('/:id', methodsReservas.getReservasById);

export {
    router
}