import { Router } from 'express';
import { methodsAlquileres } from '../routes/alquileres.routes.js';
const router = Router();

router.get('/', methodsAlquileres.getAlquileres);

export {
    router
}