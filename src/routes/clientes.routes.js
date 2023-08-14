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

        if (validationErrors.length > 0) {
            const errorMessages = validationErrors.map(error => {
                const field = error.property;
                const description = dataSend.constructor.schema.properties[field].description;
                return `${description}: ${Object.values(error.constraints).join(', ')}`;
            });
            res.status(400).json({ message: "Error de validación", errors: errorMessages });
            return;
        }

        let cliente = db.collection("Cliente");
        let dataArray = [dataSend.ID_Cliente, dataSend.Nombre, dataSend.Apellido, dataSend.DNI, dataSend.Direccion, dataSend.Telefono, dataSend.Email]
        const document = {
            ID_Cliente: dataArray[0],
            Nombre: dataArray[1],
            Apellido: dataArray[2],
            DNI: dataArray[3],
            Direccion: dataArray[4],
            Telefono: dataArray[5],
            Email: dataArray[6]
        };
        
        const result = await cliente.insertOne(document);
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