import { connect } from '../connection/connection.js'

const getEmpleados = async (req, res) => {
    if(!req.rateLimit) return;
    try{
        let db = await connect();
        let empleados = db.collection("Empleado");

        let result = await empleados.find({ Cargo: "Vendedor" }).toArray();
        res.json(result);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

export const methodsEmpleados ={
    getEmpleados
}