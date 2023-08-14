import { Router } from 'express';
import { methodsAutomoviles } from '../routes/automoviles.routes.js';
import {limitGet} from '../rules/reglas.js';
const router = Router();

router.get('/',limitGet(), methodsAutomoviles.getAutomoviles);
router.get('/disponibles',limitGet(), methodsAutomoviles.getAutomovilesDisponibles);
router.get('/capacidad',limitGet(), methodsAutomoviles.getCapacidadAutomoviles);
router.get('/ordenados',limitGet(), methodsAutomoviles.getAutomovilesOrdenados);
router.get('/sucursal',limitGet(), methodsAutomoviles.getAutomovilesPorSucursal);
router.get('/capacidad-disponibles',limitGet(), methodsAutomoviles.getCapacidadAutomovilesDisponibles);

export {
    router
}