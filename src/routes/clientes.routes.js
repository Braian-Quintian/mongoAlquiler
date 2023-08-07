import Joi from 'joi';
import { connect } from '../connection/connection.js'

const getClientes = async (req, res) => {
    if(!req.rateLimit) return;
    try {
        let db = await connect();
        let cliente = db.collection("Cliente");
        let result = await cliente.find().toArray();
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}   

const getClienteById = async (req, res) => {
    if(!req.rateLimit) return;
    try {
        let db = await connect();
        let cliente = db.collection("Cliente");
        let result = await cliente.findOne({ DNI: req.params.id });
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getClientesAlquiler = async (req, res) => {
    if(!req.rateLimit) return;
    try{
        let db = await connect();
        let cliente = db.collection("Alquiler");

        let result = await cliente.aggregate([
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
                    _id: 0,
                    "cliente._id": 0,
                    "cliente.id": 0
                }
            }
        ]).toArray();
        res.json(result);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

const addCliente = async (req, res) => {
    if (!req.rateLimit) return;
    try {
        let db = await connect();
        let cliente = db.collection("Cliente");
        const schema = Joi.object({
            id: Joi.number().integer().required(),
            Nombre: Joi.string().required(),
            Apellido: Joi.string().required(),
            DNI: Joi.string().required(),
            Direccion: Joi.string().max(100).required(),
            Telefono: Joi.string().pattern(/^3[0-9]{9}$/).required(),
            Email: Joi.string().email().required()
        });

        const validation = schema.validate(req.body);
        if (validation.error) {
            res.status(400).json({ message: validation.error.details[0].message });
            return;
        }

        let result = await cliente.insertOne(req.body); // Usa req.body después de la validación
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const methodsClientes = {
    getClientes,
    getClienteById,
    getClientesAlquiler,
    addCliente
}