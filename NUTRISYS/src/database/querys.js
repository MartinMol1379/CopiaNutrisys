export const queries = {
//PACIENTES
    //Consultas
    getPaciente: 'SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac FROM paciente',
    getPacienteXHC: 'SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac FROM paciente WHERE pac_nrohc = @pac_nrohc',
    getPacientelikeHC: "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac FROM paciente WHERE pac_nrohc like @pac_nrohc + '%'",
    getPacienteXApellido: "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac FROM paciente WHERE pac_apellido like '%'+@pac_apellido+'%'",
    getPacienteXDoc: "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac FROM paciente WHERE pac_nrodoc like @pac_nrodoc+'%'",
    getPacienteHCAPDoc: "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac FROM paciente WHERE pac_nrohc like @pac_nrohc + '%' and pac_apellido like '%'+@pac_apellido+'%' and pac_nrodoc like @pac_nrodoc+'%'",
    getPacienteHCAP: "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac FROM paciente WHERE pac_nrohc like @pac_nrohc + '%' and pac_apellido like '%'+@pac_apellido+'%'",
    getPacienteHCDoc: "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac FROM paciente WHERE pac_nrohc like @pac_nrohc + '%' and pac_nrodoc like @pac_nrodoc+'%'",
    getPacienteAPDoc: "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac FROM paciente WHERE pac_apellido like '%'+@pac_apellido+'%' and pac_nrodoc like @pac_nrodoc+'%'",
    //Alta,Baja,Modif
    nuevoPaciente: 'INSERT INTO paciente (pac_nrodoc,pac_apellido,pac_nombre,pac_fechanacimiento,pac_fechaalta,pac_direccion,pac_telefono1,pac_telefono2,pac_correo,pac_mutual,pac_mutual2) VALUES (@pac_nrodoc,@pac_apellido,@pac_nombre,@pac_fechanacimiento,getdate(),@pac_direccion,@pac_telefono1,@pac_telefono2,@pac_correo,@pac_mutual,@pac_mutual2)',
    borrarPaciente: 'DELETE FROM paciente WHERE pac_nrohc = @pac_nrohc',
    actualizarPaciente: 'UPDATE paciente SET pac_tipodoc=@pac_tipodoc,pac_nrodoc=@pac_nrodoc,pac_apellido=@pac_apellido,pac_nombre=@pac_nombre,pac_fechanacimiento=@pac_fechanacimiento,pac_direccion=@pac_direccion,pac_telefono1=@pac_telefono1,pac_telefono2=@pac_telefono2,pac_correo=@pac_correo,pac_mutual=@pac_mutual WHERE pac_nrohc = @pac_nrohc',

//USUARIOS
    getUsuario: "select case when emp_apellido is null then pac_apellido else emp_apellido end as apellido,case when emp_nombre is null then pac_nombre else emp_nombre end as nombre,* from usuario left join empleado on emp_idusuario=usu_id left join paciente on pac_idusuario=usu_id where usu_usuario=@usu_usuario and usu_clave=@usu_clave",

//FICHAS--- completar
    registrarAnamnesis: "Begin Insert Into anamnesis_paciente(anms_id, anms_nrohc, anms_fecharegistro, anms_observaciones) values (@anms_id,@anms_nrohc,@anms_fecharegistro, @anms_observaciones); insert into detalle_anamnesis(danms_id, danms_linea, danms_iditem, danms_consumido, danms_cantidad, danms_observaciones) values (@danms_id,@danms_linea,@danms_iditem,@danms_consumido,@danms_cantidad,danms_observaciones); End"
}
