let amigos = [];
let lista = document.getElementById("listaAmigos");
let ganador = document.getElementById("resultado");
enter();



function limpiar () {

    document.getElementById("amigo").value= "";
    document.getElementById("amigo").focus();
}


function agregarAmigo() {

    if (document.getElementById("amigo").value==="") {
        alert("Por favor escribe el nombre de tu amigo")
    }
    else {
    let lista = document.getElementById("amigo").value;
    console.log(lista);
    amigos.push(lista);
    limpiar();  
    agregarLista();  
    }
}


function enter() {

    document.getElementById("amigo").addEventListener("keydown",
        function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                agregarAmigo();
            }
        }          
            
    )
}



function agregarLista () {
    lista.innerHTML = "";
    ganador.innerHTML= "";
    for (let cuentaAmigos = 0; cuentaAmigos < amigos.length; cuentaAmigos++) {
        let listaDeAmigos = amigos[cuentaAmigos];
        console.log(listaDeAmigos);
        lista.innerHTML += `<li>${listaDeAmigos}</li>`;
    }
}

function sortearAmigo() {
    //validar si está vacío el ARRAY amigos
    if (amigos.length == 0) {
        //alert("Por favor, primero agrega un amigo");
        lista.innerHTML="";
        lista.innerHTML += `<li>Por favor, agrega a un amigo antes de sortear</li>`;        
    }
    else {
        lista.innerHTML= "";
        ganador.innerHTML= "";
        let elegido= amigos[Math.floor(Math.random()*amigos.length)];
        ganador.innerHTML += `<li>${elegido}</li>`;      
         

    }
    //Usando el Math.random y Math.floor seleccionar un índice aleatorio

    //utilizar el índice aleatorio para acceder al nombre correspondiente

    //arrojar el nombre seleccionado con el document.getElementByID e innerHTML
}
    


