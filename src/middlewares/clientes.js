import { Router } from 'express';
import { methodsClientes } from '../routes/clientes.routes.js';
const router = Router();

router.get('/', methodsClientes.getClientes);
router.get('/:id', methodsClientes.getClienteById);

export {
    router
}