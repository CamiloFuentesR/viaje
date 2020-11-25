import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = (req, res) => { // req- lo ue enviamos : res lo que express nos responde
    res.render('inicio', {
        pagina: 'Inicio'
    });
};

const paginaNosotros = (req, res) => { // req- lo ue enviamos : res lo que express nos responde

    res.render('nosotros', {
        pagina: 'Nosotros'
    });
};

const paginaViajes = async (req, res) => { // req- lo ue enviamos : res lo que express nos responde
    //consultar bdd
    const viajes = await Viaje.findAll();


    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });
};

//muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: { slug } });

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error)

    }
}
const paginaTestimoniales = async (req, res) => { // req- lo ue enviamos : res lo que express nos responde

    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'testimoniales',
            testimoniales
        });

    } catch (error) {
        console.log(error);

    }

};

export {
    paginaInicio,
    paginaViajes,
    paginaTestimoniales,
    paginaNosotros,
    paginaDetalleViaje
}