import {getConnection,sql,queries} from "../database";

//CONSULTAR PACIENTE POR HC
export const getUsuario = async(req,res) => {
    try {
        const {usu_usuario} = req.params
        const {usu_clave} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('usu_usuario', usu_usuario)
            .input('usu_clave', usu_clave)
            .query(queries.getUsuario)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 