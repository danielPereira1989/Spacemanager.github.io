    //chamada fetch para envio dos dados para o servior via POST

    window.onload = () => {


     let space_manager = getCookie("id_gestor_espaco");   //NOT SURE

     const formMatDispon = document.getElementById("formMatDispon");
     formMatDispon.addEventListener("submit", async (event) => {
        event.preventDefault()
        const referencia_material = document.getElementById("referencia_material").value
        const nome_material = document.getElementById("nome_material").value
        const descricao = document.getElementById("descricao").value
        const quantidade = document.getElementById("quantidade").value

     // Verifica flag isNew para saber se se trata de uma adição ou de um atualização dos dados
        let response
        let isNew = true
        if (isNew) {
            // Adiciona Material
            response = await fetch('https://gestorespacos.herokuapp.com/materials', { 
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                body: `referencia_material=${referencia_material}&nome_material=${nome_material}&descricao=${descricao}&quantidade=${quantidade}&active=1`
            })
        }
    })
}

//CRIAR A TABELA --> Fazer GET --> quando terminar, eliminar tabela do html






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
