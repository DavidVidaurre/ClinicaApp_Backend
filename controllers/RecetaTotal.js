const RecetaTotal = require('../models/RecetaTotal');
const HistClinica = require('../models/HistClinica');
const Receta = require('../models/Receta');

// const CrearRecetaTotal = async (req, res) => {
//     const {fechaProx, id_HistClinica} = req.body;

//     try {
//         const idHistClinica = await HistClinica.findOne({id_HistClinica});
//         if (!idHistClinica) {
//             res.status(404).json({
//                 ok: false,
//                 msg: 'Historia Clinica no existe con ese id',
//             });
//         }
//         recetaT = new RecetaTotal(req.body)
//         await recetaT.save()
//         res.status(201).json({
//             ok: true,
//             recetaT: recetaT
//         })
//     } catch(error){
//         res.status(500).json({
//             ok: false,
//             msg: "Por favor hable con el administrador"
//         })
//     }
// }

const CrearRecetaTotal = async (req, res) => {
    const { fechaProx, id_HistClinica } = req.body;
    try {
		let recetaTotal = await RecetaTotal.findOne({ id_HistClinica });
		if (recetaTotal) {
			return res.status(400).json({
				ok: false,
				msg: 'Ya existe una receta para esta historia clínica',
			});
		}

        const idHistClinica = await HistClinica.findOne({id_HistClinica});
        if (!idHistClinica) {
            res.status(404).json({
                ok: false,
                msg: 'Historia Clinica no existe con ese id',
            });
        }
        
        let recetaT = new RecetaTotal(req.body)

        await recetaT.save()

        res.status(201).json({
            ok: true,
            recetaT: recetaT
        })
    } catch (error) {
        console.log('Error: ' + error.toString());
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        });
    }
};

const ActualizarRecetaTotal = async (req, res) => {
	const recetaTId = req.params.id;
	const {id_HistClinica} = req.body;
	const idHistClinica= id_HistClinica;
	try {
		const recetaT = await RecetaTotal.findById(recetaTId);
		if (!recetaT) {
			res.status(404).json({
				ok: false,
				msg: 'Receta no existe con ese id',
			});
		}
		if (recetaT.id_HistClinica.toString() !== idHistClinica) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegio de editar este Paciente',
			});
		}
		const nuevaRecetatotal= {
			...req.body,
		};

		const RecetaT_Actualizado = await RecetaTotal.findByIdAndUpdate(
			recetaTId,
			nuevaRecetatotal,
			{
				new: true,
			}
		);
		res.json({
			ok: true,
			recetaT: RecetaT_Actualizado,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const MostrarRecetaTotal = async (req, res) => {
    const recetaT = await RecetaTotal.find();
    return res.json(recetaT);
}

const MostrarRecetaTotalIDHistClinica = async (req, res) => {
	const idHist = req.params.id
	const recetasT = await RecetaTotal.find({id_HistClinica: idHist})
	// const fechaProx = recetasT.map((item) => {return item.fechaProx})
	// if(fechaProx){
	// 	return res.json(fechaProx)
	// }
	if(recetasT){
		return res.json(recetasT)
	}
}

const MostrarMedicamentosRecetaTotal = async (req, res) => {
    const idHist = req.params.id
    const recetas = await Receta.find({id_HistClinica: idHist})
	return res.json(recetas)
}

module.exports = {
    CrearRecetaTotal,
    ActualizarRecetaTotal,
    MostrarRecetaTotal,
    MostrarRecetaTotalIDHistClinica,
    MostrarMedicamentosRecetaTotal
}