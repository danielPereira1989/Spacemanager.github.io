const urlBase = "http://localhost:3000"
let isNew = true

window.onload = () => {    

    let tblPatrocinadores =document.getElementById("tblPatrocinadores")

    const renderSponsers = async () => {
        formPatrocinadores.reset()
        let strHtml = `
            <thead >
                <tr><th class='w-100 text-center bg-warning' colspan='7'>Lista de Patrocinadores</th></tr>
			<tr class='bg-info'>
			<th class='w-2'>#</th>
			<th class='w-30'>Nome</th>
			<th class='w-8'>NIF/NIPC</th>              
			<th class='w-15'>Contacto</th> 
			<th class='w-8'>Validade</th>
			<th class='w-6'>Montante</th>
			<th class='w-6'>Ações</th> 		    
                </tr> 
            </thead><tbody>
            
        `
        console.log('depoistabela')
        //const response = await fetch(`http://localhost:3000/spacemanager/${id_spacemanager}/space/${id_espaco}/sponser/15`)
        const response = await fetch(`http://localhost:3000/sponser/15`)
        const sponsers = await response.json()
console.log(sponsers)
        let i = 1
        for (const sponser of sponsers) {
            strHtml += `
                <tr>
			<td>${i}</td>
            <td>${sponser.nome_patrocinador}</td>
            <td>${sponser.NIF}</td>
			<td>${sponser.Contacto}</td>
			<td>${sponser.validade_patrocinio}</td>
			<td>${sponser.preco_patrocinio}</td>
	
                    <td>
                        <i value='${sponser.id_patrocinador}' id="edit" class="fas fa-edit edit" style ="padding-left: 15px;"  data-toggle='modal' data-target="#EditarPatrocinadores" data-tt="tooltip" data-placement="top" title="Editar" data-animation="true"></i>
                        <i value='${sponser.id_patrocinador}' id="remove" class='fas fa-trash-alt remove' style ="padding-left: 15px;" data-target="#ApagarPatrocinadores" data-toggle='modal' data-tt="tooltip" data-placement="top" title="Apagar" data-animation="true" >                   
                    </td>
                </tr>
            `
            i++
        }
        strHtml += "</tbody>"
        tblPatrocinadores.innerHTML = strHtml
        
        // Gerir o clique no ícone de Remover        
    ApagarPatrocinador.addEventListener("submit", async (result) => {
        event.preventDefault()     
                
                    if (result.value) {
                        //pedido HTTP para remoção do patrocinador
                        let btnDelete = document.getElementsByClassName("remove")
                        let id = btnDelete[i].getAttribute("value")
                        try {
                            const response = await fetch(`http://localhost:3000/sponser/del/${id_patrocinador}`, {
                                method: "DELETE"
                            })
                            if (response.status == 204) {
                                const id = await response.json() 
                                swal('Removido!', 'O patrocinador foi removido.', 'success')
                            }
                        } catch (err) {
                            swal({
                                type: 'error',
                                title: 'Erro',
                                text: err
                            })
                        }
                        renderSponsers()
                    }
                
            })
        }
        renderSponsers()
    
    console.log(5555789)
    
    }

    // References to HTML objects   
    const tblPatrocinadores = document.getElementById("tblPatrocinadores")
    const formPatrocinadores = document.getElementById("formPatrocinadores")

    formPatrocinadores.addEventListener("submit", async (event) => {
        event.preventDefault()
        const nome_patrocinador = document.getElementById("nome_patrocinador").value
        const NIF = document.getElementById("NIF").value
        const pessoa_contacto = document.getElementById("pessoa_contacto").value
        const preco_patrocinio = document.getElementById("preco_patrocinio").value
        const Contacto = document.getElementById("Contacto").value
        const Morada = document.getElementById("Morada").value
        const validade_patrocinio = document.getElementById("validade_patrocinio").value
        const txtNotas = document.getElementById("txtNotas").value

// Verifica flag isNew para saber se se trata de uma adição ou de um atualização dos dados de um patrocinador
        let response
        if (isNew) {
            console.log('antesdofetchdeAdd')
            // Adiciona Patrocinador
            response = await fetch(`http://localhost:3000/sponser`, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                body: `nome_patrocinador=${nome_patrocinador}&Contacto=${Contacto}&pessoa_contacto=${pessoa_contacto}
                &NIF=${NIF}&Morada=${Morada}&active=1`
            }).then(function() {
                fetch(`http://localhost:3000/sponsership`, {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    method: "POST",
                    body: `preco_patrocinio=${preco_patrocinio}& validade_patrocinio=${validade_patrocinio}
                    &notas=${txtNotas}&active=1`

               }  ) })
        
            const newid_patrocinador = response.headers.get("Location")
            const newSponser= await response.json()
        }
        isNew = true
      
        console.log(900999)
        formPatrocinadores.reset()
        let strHtml = `
            <thead >
                <tr><th class='w-100 text-center bg-warning' colspan='7'>Lista de Patrocinadores</th></tr>
			<tr class='bg-info'>
			<th class='w-2'>#</th>
			<th class='w-50'>Nome</th>
			<th class='w-8'>NIF/NIPC</th>              
			<th class='w-15'>Contacto</th> 
			<th class='w-8'>Validade</th>
			<th class='w-6'>Montante</th>
			<th class='w-6'>Ações</th> 		    
                </tr> 
            </thead><tbody>           
        `   
    }) 


//EDITAR TABELA
        
// Gerir o clique no ícone de Editar        

//pre preencher o form 
    const EditarDados = document.getElementById("edit");
    const form = document.getElementsById("formEditarPatrocinadores");

    EditarDados.addEventListener("onclick", async(event) => {
    event.preventDefault()
    await fetch (`http://localhost:3000/sponser/${id_patrocinador}` , {
    headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "GET",
}).then (function() {
    fetch (`http://localhost:3000/sponser/${id_patrocinador}` , {
        headers: { 
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "GET",
})
.then(response => {
    if(!response.ok) {
        throw new Error (response.statusText);
    }

const p= response.json();

    console.log(888)
        document.getElementById("txtSponserId").value = p.txtSponserId
        document.getElementById("nome_patrocinador").value = p.nome_patrocinador
        document.getElementById("Contacto").value = p.Contacto
        document.getElementById("pessoa_contacto").value = p.pessoa_contacto
        document.getElementById("preco_patrocinio").value = p.preco_patrocinio
        document.getElementById("NIF").value = p.NIF
        document.getElementById("Morada").value = p.Morada
        document.getElementById("validade_patrocinio").value = p.validade_patrocinio
        document.getElementById("txtNotas").value = p.Notas    
})
    })

//function preencher() {
  //document.getElementById("editar_nome_patrocinador").placeholder = nome_patrocinador.value;
 // document.getElementById("nome_patrocinador").placeholder = myText.value;


            // Atualiza Patrocinador
            formEditarPatrocinadores.addEventListener("submit", async (event) => {
            event.preventDefault()
            console.log('antesdofetchAtuailizarPat')
            fetch(`http://localhost:3000/sponser/${id_patrocinador}`, {
                headers: { 
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "PUT",
                body: `nome_patrocinador=${nome_patrocinador}&Contacto=${Contacto}&pessoa_contacto=${pessoa_contacto}
                &NIF=${NIF}&Morada=${Morada}&active=1`
            }).then(function(){
                fetch(`http://localhost:3000/sponsership/${id_patrocinador}`, {
                    headers: { 
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    method: "PUT",
                    body: `preco_patrocinio=${preco_patrocinio}
                &validade_patrocinio=${validade_patrocinio}&notas=${txtNotas}&active=1`
                      })
                 })
             })
      })