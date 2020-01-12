

    //chamada fetch para envio dos dados para o servior via POST
    
    window.onload = () => {
    
    
     let space_manager = getCookie("id_gestor_espaco");   //NOT SURE
     
    const tblMateriais = document.getElementById("cardInventario");
   
    const formMateriais = document.getElementById("formMateriais"); 
    formMateriais.addEventListener("submit", async (event) => {
        event.preventDefault()
        const referencia_material = document.getElementById("referencia_material").value
        const nome_material = document.getElementById("nome_material").value
        const descricao = document.getElementById("descricao").value
        const quantidade = document.getElementById("quantidade").value
      const txtMaterial = document.getElementById("txtMaterial").value
     // Verifica flag isNew para saber se se trata de uma adição ou de um atualização dos dados 
        let response
        let isNew = true
        if (isNew) {
            // Adiciona Material
            response = await fetch('http://localhost:3000/materials', { 
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                body: `referencia_material=${referencia_material}&nome_material=${nome_material}&descricao=${descricao}&quantidade=${quantidade}&active=1`
            })
        }
    })
}


  /*         .then(async () =>{
      const tblMateriais = document.getElementById("cardInventario");

  const newMaretialId = response.headers.get("Location")
            const newMaterial = await response.json()
           }else {
            // Atualiza Material
            response = await fetch('http://localhost:3000/materials/', { //NECESSARIO ALTERAR
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "GET",
                
            })

            const newMaterial = await response.json()
        }
        isNew = true
        renderMaterial()
    })
    
    const renderMaterial = async () => {
        formMateriais.reset()
        let strHtml = `
            <thead >
                <tr><th class='w-100 text-center bg-warning' colspan='4'>Lista de Materiais</th></tr>
                <tr class='bg-info'>
                    <th class='w-2'>#</th>
                    <th class='w-50'>Referencia do Material</th>
                    <th class='w-38'>Nome do Material</th>              
                    <th class='w-50'>Descrição</th>  
                    <th class='w-6'>Quantidade</th>
                </tr> 
            </thead><tbody>
        `
        const response = await fetch(`${urlBase}/materials`)
        const materials = await response.json()
        let i = 1
        for (const material of materials) {
            strHtml += `
                <tr>
                    <td>${i}</td>
                    <td>${material.referencia_material}</td>
                    <td>${material.nome_material}</td>
                    <td>${material.descricao}</td>
                    <td>${material.quantidade}</td>
                    <td>
                        <i id='${material.MaretialId}' class='fas fa-edit edit'></i>
                        <i id='${material.MaretialId}' class='fas fa-trash-alt remove'></i>
                    </td>
                </tr>
            `
            i++
        }
        strHtml += "</tbody>"
        tblMateriais.innerHTML = strHtml

        // Gerir o clique no ícone de Editar        
        const btnEdit = document.getElementsByClassName("edit")
        for (let i = 0; i < btnEdit.length; i++) {
            btnEdit[i].addEventListener("click", () => {
                isNew = false
                for (const material of material) {
                    if (material.MaretialId == btnEdit[i].getAttribute("id")) {
                        document.getElementById("txtMaterial").value = material.txtMaterial
                        document.getElementById("referencia_material").value = material.referencia_material
                        document.getElementById("nome_material").value = material.nome_material
                        document.getElementById("descricao").value = material.descricao
                        document.getElementById("quantidade").value = material.quantidade
                    }
                }
            })
        }

        // Gerir o clique no ícone de Remover        
        const btnDelete = document.getElementsByClassName("remove")
        for (let i = 0; i < btnDelete.length; i++) {
            btnDelete[i].addEventListener("click", () => {
                swal({
                    title: 'Tem a certeza?',
                    text: "Não será possível reverter a remoção!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    cancelButtonText: 'Cancelar',
                    confirmButtonText: 'Remover'
                }).then(async (result) => {
                    if (result.value) {
                        let MaretialId = btnDelete[i].getAttribute("id")
                        try {
                            const response = await fetch(`${urlBase}/materials/${MaretialId}`, {
                                method: "DELETE"
                            })
                            if (response.status == 204) {
                                swal('Removido!', 'O material foi removido.', 'success')
                            }
                        } catch (err) {
                            swal({
                                type: 'error',
                                title: 'Erro',
                                text: err
                            })
                        }
                        renderMaterial()
                    }
                })
            })
        }
    }
    renderMaterial()
    */

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
