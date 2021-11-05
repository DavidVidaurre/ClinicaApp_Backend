const Vacuna = require('../models/Vacuna');
const Historia = require('../models/Historia');

const CrearVacuna = async (req, res) => {
        const { bcg, hepatb, dpt, neumococo, rotavirus, hepatb2, idem, idem2, influenza, influenza2, meningococo, spr, varicela, meningococo2,
			hepata, famarilla, dpt2, spr2, varicela2, hepata2, neumococo2, influenza3, dpt3, spr3, papilomavirus, papilomavirus2, otros, 
			id_Historia } = req.body;
        try {
            // let vacuna = await Vacuna.findOne({ nombre_vacuna });
            // if (vacuna) {
            //     return res.status(400).json({
            //         ok: false,
            //         msg: 'Ya existe una vacuna con este nombre',
            //     });
            // }

            const idHistoria = await Historia.findOne({id_Historia});
            if (!idHistoria) {
                res.status(404).json({
                    ok: false,
                    msg: 'Historia no existe con ese id',
                });
            }
            
            vacuna = new Vacuna(req.body);
            
    
            await vacuna.save();
            
            res.status(201).json({
                ok: true,
                vacuna: vacuna,
            });
        } catch (error) {
            console.log('Error: ' + error.toString());
            res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador',
            });
        }
 };

const ActualizarVacuna = async (req, res = response) => {
	const vacunaId = req.params.id;
	// const {id_Historia} = req.body;
	// const idHistoria = id_Historia;
	try {
		const vacuna = await Vacuna.findById(vacunaId);
		if (!vacuna) {
			res.status(404).json({
				ok: false,
				msg: 'Vacuna no existe con ese id',
			});
		}
		// if (vacuna.id_Historia.toString() !== idHistoria) {
		// 	return res.status(401).json({
		// 		ok: false,
		// 		msg: 'No tiene privilegio de editar este Paciente',
		// 	});
		// }
		const nuevaVacuna= {
			...req.body,
		};

		const vacuna_Actualizado = await Vacuna.findByIdAndUpdate(
			vacunaId,
			nuevaVacuna,
			{
				new: true,
			}
		);
		res.json({
			ok: true,
			vacuna: vacuna_Actualizado,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const MostrarVacuna = async (req, res) => {
    const vacuna = await Vacuna.find();
    return res.json(vacuna);
}
const VacunaId = async (req,res)=>{
	const v = await Vacuna.find({ id_Historia: req.params.id})
	return res.json(v)
}
module.exports = {
	CrearVacuna,
  ActualizarVacuna,
  MostrarVacuna,
  VacunaId
}