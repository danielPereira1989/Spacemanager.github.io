 /* window.onload = () => {

const divSponsors = document.getElementById("divSponsors")
		 const renderSponsors = async () => {
        let strHtml = `
		 	<div class="container2sp">
			`
		const response = await fetch    
		const space = await response.json()
        let i = 1
        for ( const space of space) {		
		strHtml += `
		       <div class="col-md-4">
					<div class="portfolio-slider">
							<div class="portfolio-desc">
									<h3 class="widget-title" style="text-align:center">Patrocinadores do Espaço ${i} - ${space.localidade} </h3>
								</div>
						<div class="flexportfolio flexslider">
							<ul class="slides">
								<li><img src="images/portfolio/sp1.jpg" alt=""></li>
								<li><img src="images/portfolio/sp2.png" alt=""/></li>
								<li><img src="images/portfolio/sp3.jpeg" alt=""/></li>
							</ul>
						</div>
					</div>
				</div>
				`
			i++   
		}
		strHtml += "</div>"
		divSponsors.innerHTML = strHtml
		 }
  } */


  window.onload = () => {
	renderSpaces()
	
	}
	
	const teste = document.getElementById("teste")
	const img = document.getElementById("img")
	const renderSpaces = async () => {
	  const response = await fetch(`http://localhost:3000/space`)
	  console.log("sdfghj")
	  const spaces = await response.json()
		let divisao = ``

		console.log("asdddss")
		for (const space of spaces){
		 divisao += `
		 <div class="col-md-12">

							<div class="portfolio-desc">
									<h3 class="widget-title" style="text-align:center">Patrocinadores do Espaço - ${space.localidade}</h3>
							</div>
		</div>
				
					 `

			divisao += ` 
			
			<div class="row" style="margin-bottom:100px !important" >
			<ul class="slides">
					<img src="images/portfolio/sp1.jpg" alt="" width="300" height="200">
					<img src="images/portfolio/sp2.png" alt="" width="300" height="200">
					<img src="images/portfolio/sp3.jpeg" alt="" width="300" height="200">
			</ul>
			</div>
         	`
		}
			
		teste.innerHTML = divisao
	    img.innerHTML = divisao	
	}