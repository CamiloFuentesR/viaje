import express from 'express';
import {
    vistas

} from '../controllers/pController.js';
import { guardarTestimoniales } from '../controllers/testimonialController.js'
const router = express.Router();
console.log(vistas.paginaInicio)
router.get('/', vistas.paginaInicio);
router.get('/nosotros', [vistas.paginaNosotros]);

router.get('/viajes', [vistas.paginaViajes]);
router.get('/viajes/:slug', [vistas.paginaDetalleViaje]);

router.get('/testimoniales', vistas.paginaTestimoniales);
router.post('/testimoniales', guardarTestimoniales);

export default router;