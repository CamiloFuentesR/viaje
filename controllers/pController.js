import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

class Vistas {
    paginaInicio = async (req, res) => { // req- lo ue enviamos : res lo que express nos responde

        const promiseDB = [];
        
        //hace que corran las dos consultas en simultaneo, no tiene que esperar un await para que se ejecute el otro
        promiseDB.push(Viaje.findAll({ limit: 3 }));
        promiseDB.push(Testimonial.findAll({ limit: 3 }))

        try {
            const resultado = await Promise.all(promiseDB)

            res.render('inicio', {
                pagina: 'Inicio',
                clase: 'home',
                viajes: resultado[0],
                testimoniales: resultado[1]
            });
        } catch (error) {
            console.log(error)
        }
    };

    paginaNosotros = (req, res) => { // req- lo ue enviamos : res lo que express nos responde

        res.render('nosotros', {
            pagina: 'Nosotros'
        });
    };

    paginaViajes = async (req, res) => { // req- lo ue enviamos : res lo que express nos responde
        //consultar bdd
        const viajes = await Viaje.findAll();


        res.render('viajes', {
            pagina: 'Próximos Viajes',
            viajes
        });
    };

    //muestra un viaje por su slug
    paginaDetalleViaje = async (req, res) => {
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
    paginaTestimoniales = async (req, res) => { // req- lo ue enviamos : res lo que express nos responde

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

}

const vistas = new Vistas();


export {
    vistas
}