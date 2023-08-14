import { Router } from 'express';
import { methodsEmpleados } from '../routes/empleados.routes.js';
const router = Router();

router.get('/',limitGet(), methodsEmpleados.getEmpleados);
router.get('/otros',limitGet(), methodsEmpleados.getOtrosEmpleados);

export {
    router
}