import { Router } from 'express';
import { methodsEmpleados } from '../routes/empleados.routes.js';
const router = Router();

router.get('/', methodsEmpleados.getEmpleados);

export {
    router
}