import {getConnection,sql,queries} from "../database";


//INSERTAR NUEVO ANAMNESIS
export const registrarAnamnesis = async (req,res) => {
    const { anms_id, anms_nrohc, anms_fechaRegistro,
        danms_id,danms_idItem,danms_consumido,item_id } = req.body;
    let {anms_observaciones,danms_cantidad,danms_observaciones} = req.body;
    
    if (anms_id==null || anms_nrohc==null || anms_fechaRegistro==null || pac_mutual==null ||
        danms_id==null || danms_idItem==null || danms_consumido==null || item_id==null ) {
            return res.status(400).json({msg: 'Error, Faltan Datos de Completar'})
        }
    
    if (anms_observaciones==null){anms_observaciones=''}
    if (danms_cantidad==null){danms_cantidad=''}
    if (danms_observaciones==null){danms_observaciones=''}

    try {
        const pool = await getConnection();
        await pool.request()
            .input('anms_id',sql.Numeric,anms_id)
            .input('anms_nrohc',sql.Numeric,anms_nrohc)
            .input('anms_fechaRegistro',sql.DateTime,anms_fechaRegistro)
            .input('danms_id',sql.Numeric,danms_id)
            .input('danms_idItem',sql.Numeric,danms_idItem)
            .input('danms_consumido',sql.NVarChar,danms_consumido)
            .input('item_id',sql.Numeric,item_id)
            .input('anms_observaciones',sql.NVarChar,anms_observaciones)
            .input('danms_cantidad',sql.Numeric,danms_cantidad)
            .input('danms_observaciones',sql.NVarChar,danms_observaciones)
            .query(queries.registrarAnamnesis)
        res.json({  anms_id,anms_nrohc,anms_fechaRegistro,danms_id,danms_idItem,
            danms_consumido,item_id,anms_observaciones,danms_cantidad,danms_observaciones})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }         
}