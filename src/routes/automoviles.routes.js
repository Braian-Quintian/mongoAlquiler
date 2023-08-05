import { connect } from '../connection/connection.js';

const getAutomoviles = async (req, res) => {
    if (!req.rateLimit) return;
    try {
        let db = await connect();
        let alquiler = db.collection("Alquiler");

        // Agregación para obtener los automóviles disponibles
        let result = await alquiler.aggregate([
            { $match: { Estado: "Disponible" } },
            {
                $lookup: {
                    from: "Automovil",
                    localField: "ID_Automovil",
                    foreignField: "id_",
                    as: "automovil_disponible",
                },
            },
            { $unwind: "$automovil_disponible" },
            {
                $project: {
                    _id: 0,
                    Fecha_Inicio: 0,
                    Fecha_Fin: 0,
                    "automovil_disponible._id": 0,
                },
            },
        ]).toArray();

        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAutomovilesDisponibles = async (req, res) => {
    if (!req.rateLimit) return;
    try {
        let db = await connect();
        let automovil = db.collection("Sucursal_Automovil");

        let result = await automovil.aggregate([
            {
                $group: {
                    _id: "$ID_Sucursal",
                    Cantidad_Total_Disponible: { $sum: "$Cantidad_Disponible" }
                }
            },
            {
                $lookup: {
                    from: "Sucursal",
                    localField: "_id",
                    foreignField: "id",
                    as: "sucursal"
                }
            },
            { $unwind: "$sucursal" },
            {
                $project: {
                    _id: 0,
                    Sucursal: "$sucursal.Nombre",
                    Cantidad_Total_Disponible: 1
                }
            }
        ]).toArray();

        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCapacidadAutomoviles = async (req, res) => {
    if (!req.rateLimit) return;
    try {
        const db = await connect();
        const result = await db.collection("Automovil").find({ Capacidad: { $gte: 5 } }).project({ _id: 0 }).toArray();
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAutomovilesOrdenados = async (req, res) => {
    if (!req.rateLimit) return;
    try {
        const db = await connect();
        const result = await db.collection("Automovil").find().sort({ Marca: 1, Modelo: 1 }).project({ _id: 0 }).toArray();
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAutomovilesPorSucursal = async (req, res) => {
    if (!req.rateLimit) return;
    try {
        const db = await connect();
        let automovil  = await db.collection("Sucursal_Automovil");

        let result = await automovil.aggregate([
            {
                $group: {
                    _id: "$ID_Sucursal",
                    Cantidad_Total_Disponible: { $sum: "$Cantidad_Disponible" }
                }
            },
            {
                $lookup: {
                    from: "Sucursal",
                    localField: "_id",
                    foreignField: "id",
                    as: "sucursal"
                }
            },
            { $unwind: "$sucursal" },
            {
                $project: {
                    "sucursal._id": 0,
                }
            }
        ]).toArray();
        res.json(result);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const methodsAutomoviles = {
    getAutomoviles,
    getAutomovilesDisponibles,
    getCapacidadAutomoviles,
    getAutomovilesOrdenados,
    getAutomovilesPorSucursal
};
