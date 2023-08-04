import { Router } from 'express';
import { methodsAutomoviles } from '../routes/automoviles.routes.js';
const router = Router();

router.get('/', methodsAutomoviles.getAutomoviles);

export {
    router
}