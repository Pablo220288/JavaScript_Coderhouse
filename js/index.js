/*Solicitud de Contraseña*/

let contra = prompt("👮 Ingresa la Contraseña."+"\n"+" Sugerencia: Hija mayor de Homero Simpson (minusculas)");

while(contra != "lisa"){
    //en caso de que cancele o no escriba nada
    if(contra === null || contra === ""){
        alert("Ingresa Algun Nombre 🤨")
        contra = prompt("👮 Ingresa la Contraseña."+"\n"+" Sugerencia: Hija mayor de Homero Simpson (minusculas)")
    }
    else{
        alert(`${contra} no es la Contraseña.😬${"\n"}Para Intentarlo de nuevo tedras que repasar conmigo una Tabla de Multiplicar.🤓`)
            //prenda por contraseña incorrecta
            let numero = parseInt(prompt("🤓 Tablas de Multiplicar."+"\n"+"Ingrese un Número:"));
                while(isNaN(numero) || numero === "" || numero === null){
                    alert("Debes ingersar un Número 🤨")
                    numero = parseInt(prompt("🤓 Tablas de Multiplicar."+"\n"+"Ingrese un Número:"))
                }
                for(let i=1; i<=10; i++){
                    let mutiplica = numero * i;
                    alert(`${numero} "x" ${i} "=" ${mutiplica}`)
                }
        contra = prompt("🙃 Ahora puedes volver a intentar."+"\n"+"Ingresa la Contraseña."+"\n"+"Sugerencia: Hija mayor de Homero Simpson (minusculas)")
    }
}
//si ingresa la contraseña correcta
alert("👏 Contraseña Correcta. Empezemos la Encuesta");

/*Encuesta*/

//constante
const TIEMPO = 1;

//variables

let tarea = prompt("✏️ Hiciste la tarea.? Responde con SI o NO");
    while(tarea.toLowerCase() === ""){
        alert("Debes ingersar una respuesta 🤨")
        tarea = prompt("✏️ Hiciste la tarea.? Responde con SI o NO")
    };

let cuarto = prompt("🏠 Ordenaste tu cuarto.? Responde con SI o NO");
    while(cuarto.toLowerCase() === ""){
        alert("Debes ingersar una respuesta 🤨")
        cuarto = prompt("🏠 Ordenaste tu cuarto.? Responde con SI o NO")
    };

    //si alguna de respuestas es "si" analisamos
    if(tarea.toLowerCase() === "si" || cuarto.toLowerCase() === "si"){
        if(tarea.toLowerCase() === "si"){
            if(cuarto.toLowerCase() === "si"){
                let timpoDeJuego = parseInt(prompt("🤔 Cuantas horas vas a jugar..?"))
                if(timpoDeJuego > TIEMPO){
                    document.getElementById("content").innerHTML = `🤨 No te parece que ${timpoDeJuego}Hs es mucho. Puedes jugar ${TIEMPO}Hs. Disfrútalas 😁`
                 }else{
                    document.getElementById("content").innerHTML = "😁 Puedes salir a Jugar. Disfruta"
                 }
            }
            else{
                document.getElementById("content").innerHTML = "😮 Debes ordenar tu Cuarto para poder salir a jugar."
            }
        }
        else{
            document.getElementById("content").innerHTML = "😮 Debes hacer la tarea para poder salir a jugar."
        }
    }else{
        document.getElementById("content").innerHTML = "😭 No puedes salir a jugar. Primero has la Tarea y Ordena tu cuarto."
    };


// Te dejo otro ejemplo de ciclo For para averiguar el factorial de un Numero.

/* let numero = parseInt(prompt("Cual es el FACTORIAL de...? Ingresa tu número"));
let total = 1;

for(let i=1; i<=numero; i++){
     total = total * i;   
     console.log(`${total}`);
}
alert(`El FACTORIAL de ${numero} es: ${total}`) */