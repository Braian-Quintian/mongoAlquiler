import { connect } from '../connection/connection.js';

const getAlquileres = async (req, res) => {
    if (!req.rateLimit) return;
    try {
        let db = await connect();
        let alquiler = db.collection("Alquiler");

        let result = await alquiler.aggregate([
            { $match: {  Estado: "Activo" } },
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
                 "cliente._id": 0
                }
            }
        ]).toArray();

        res.json(result);
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const methodsAlquileres = {
    getAlquileres
}