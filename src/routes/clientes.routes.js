import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Clientes } from './validation/clientes.js'
import { connect } from '../connection/connection.js'
const db = await connect();

const getClientes = async (req, res) => {
    if(!req.rateLimit) return;
    try {
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
        // let db = await connect();
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
        // // let db = await connect();
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
        const dataSend = plainToClass(Clientes, req.body); 
        const validationErrors = await validate(dataSend);

        if(validationErrors.length > 0) {
            res.status(400).json({ message: "Error de validación", errors: validationErrors });
            return;
        }

        // let db = await connect();
        let cliente = db.collection("Cliente");
        const values = [dataSend.nombre, dataSend.apellidos]
        let result = await cliente.insertOne(values); // Usa req.body después de la validación
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