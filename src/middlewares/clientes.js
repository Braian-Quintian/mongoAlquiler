import { Router } from 'express';
import { methodsClientes } from '../routes/clientes.routes.js';
const router = Router();

router.get('/', methodsClientes.getClientes);
router.get('/alquiler', methodsClientes.getClientesAlquiler);
router.post('/', methodsClientes.addCliente);
router.get('/:id', methodsClientes.getClienteById);

export {
    router
}