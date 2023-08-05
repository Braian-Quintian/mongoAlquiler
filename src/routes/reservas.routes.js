import { connect } from '../connection/connection.js';

const getReservas = async (req, res) => {
    if(!req.rateLimit) return;
    try{
        let db = await connect();
        let reserva =db.collection("Reserva");

        let result = await reserva.aggregate([
            { $match: { Estado: "Pendiente" } },
            {
                $lookup: {
                    from: "Cliente",
                    localField: "ID_Cliente",
                    foreignField: "id",
                    as: "cliente"
                }
            },
            { $unwind: "$cliente"},
            {
                $lookup: {
                    from: "Automovil",
                    localField: "ID_Automovil",
                    foreignField: "id_",
                    as: "automovil"
                  }
            },
            { $unwind: "$automovil"},
            {
                $project: {
                    _id: 0,
                    Fecha_Inicio: 0,
                    Fecha_Fin:0,
                    Fecha_Reserva: 0,
                    "cliente._id": 0,
                    "automovil._id": 0
                }
            }
        ]).toArray();

        res.json(result);
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getReservasByIdPendientes = async (req, res) => {
    if(!req.rateLimit) return;
    try{
        let db = await connect();
        let reserva =db.collection("Reserva");

        let result = await reserva.aggregate([
            { $match: {$and: [{ID_Cliente: parseInt(req.params.id)},{ Estado: "Pendiente" }]} },
            {
                $lookup: {
                    from: "Cliente",
                    localField: "ID_Cliente",
                    foreignField: "id",
                    as: "cliente"
                }
            },
            { $unwind: "$cliente"},
            {
                $project: {
                    _id: 0,
                    Fecha_Inicio: 0,
                    Fecha_Fin:0,
                    Fecha_Reserva: 0,
                    "cliente._id": 0,
                }
            }
        ]).toArray();
        res.json(result)
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getReservasById = async (req, res) => {
    if(!req.rateLimit) return;
    try{
        let db = await connect();
        let reserva =db.collection("Reserva");

        let result = await reserva.aggregate([
            {
                $match: { id: parseInt(req.params.id) }
            },
            {
                $lookup: {
                    from: "Cliente",
                    localField: "ID_Cliente",
                    foreignField: "id",
                    as: "cliente"
                }
            },
            {
                $unwind: "$cliente"
            },
            {
                $project: {
                    _id:0,
                  "cliente.id": 1,
                  "cliente.Nombre": 1,
                  "cliente.Apellido": 1,
                  "cliente.DNI":1,
                  "cliente.Direccion":1,
                  "cliente.Telefono":1,
                  "cliente.Email":1
                }
            }
        ]).toArray();
        res.json(result)
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const methodsReservas = {
    getReservas,
    getReservasByIdPendientes,
    getReservasById
}