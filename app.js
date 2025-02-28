let amigos = [];

enter();




function agregarAmigo() {

    if (document.getElementById("amigo").value==="") {
        alert("Por favor escribe el nombre de tu amigo")
    }
    else {
    let lista = document.getElementById("amigo").value
    console.log(lista);
    amigos.push(lista);
    console.log(amigos);
    limpiar();
    }

}

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


