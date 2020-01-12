const response1 = await fetch(`https://gestorespacos.herokuapp.com/spacemanager/email`);
    const spacemanagers = await response1.json();

    const spacemanager = spacemanagers[0];

    console.log(spacemanager.resultado);

/*window.onload = () => {
    setCookie("user_id", 40, 300);
    let user_id = getCookie("user_id");

    //fetch para buscar os dados e apresentar na página
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
        document.getElementById("Nome").innerHTML= p.nome_gestor_espaco;
        document.getElementById("Email").innerHTML=p.email;
        document.getElementById("Morada").innerHTML=p.morada;
        document.getElementById("Nif").innerHTML=p.nif;
        document.getElementById("Data_nascimento").innerHTML=p.data_nascimento;
        document.getElementById("Telefone").innerHTML=p.telefone;


        //dados do menu
        document.getElementById("nome1").innerHTML= p.nome_gestor_espaco;
        document.getElementById("nome2").innerHTML=p.nome_gestor_espaco;
        document.getElementById("email1").innerHTML=p.email;
          })
          .catch(error => {
            swal.showValidationError(`Pedido falhado: ${error}`);
          });
}




//preencher form nome => não funciona
const preencherForm = document.getElementById("editarNome");


preencherForm.addEventListener("onclick", async (event) => {
  event.preventDefault();
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
      const p = response.json();
      document.getElementById("editarNome").innerHTML.valueOf= p.nome_gestor_espaco;
}
)
})


//Fazer atualização do nome
const submeterNome = document.getElementById("formeditNome");

submeterNome.addEventListener("submit", async (event) =>{
  event.preventDefault();

  const txtMorada="";
  const txtPassword="";
  const txtDatanascimeto="";
  const txtNif="";
  const txtTelefone="";
  const txtEmail="";

  await fetch(`http://localhost:3000/spacemanager/${user_id}`,{
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "GET"
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const p = response.json();
      txtMorada = p.morada;
      txtPassword = p.txtPassword;
      txtDatanascimeto = p.data_nascimento;
      txtNif = p.nif;
      txtTelefone =p.telefone;
      txtEmail = p.email;
  })

  .then(function (){
    const txtNome = document.getElementById("nome").value;

    fetch(`http://localhost:3000/spacemanager/${user_id}`, {
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      method: "PUT",
      body:
      `nome_gestor_espaco=${txtNome}&morada=${txtMorada}&password=${txtPassword}
        &data_nascimento=${txtDatanascimeto}&nif=${txtNif}&telefone=${txtTelefone}&email=${txtEmail}`
    })

    .catch(error => {
      swal.showValidationError(`Pedido falhado: ${error}`);
    });
  }
  )
})













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
*/
