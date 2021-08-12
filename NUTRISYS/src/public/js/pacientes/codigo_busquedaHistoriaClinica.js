function alertar(){
    alert("Si salio");
}

function buscarPaciente(){
    let nrohc = document.getElementById("pac_nrohc").value;
    let nrodoc = document.getElementById("pac_nrodoc").value;
    let apellido = document.getElementById("pac_apellido").value;
    let url = 'http://192.168.0.188:3000/pacientes/'
    if (nrohc=='' & nrodoc=='' & apellido=='')  {
      url=url;
    }
    if (nrohc!='' & nrodoc=='' & apellido=='')  {
      url=url+'hc='+nrohc;
    }
    if (nrohc=='' & nrodoc!='' & apellido=='')  {
      url=url+'doc='+nrodoc;
    }
    if (nrohc=='' & nrodoc=='' & apellido!='')  {
      url=url+'ap='+apellido;
    }
    if (nrohc!='' & nrodoc!='' & apellido!='')  {
      url=url+'hc='+nrohc+'/ap='+apellido+'/doc='+nrodoc;
    }
    if (nrohc!='' & nrodoc!='' & apellido=='')  {
      url=url+'hc='+nrohc+'/doc='+nrodoc;
    }
    if (nrohc!='' & nrodoc=='' & apellido!='')  {
      url=url+'hc='+nrohc+'/ap='+apellido;
    }
    if (nrohc=='' & nrodoc!='' & apellido!='')  {
      url=url+'/ap='+apellido+'/doc='+nrodoc;
    }
      fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

      const mostrarData = (data) => {
        console.log(data)
        if (data.length==0){
          swal("Atención","No se encontraron Pacientes","warning")
          limpiar()
        }
        if (data.length==1) {
          document.getElementById("pac_nrohc").value = data[0].pac_nrohc
          document.getElementById("pac_apellido").value = data[0].pac_apellido
          document.getElementById("pac_nrodoc").value = data[0].pac_nrodoc
          document.getElementById("pac_fechanacimiento").value = data[0].pac_fechanac
        }
        
        let body =''
        for (let i = 0; i<data.length; i++){
          body += `<tr onclick="seleccionarPaciente(${data[i].pac_nrohc})"><td class="td__width--HC" scope="row">${data[i].pac_nrohc}</td><td class="td__width--Ape" >${data[i].pac_apellido}</td><td class="td__width--Nom" >${data[i].pac_nombre}</td><td class="td__width--Doc" >${data[i].pac_nrodoc}</td></tr>`
        }
        document.getElementById('data').innerHTML = body
      }
}


function crearPacienteNuevo(){
    location.href ="./nuevopaciente"
}

function seleccionarPaciente(nrohc) {
    location.href ="./consultapaciente/hc="+nrohc
}

function limpiar() {
  document.getElementById("pac_nrohc").value="";
  document.getElementById("pac_nrodoc").value="";
  document.getElementById("pac_apellido").value="";
  document.getElementById("pac_fechanacimiento").value="";
}

