//import moment from 'moment';
const moment = require('moment');

const HistClinica = require('../models/HistClinica');
const Historia =  require('../models/Historia');
const {validarDiagnostico} = require('../functions/validaciones.js');
const CrearHistClinica = async (req, res) => {
        const {fecha, diagnostico, tratamiento, examenesAuxiliares, id_Historia,anamnesis} = req.body;
		try {
            // const DIAGNOSTICOvalido = await validarDiagnostico(diagnostico);
            // if(!DIAGNOSTICOvalido){
            //   return res.status(400).json({
            //     ok: false,
            //     msg: 'Excedió el limite de caracteres em Diagnostico incorrecto',
            //   });
            // }
			const idHistoria = await Historia.findOne({ _id: id_Historia });
			if (!idHistoria) {
				return res.status(404).json({
					ok: false,
					msg: 'Paciente no existe con ese id',
				});
			}

			
			let histClinica = new HistClinica(req.body);
            await histClinica.save();
            res.status(201).json({
                ok: true,
                histClinica: histClinica,
            });
        } catch (error) {
            console.log('Error: ' + error.toString());
            res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador',
            });
        }
 };

const ActualizarHistClinica = async (req, res = response) => {
	const histClinicaId = req.params.id;
	const {id_Historia} = req.body;
	const idHistoria = id_Historia;
	try {
		const histClinica = await HistClinica.findById(histClinicaId);
		if (!histClinica) {
			res.status(404).json({
				ok: false,
				msg: 'Historia Clinica no existe con ese id',
			});
		}
		// if (histClinica.id_Historia.toString() !== idHistoria) {
		// 	return res.status(401).json({
		// 		ok: false,
		// 		msg: 'No tiene privilegio de editar este Paciente',
		// 	});
		// }
		const nuevaHistClinica = {
			...req.body,
			id_Historia: idHistoria
		};

		const histClinicaActualizado = await HistClinica.findByIdAndUpdate(
			histClinicaId,
			nuevaHistClinica,
			{
				new: true,
			}
		);
		res.json({
			ok: true,
			histClinica: histClinicaActualizado,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};



const MostrarHistClinica = async (req, res) => {
    const histClinica = await HistClinica.find();
    return res.json(histClinica);
}
const MostrarHistClinicaId = async (req,res) =>{
	const h = await HistClinica.findOne({_id:req.params.id})
	return res.json(h)
}
const MostrarHistClinicaPaciente = async (req,res)=>{
	const hist = req.params.id;
    const histClinica = await HistClinica.find({id_Historia:hist });
	console.log(histClinica);
	console.log("TU PATITA")
    return res.json(histClinica);	
}

const MostrarPesoyEdad = async(req, res = response)=>{

	// const idPaciente= req.params.id
	// const fecha= fecha;
	const histClinica= await HistClinica.find({id_Historia:req.params.id});
	//console.log(histClinica)
	const pesoPaciente =histClinica.map((item) => {return item.peso})
	console.log(pesoPaciente)
	const fechaHistoria =histClinica.map((item) => {return item.fecha})
	console.log(fechaHistoria)
	const tallaPaciente = histClinica.map((item) => {return item.talla})
	console.log(tallaPaciente)
	const historia = await Historia.find({_id:req.params.id});
	// console.log(historia)
	const fechaNac =historia.map((item) => {return item.fecha_nac})
	console.log(fechaNac)
	// console.log(resp._doc.fecha=histClinica)
	// console.log(req.params.tratamiento)	


		const respuesta=moment(fechaHistoria).diff(moment(fechaNac).format(), 'months');
		//console.log(respuesta)
        let milisegundosDia= 24*60*60*1000;

        let meses = 30*milisegundosDia

        let milisegundosTranscurridos= Math.abs(fechaHistoria);
		//console.log(milisegundosTranscurridos)
        let diasTranscurridos= Math.round(milisegundosTranscurridos/meses);

        //console.log(diasTranscurridos)

	if (histClinica) {
		return res.json({
			pesoPaciente,
			tallaPaciente,
			fechaHistoria,
			fechaNac
		});
		// console.log(usuario)
	}
}

module.exports = {
	CrearHistClinica,
	ActualizarHistClinica,
	MostrarHistClinica,
	MostrarHistClinicaPaciente,
	MostrarHistClinicaId,
	MostrarPesoyEdad
 
}