const Receta = require('../models/Receta');
const HistClinica = require('../models/HistClinica');
const Historia =  require('../models/Historia');

const CrearReceta = async (req, res) => {
        const { cantidad, nombreMedicina, indicaciones, id_HistClinica } = req.body;
        try {
            // let Receta = await Receta.findOne({ nombre_Receta });
            // if (Receta) {
            //     return res.status(400).json({
            //         ok: false,
            //         msg: 'Ya existe una Receta con este nombre',
            //     });
            // }

            const idHistClinica = await HistClinica.findOne({id_HistClinica});
            if (!idHistClinica) {
                res.status(404).json({
                    ok: false,
                    msg: 'Historia Clinica no existe con ese id',
                });
            }
            
            receta = new Receta(req.body);
            
    
            await receta.save();
            
            res.status(201).json({
                ok: true,
                receta: receta,
            });
        } catch (error) {
            console.log('Error: ' + error.toString());
            res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador',
            });
        }
 };

const ActualizarReceta = async (req, res = response) => {
	const recetaId = req.params.id;
	const {id_HistClinica} = req.body;
	const idHistClinica= id_HistClinica;
	try {
		const receta = await Receta.findById(recetaId);
		if (!receta) {
			res.status(404).json({
				ok: false,
				msg: 'Receta no existe con ese id',
			});
		}
		if (receta.id_HistClinica.toString() !== idHistClinica) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegio de editar este Paciente',
			});
		}
		const nuevaReceta= {
			...req.body,
		};

		const Receta_Actualizado = await Receta.findByIdAndUpdate(
			recetaId,
			nuevaReceta,
			{
				new: true,
			}
		);
		res.json({
			ok: true,
			receta: Receta_Actualizado,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const MostrarReceta = async (req, res) => {
    const receta = await Receta.find();
    return res.json(receta);
}

const MostrarRecetaID = async (req, res) => {
	//const recetaId = req.params.id;
	// const {id_HistClinica} = req.body;
	// const idHistClinica= id_HistClinica;

	const receta = await Receta.findOne({_id:req.params.id})
	return res.json(receta)
}

const MostrarRecetaIDHistClinica = async (req, res) => {
	// const  idHist  = await HistClinica.find({_id})
	const idHist = req.params.id
	// console.log(idHist)
	const recetas = await Receta.find({id_HistClinica: idHist})
	return res.json(recetas)
}

const MostrarDatosParaReceta = async (req, res) => {
	const histClinica = await HistClinica.findOne({_id: req.params.id});
	// const fechaHistoria = histClinica.map((item) => {return item.fecha})
	// const peso = histClinica.map((item) => {return item.peso})
	// const talla = histClinica.map((item) => {return item.talla})
	// const pc = histClinica.map((item) => {return item.pc})
	const recetas = await Receta.find({id_HistClinica: req.params.id})
	const historia = await Historia.findOne({_id:histClinica.id_Historia});
	// const nombrePac = historia.map((item) => {return item.nombres_paciente})
	// const fechaNacPac = historia.map((item) => {return item.fecha_nac})
	return res.json({
		histClinica,
		recetas,
		historia
	})
	// return res.json({
	// 	recetas,
	// 	nombrePac,
	// 	fechaNacPac,
	// 	fechaHistoria,
	// 	peso,
	// 	talla,
	// 	pc
	// })
}
    
module.exports = {
	CrearReceta,
	ActualizarReceta,
	MostrarReceta,
	MostrarRecetaID,
	MostrarRecetaIDHistClinica,
	MostrarDatosParaReceta
}