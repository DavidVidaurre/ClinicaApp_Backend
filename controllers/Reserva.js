const { response } = require('express');
const Reserva = require('../models/Reserva');

const CrearReserva = async (req, res) => {
    const {nombre_paciente, fecha} = req.body;

    try {
        let fechaReserva = await Reserva.findOne({fecha});
        if(fechaReserva){
            return res.status(400).json({
                ok: false,
                msg: "Ya existe una reserva a esa hora"
            })
        };
        let reserva = new Reserva({
            nombre_paciente,
            fecha: new  Date(fecha)
        });
        await reserva.save();
        res.status(201).json({
            ok: true,
            reserva: reserva
        })
    } catch(error){
        res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador"
        })
    }
}

const ActualizarReserva = async (req, res=response) => {
    const ReservaID = req.params.id;
    try{
        //const Reserva = await Reserva.findById(req.params.id)
        const NuevaReserva = {
            ...req.body
        }
        const ReservaActualizada = await Reserva.findByIdAndUpdate(
            ReservaID,
            NuevaReserva,
            {
                new : true
            }
        );
        res.json({
            ok: true,
            evento: ReservaActualizada
        })
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador"
        })
    }
};

const MostrarReservas = async (req, res) => {
    const reserva = await Reserva.find();
    return res.json(reserva);
};

const MostrarReservaPorID = async (req, res) => {
    const reserva = await Reserva.findOne({_id:req.params.id})
    return res.json(reserva)
}

const EliminarReserva = async (req, res) => {
    const reserva = await Reserva.findByIdAndDelete(req.params.id)

    if(reserva){
        return res.json({
            ok: true,
            msg: "Reserva eliminada"
        })
    }
}

const MostrarNombreYFecha = async (req, res) => {
    const reserva = await Reserva.find()
    const Nombre = reserva.map((item) => {return item.nombre_paciente})
    const Fecha = reserva.map((item) => {return item.fecha})

    if(reserva){
        return res.json({
            Nombre,
            Fecha
        })
    }
}

module.exports = {
    CrearReserva,
    ActualizarReserva,
    MostrarReservas,
    MostrarReservaPorID,
    EliminarReserva,
    MostrarNombreYFecha
}