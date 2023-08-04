import { router as Clientes } from '../src/middlewares/clientes.js'
import { router as Automovil } from '../src/middlewares/automoviles.js'
import { router as Alquileres } from '../src/middlewares/alquileres.js'
import { router as Reservas } from '../src/middlewares/reservas.js'

export async function dynamicRouter(req, res, next) {
    const { collection } = req.params;

    switch (collection) {
        case 'clientes':
            return Clientes(req, res, next);
        case 'automoviles':
            return Automovil(req, res, next);
        case 'alquileres':
            return Alquileres(req, res, next);
        case 'reservas':
            return Reservas(req, res, next);
        default:
            return res.status(404).send({ error: 'Ruta no encontrada' });
    }
}