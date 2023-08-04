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

export const methodsClientes = {
    getClientes
}