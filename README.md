CHALLENGE Amigo secreto
28-02-2025:
Consiste en permitir al usuario agregar los nombres de los participantes y luego escoger aleatoreamente uno de ellos.
En caso de que intente introducir un número debe arrojar un "alert" indicándole que debe ser el nombre de un participante

Prueba de sincronización entre GIT local y online.

Se cumple las siguientes tareas:
1)Se obtiene el valor ingresado por usuario a través del document.getElementById
2)Se crea un Alert en caso de que esté vacío el INPUT
3) Se añade al ARRAY a través del .push()
4)Se limpia el campo de entrada,

Se añaden dos funcionalidades muy útiles
1)Se centra el cursor nuevamente en el INPUT sin necesidad de hacer click nuevamente. Funciona a través del .focus()
document.getElementById("amigo").focus();
2)Se añade una función que posibilita usar la tecla ENTER a través de un addEventListener que conseguí investigando y me pareció curioso, ya que uso mucho el ENTER antes de darle click directamente a las cosas.



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
PENDIENTE:
Investigar como se puede mostrar el ARRAY en la página web a medida que el usuario vaya agregando nombres.