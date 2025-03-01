let amigos = [];

enter();








function limpiar () {

    document.getElementById("amigo").value= "";
    document.getElementById("amigo").focus();
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


function agregarLista () {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let cuentaAmigos = 0; cuentaAmigos < amigos.length; cuentaAmigos++) {
        let listaDeAmigos = amigos[cuentaAmigos];
        console.log(listaDeAmigos);
        lista.innerHTML += `<li>${listaDeAmigos}</li>`;
    }
}



