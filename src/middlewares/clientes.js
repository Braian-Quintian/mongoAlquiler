import { Router } from 'express';
import { methodsClientes } from '../routes/clientes.routes.js';
import {limitGet, limitPost} from '../rules/reglas.js';
const router = Router();

router.get('/', limitGet(), methodsClientes.getClientes);
router.get('/alquiler',limitGet(), methodsClientes.getClientesAlquiler);
router.post('/',limitPost(), methodsClientes.addCliente);
router.get('/:id',limitGet(), methodsClientes.getClienteById);

export {
    router
}