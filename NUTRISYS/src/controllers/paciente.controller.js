import {getConnection,sql,queries} from "../database";

//CONSULTAR TODOS LOS PACIENTES
export const getPacientes = async (req,res) => {  
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getPaciente);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//CONSULTAR PACIENTE POR HC
export const getPacienteXHC = async(req,res) => {
    try {
        const {pac_nrohc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_nrohc', pac_nrohc).query(queries.getPacienteXHC)
        res.send(result.recordset[0])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//CONSULTAR PACIENTE POR APELLIDO
export const getPacienteXap = async(req,res) => {
    try {
        const {pac_apellido} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_apellido', pac_apellido).query(queries.getPacienteXApellido)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//CONSULTAR PACIENTE POR HC SIMILAR
export const getPacienteLikeHC = async(req,res) => {
    try {
        const {pac_nrohc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_nrohc', pac_nrohc).query(queries.getPacientelikeHC)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//CONSULTAR PACIENTE POR DOC
export const getPacienteLikeDoc = async(req,res) => {
    try {
        const {pac_nrodoc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_nrodoc', pac_nrodoc).query(queries.getPacienteXDoc)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//CONSULTAR PACIENTE POR HC,APELLIDO,DOC
export const getPacienteMixto = async(req,res) => {
    try {
        const {pac_nrohc} = req.params
        const {pac_apellido} = req.params
        const {pac_nrodoc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_nrohc', pac_nrohc)
            .input('pac_apellido', pac_apellido)
            .input('pac_nrodoc', pac_nrodoc)
            .query(queries.getPacienteHCAPDoc)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//CONSULTAR PACIENTE POR HC,APELLIDO
export const getPacienteHCAP = async(req,res) => {
    try {
        const {pac_nrohc} = req.params
        const {pac_apellido} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_nrohc', pac_nrohc)
            .input('pac_apellido', pac_apellido)
            .query(queries.getPacienteHCAP)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 


//CONSULTAR PACIENTE POR HC,DOC
export const getPacienteHCDoc = async(req,res) => {
    try {
        const {pac_nrohc} = req.params
        const {pac_nrodoc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_nrohc', pac_nrohc)
            .input('pac_nrodoc', pac_nrodoc)
            .query(queries.getPacienteHCDoc)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//CONSULTAR PACIENTE POR APELLIDO,DOC
export const getPacienteAPDoc = async(req,res) => {
    try {
        const {pac_apellido} = req.params
        const {pac_nrodoc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_apellido', pac_apellido)
            .input('pac_nrodoc', pac_nrodoc)
            .query(queries.getPacienteAPDoc)
        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 

//----------------------------------------------------------------------------------
//INSERTAR NUEVO PACIENTE
export const nuevoPaciente = async (req,res) => {
    const { pac_nrodoc,pac_apellido,pac_nombre,
            pac_telefono1,pac_correo,pac_fechanacimiento,pac_mutual } = req.body;
    let {pac_direccion,pac_telefono2,pac_mutual2} = req.body;
    
    if (pac_nrodoc==null || pac_apellido==null || pac_nombre==null || pac_mutual==null ||
        pac_telefono1==null || pac_correo==null || pac_fechanacimiento==null ) {
            return res.status(400).json({msg: 'Error, Faltan Datos de Completar'})
        }
    
    if (pac_telefono2==null){pac_telefono2=''}
    if (pac_direccion==null){pac_direccion=''}
    if (pac_mutual2==null){pac_mutual2=''}

    try {
        const pool = await getConnection();
        await pool.request()
            .input('pac_nrodoc',sql.Numeric,pac_nrodoc)
            .input('pac_apellido',sql.NVarChar,pac_apellido)
            .input('pac_nombre',sql.NVarChar,pac_nombre)
            .input('pac_fechanacimiento',sql.DateTime,pac_fechanacimiento)
            .input('pac_direccion',sql.NVarChar,pac_direccion)
            .input('pac_telefono1',sql.NVarChar,pac_telefono1)
            .input('pac_telefono2',sql.NVarChar,pac_telefono2)
            .input('pac_correo',sql.NVarChar,pac_correo)
            .input('pac_mutual',sql.NVarChar,pac_mutual)
            .input('pac_mutual2',sql.NVarChar,pac_mutual2)
            .query(queries.nuevoPaciente)
        res.json({  pac_nrodoc,pac_apellido,pac_nombre,pac_fechanacimiento,
                pac_direccion,pac_telefono1,pac_telefono2,pac_correo,pac_mutual,pac_mutual2})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }         
}
//ELIMINAR PACIENTE POR HC
export const eliminarPaciente = async(req,res) => {
    try {
        const {pac_nrohc} = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input('pac_nrohc',pac_nrohc).query(queries.borrarPaciente)
    res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

//ACTUALIZAR PACIENTE POR HC
export const actualizarPaciente = async(req,res) => {
    const { pac_tipodoc,pac_nrodoc,pac_apellido,pac_nombre,pac_fechanacimiento,
            pac_telefono1,pac_correo,pac_mutual} = req.body;
    let { pac_direccion,pac_telefono2 } = req.body;
    const {pac_nrohc} = req.params;
    
    if (pac_tipodoc==null || pac_nrodoc==null || pac_apellido==null || pac_nombre==null || 
        pac_fechanacimiento==null || pac_telefono1==null || pac_correo==null || pac_mutual==null) {
        return res.status(400).json({msg:"Error, faltan datos de completar"})   
    }
    if (pac_telefono2==null){pac_telefono2=''}
    if (pac_direccion==null){pac_direccion=''}

    try {
        const pool = await getConnection();
        await pool.request()
        .input('pac_nrohc',sql.Int,pac_nrohc)
        .input('pac_tipodoc',sql.NVarChar,pac_tipodoc)
        .input('pac_nrodoc',sql.Numeric,pac_nrodoc)
        .input('pac_apellido',sql.NVarChar,pac_apellido)
        .input('pac_nombre',sql.NVarChar,pac_nombre)
        .input('pac_fechanacimiento',sql.DateTime,pac_fechanacimiento)
        .input('pac_direccion',sql.NVarChar,pac_direccion)
        .input('pac_telefono1',sql.NVarChar,pac_telefono1)
        .input('pac_telefono2',sql.NVarChar,pac_telefono2)
        .input('pac_correo',sql.NVarChar,pac_correo)
        .input('pac_mutual',sql.NVarChar,pac_mutual)
        .query(queries.actualizarPaciente)
        res.json({pac_tipodoc,pac_nrodoc,pac_apellido,pac_nombre,pac_fechanacimiento,
            pac_direccion,pac_telefono1,pac_telefono2,pac_correo,pac_mutual})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}