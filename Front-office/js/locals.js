//Quando estiver funcional, apagar o setCookie e a sua função
//fazer fetch para receber restantes dados

window.onload = () => {
    setCookie("user_id", 40, 300);
    
    let user_id = getCookie("user_id");
    
    
 /*   return fetch(`http://localhost:3000/space/` , {
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
        document.getElementById("localidade").innerHTML= p.space;
        document.getElementById("morada").innerHTML=p.space;
          })
          .catch(error => {
          //  swal.showValidationError(`Pedido falhado: ${error}`);
          });
}

 

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
  } */
   