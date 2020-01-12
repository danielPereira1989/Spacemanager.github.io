window.onload = () => {
    //setCookie("user_id", 40, 300);
    
   // let user_id = getCookie('id');
    //setCookie('id', user_id, 1); //coockies
    //console.log(getCookie('id'));
    //visitantes

    //faturação mensal

    //faturação anual
    

    //pistas
    const tblPistas = document.getElementById("tblPistas")
    
    const renderPistas = async () => {
      let strHtml = `
      <thead >
          <tr><th class= "table mt-3">Lista de Pistas</th></tr>
          <tr style="background-color: #55555514;">
              <th class=''>Nome</th>
              <th class=''>Tipo</th>              
          </tr> 
      </thead><tbody>
  `
  const response = await fetch(`http://localhost:3000/space/${id_space}track/`)
  const pistas = await response.json()
  for (const pista of pistas){
    strHtml += `
    <tr>
        <td>${pista.track_name}</td>
        <td>${pista.type}</td>
    <tr>
    `
  }
  strHtml += "</tbody>"
  tblPistas.innerHTML = strHtml
    }

    
//local
    return fetch(`http://localhost:3000/space/7`, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },          
          method: "GET"
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            const p= response.json();
        document.getElementById("local").innerHTML=p.localidade;

          })
          .catch(error => {
          //  swal.showValidationError(`Pedido falhado: ${error}`);
          });
}

//dados do menu
return fetch(`http://localhost:3000/spacemanager/${user_id}`, {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },          
  method: "GET"
})
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const p= response.json();

document.getElementById("nome1").innerHTML= p.nome_gestor_espaco;
document.getElementById("nome2").innerHTML=p.nome_gestor_espaco;
document.getElementById("email1").innerHTML=p.email;
  })
  .catch(error => {
    swal.showValidationError(`Pedido falhado: ${error}`);
  });



//funções cookies
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
