
function validarUsuario() {
    var usu_usuario = document.getElementById("usuario").value;
    var usu_clave = document.getElementById("clave").value;
    var url = "http://192.168.0.188:3000/usuario/"+usu_usuario+'/'+usu_clave
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

      const mostrarData = (data) => {
        console.log(data)
        if (data.length==0){
          swal("Atención","Usuario no válido","error") 
        }
        else {
                swal("Bienvenido/a",data[0].apellido + ", " + data[0].nombre,"success")
                .then((value) => {
                        location.href ="../pacientes/buscarpaciente"})
                
                
        }
        
}}

function mostrarClave(){
        var tipo = document.getElementById("clave");
        if(tipo.type == "password"){
            tipo.type = "text";
        }else{
            tipo.type = "password";
        }
    }