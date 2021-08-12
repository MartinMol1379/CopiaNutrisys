function crearAnamnesis(){
    if (validarDatos() == false) {
        return false;
    } 
    else {
    var anms_id = document.getElementById("anms_id").value;
    var anms_nrohc = document.getElementById("anms_nrohc").value;
    var anms_fechaRegistro =  document.getElementById("anms_fechaRegistro").value;
    var anms_observaciones = document.getElementById("anms_observaciones").value;
    
    var danms_id = document.getElementById("danms_id").value;
    var danms_idItem = document.getElementById("danms_idItem").value;
    var danms_consumido = document.getElementById("danms_consumido").value;
    var danms_cantidad = document.getElementById("danms_cantidad").value;
    var danms_observaciones = document.getElementById("danms_observaciones").value;
    
    var item_id = document.getElementById("item_id").value;
    var item_descripcion = document.getElementById("item_descripcion").value;
    const post = {
        anms_id:             anms_id,
        anms_nrohc:          anms_nrohc,
        anms_fechaRegistro:  anms_fechaRegistro,
        anms_observaciones:  anms_observaciones,

        danms_id:            danms_id,
        danms_idItem:        danms_idItem,
        danms_consumido:     danms_consumido,
        danms_cantidad:      danms_cantidad,
        danms_observaciones: danms_observaciones,

        item_id:             item_id,
        item_descripcion:    item_descripcion,
    }
    try {
        console.log(JSON.stringify(post));
        fetch("http://192.168.0.188:3000/registrarAnamnesis",{
        method:'POST',
        body: JSON.stringify(post),
        headers: {
            "Content-type": "application/json"
        }
        }).then(res=>res.json())
        .then(data=>console.log(data))
        swal("Anamnesis Registrado con Éxito",{
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

    if(document.getElementById("anms_nrohc").value == "")
    {
        correccion = correccion + "*NroHistoriaClinica" + "\n"
        incompleto = true;
    }

    if(document.getElementById("anms_fechaRegistro").value == "")
    {
        correccion = correccion + "*Fecha" + "\n"
        incompleto = true;
    }

    if(document.getElementById("anms_observaciones").value == "")
    {
        correccion = correccion + "*Observaciones" + "\n"
        incompleto = true;
    }

    if(document.getElementById("danms_idItem").value == "")
    {
        correccion = correccion + "*idItem" + "\n"
        incompleto = true;
        if(document.getElementById("danms_consumido").value == "")
        {
            correccion = correccion + "*Consumido" + "\n"
            incompleto = true;
        }
        if(document.getElementById("danms_cantidad").value == "")
        {
            correccion = correccion + "*Cantidad" + "\n"
            incompleto = true;
        }
        if(document.getElementById("danms_observaciones").value == "")
        {
            correccion = correccion + "*Observaciones" + "\n"
            incompleto = true;
        }
        if(document.getElementById("item_descripcion").value == "")
        {
            correccion = correccion + "*Descripcion" + "\n"
            incompleto = true;
        }
    }

    if(incompleto == true){
        alert(correccion);
        return false;
    }
}