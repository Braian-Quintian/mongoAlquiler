import { router as Clientes } from '../src/middlewares/clientes.js'

export async function dynamicRouter(req, res, next) {
    const { collection } = req.params;

    switch (collection) {
        case 'clientes':
            return Clientes(req, res, next);
        default:
            return res.status(404).send({ error: 'Ruta no encontrada' });
    }
}