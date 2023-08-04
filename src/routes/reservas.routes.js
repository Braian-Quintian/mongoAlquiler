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


export const methodsReservas = {
    getReservas
}