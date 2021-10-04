const Cita = require('../models/Cita');
const Historia= require('../models/Historia')

const CrearCita = async (req, res) => {
        const { nombre_paciente, fecha_nac, sexo, edad, DNI, responsable, condicion, motivo, fecha } = req.body;
        // const CitaId = req.params.id;
		// const idHistoria = req.id_Historia;
		try {
            let fechaConsulta = await Cita.findOne({ fecha });
            if (fechaConsulta) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe una cita para consulta a esa hora',
                });
            }

			//1. Nuevo 
			//2.Continuador
			let historia = await Historia.findOne({dni_paciente:DNI});
			// for (const i of historia) {
			// 	if(i.dni_paciente===DNI){
			// 		console.log(i)
			// 	}
			// }


			console.log(historia)
			if(historia && condicion===1){
				// console.log(DNI);
				return res.status(400).json({
                    ok: false,
                    msg: 'ERROR, La historia ya existe por lo tanto no puede ser un paciente nuevo',
                });
			}
			// else{
			// 	console.log("historia");
			// 	console.log(DNI)
			// }

			// let historia= Object.values(Historia);
			// if(historia[0]==DNI && condicion==1){
			// 	console.log("condicion")
			// }
			// else{
			// 	console.log("Agregar")
			// 	console.log(condicion)
			// 	console.log(historia[0])
			// }



			if(historia!=null && condicion==2){
				return res.status(400).json({
                    ok: false,
                    msg:'La historia no existe por lo tanto no puede ser un paciente continuador',
                });
			}

			if(condicion==1){
				
				let historia= new Historia({
					nombres_paciente: nombre_paciente,
					fecha_nac,
					dni_paciente: DNI,
					sexo,
					edad
				});
				await historia.save();

				let cita = new Cita({
					fecha,
					motivo,
					responsable,
					nombre_paciente,
					fecha_nac,
					sexo,
					edad,
					DNI,
					condicion,
					fecha,
					historia: historia.id_Historia
				})	
				
				await cita.save();
				res.status(201).json({
					ok: true,
					cita: cita,
				});
			}

			if(condicion==2){
				let buscar= Historia.findOne({DNI});
				
				let cita = new Cita({
					fecha,
					motivo,
					responsable,
					id_historia: buscar.id_Historia
				})
					
				await cita.save();	
				res.status(201).json({
					ok: true,
					cita: cita,
				});				
			}




            // cita = new Cita(req.body);


            // if (histClinica.id_Paciente.toString() !== id_Paciente) {
			// 	return res.status(401).json({
			// 		ok: false,
			// 		msg: 'No tiene privilegio de crear este Paciente',
			// 	});
			// }
            // const idPaciente = await Cita.find(id_Paciente);
            // if (!idPaciente) {
            //     res.status(404).json({
            //         ok: false,
            //         msg: 'Paciente no existe con ese id',
            //     });
            // }
    
            // await cita.save();
            
            // res.status(201).json({
            //     ok: true,
            //     cita: cita,
            // });
        } catch (error) {
            console.log('Error: ' + error.toString());
            res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador',
            });
        }
 };

 const ActualizarCita = async (req, res = response) => {
	const CitaId = req.params.id;
	const idPaciente = req.id_Paciente;
	try {
		const Cita = await Cita.findById(CitaId);
		if (!Cita) {
			res.status(404).json({
				ok: false,
				msg: 'Cita para Consulta no existe con ese id',
			});
		}
		if (Cita.id_Paciente.toString() !== idPaciente) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegio de editar este Paciente',
			});
		}
		const nuevaCita= {
			...req.body,
			id_Paciente: idPaciente,
		};

		const CitaActualizado = await Cita.findByIdAndUpdate(
			CitaId,
			nuevaCita,
			{
				new: true,
			}
		);
		res.json({
			ok: true,
			Cita: CitaActualizado,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const MostrarCita = async (req, res) => {
    const cita = await Cita.find();
    return res.json(cita);
}

const EliminarCita = async (req, res = response) =>{
	const CitaId = req.params.id;
	const cita= await Cita.findByIdAndDelete(CitaId)
	if(cita){
		console.log(cita)
		return res.json({
			ok: true,
			msg: 'Cita eliminado'
		})
	}
	
	
} 

module.exports = {
	CrearCita,
    ActualizarCita,
    MostrarCita,
	EliminarCita
}