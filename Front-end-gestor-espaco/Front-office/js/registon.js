let isNew = true;
const formRegisto = document.getElementById("contact_form");
formRegisto.addEventListener("submit", async (event) => {
    event.preventDefault()
    const txtEmail = document.getElementById("email").value;
    const txtPassword = document.getElementById("password").value;
    let txtConfirmPass = document.getElementById("ConfirmarPassword").value;
    const txtNome = document.getElementById("nome").value;
    const txtDatanascimeto = document.getElementById("data_nascimento").value;
    const txtNif = document.getElementById("nif").value;
    const txtMorada = document.getElementById("morada").value;
    const txtTelefone = document.getElementById("telefone").value;
    const txtMorada_espaco = document.getElementById("morada_espaco").value;
    const txtLocalidade = document.getElementById("localidade").value;
    const txtCoordenadas_gps = document.getElementById("coordenadas_gps").value;

    const response1 = await fetch(`https://gestorespacos.herokuapp.com/spacemanager/email`);
    const spacemanagers = await response1.json();
    const spacemanager = spacemanagers[0];
    console.log(spacemanager.resultado);
    let emailExist = spacemanager.resultado;

    const response2 = await fetch('https://gestorespacos.herokuapp.com/space/info/local');
    const spaces = await response2.json();
    const space = spaces[0];
    console.log("fds");
    console.log(space.result);
    let spaceExist = space.result;

    if(emailExist >= 1 && spaceExist >= 1) {
        alert('Email ou Espaço já existem')
    }
    else{

    let response = "";
    if(isNew){
        response = await fetch('https://gestorespacos.herokuapp.com/signup',{
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: 'POST',
            body: `email=${txtEmail}&password=${txtPassword}&tipo=1`
        }).then(function(response) {
            if(response.status == "409") {
                alert('Erro');
            }
            else{
                    fetch ('https://gestorespacos.herokuapp.com/space', {
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        method: 'POST',
                        body: `morada_espaco=${txtMorada_espaco}&localidade=${txtLocalidade}&coordenadas_gps=${txtCoordenadas_gps}`
                    }).then(function(response){
                        if(!response.ok){
                            alert('Erro');
                        } //`nome_gestor_espaco=${txtNome}&morada=${txtMorada}&data_nascimento=${txtDatanascimeto}&nif=${txtNif}&telefone=${txtTelefone}&email_gestor=${txtEmail}`
                        else{
                            fetch('https://gestorespacos.herokuapp.com/spacemanager',{
                                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                                method: 'POST',
                                body:`nome_gestor_espaco=${txtNome}&morada=${txtMorada}&data_nascimento=${txtDatanascimeto}&nif=${txtNif}&telefone=${txtTelefone}&email_gestor=${txtEmail}`
                            }).then(function(response){
                                if (!response.ok){
                                    if(response.status === 400){
                                        alert ('jsthoj')
                                    }
                                } else {
                                    alert ('Registo concluído com sucesso!')


                                    /*fetch('http://localhost:3000/space/get/id');
                                    const espacos = response.json;
                                    const espaco = espacos[0];
                                    console.log(espaco.id_espaco);*/


                                    window.location.href = "index.html"
                                }
                            });

                        }

                    })
                }
            });
        }



    }
});
