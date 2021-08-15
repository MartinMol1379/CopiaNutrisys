
var modoEdicion=true;


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
    validarDatos();
}


function activarEdicion(){
    modoEdicion = true;
    location.href ="file:///C:/Users/Equipo/Desktop/Facultad/Proyecto%20Tesis/Nutri-Sys/Producto/Programacion/registrarPacienteNuevo.html"
}

function crearPacienteNuevo(){
    modoEdicion = false;
    location.href ="file:///C:/Users/Equipo/Desktop/Facultad/Proyecto%20Tesis/Nutri-Sys/Producto/Programacion/registrarPacienteNuevo.html"
}

function getModo(){
    return modoEdicion;
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
    }
    else{
        alert("¡Paciente registrado con exito!");
    }
    
}


