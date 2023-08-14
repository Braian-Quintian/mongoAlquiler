import { Router } from 'express';
import { methodsReservas } from '../routes/reservas.routes.js';
const router = Router();

router.get('/',limitGet(), methodsReservas.getReservas);
router.get('/pendiente/:id',limitGet(), methodsReservas.getReservasByIdPendientes);
router.get('/:id',limitGet(), methodsReservas.getReservasById);

export {
    router
}   