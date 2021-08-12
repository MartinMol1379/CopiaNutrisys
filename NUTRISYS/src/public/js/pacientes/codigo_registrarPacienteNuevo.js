function calcularEdad(){
    var userinput = document.getElementById("fechaNac__paciente").value;
    var dob = new Date(userinput);
    if(userinput==null || userinput=='' || dob.getTime() >= Date.now()) {
      alert("Coloque una fecha de nacimiento correcta");  
      document.getElementById("fechaNac__paciente").value='';
      document.getElementById("edad__paciente").value='';
      return false; 
    } 
    else {
    
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();
    
    //convert the calculated difference in date format
    var age_dt = new Date(month_diff); 
    
    //extract year from date    
    var year = age_dt.getUTCFullYear();
    
    //now calculate the age of the user
    var age = Math.abs(year - 1970);
    
    //display the calculated age
    return document.getElementById("edad__paciente").value =  age + " años. ";

    console.log("se ejecuto");
    }
}


function crearPaciente(){
    if (validarDatos() == false) {
        return false;
    } 
    else {
    var nrodoc = document.getElementById("documento__paciente").value;
    var apellido =  document.getElementById("apellido__paciente").value;
    var nombre = document.getElementById("nombre__paciente").value;
    var mutual = document.getElementById("mutual__paciente").value;
    var mutual2 = document.getElementById("mutual__paciente2").value;
    var telefono1 = document.getElementById("celular__paciente").value;
    var telefono2 = document.getElementById("telefono__paciente").value;
    var fechanacimiento = document.getElementById("fechaNac__paciente").value;
    var correo = document.getElementById("correo__paciente").value;
    var direccion = document.getElementById("direccion__paciente").value;
    const post = {
        pac_nrodoc: nrodoc,
        pac_apellido: apellido,
        pac_nombre: nombre,
        pac_mutual: mutual,
        pac_mutual2: mutual2,
        pac_telefono1: telefono1,
        pac_telefono2: telefono2,
        pac_fechanacimiento: fechanacimiento,
        pac_correo: correo,
        pac_direccion: direccion
    }
    try {
        console.log(JSON.stringify(post));
        fetch("http://192.168.0.188:3000/pacientes",{
        method:'POST',
        body: JSON.stringify(post),
        headers: {
            "Content-type": "application/json"
        }
        }).then(res=>res.json())
        .then(data=>console.log(data))
        swal("Paciente registrado con Éxito",{
            icon: "success"})
        location.href ="./buscarpaciente"
    } catch (error) {
        swal("Error","Hubo un Error al Registrar. Intente nuevamente.","error" )
    }
    }
    
}

function validarDatos(){
    var incompleto = false;
    var correccion = "Datos incompletos o inválidos: " + "\n";
    var correo= document.getElementById("correo__paciente").value;

    if(document.getElementById("documento__paciente").value == "")
    {
        correccion = correccion + "*Documento" + "\n"
        incompleto = true;
    }

    if(document.getElementById("mutual__paciente").value == "")
    {
        correccion = correccion + "*Mutual" + "\n"
        incompleto = true;
    }

    if(document.getElementById("direccion__paciente").value == "")
    {
        correccion = correccion + "*Dirección" + "\n"
        incompleto = true;
    }

    if(document.getElementById("apellido__paciente").value == "")
    {
        correccion = correccion + "*Apellido" + "\n"
        incompleto = true;
    }
    if(document.getElementById("nombre__paciente").value == "")
    {
        correccion = correccion + "*Nombre" + "\n"
        incompleto = true;
    }
    if(document.getElementById("celular__paciente").value == "")
    {
        correccion = correccion + "*Celular" + "\n"
        incompleto = true;
    }
    if(document.getElementById("correo__paciente").value == "" || !(correo.includes("@")))
    {
        correccion = correccion + "*Correo" + "\n"
        incompleto = true;
    }
    if(document.getElementById("fechaNac__paciente").value == "")
    {
        correccion = correccion + "*Fecha Nacimiento" + "\n"
        incompleto = true;
    }

    if(incompleto == true){
        alert(correccion);
        return false;
    }
    else{
        
    }
    
}
