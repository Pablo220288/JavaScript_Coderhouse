/* //Solicitud de Contraseña

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

//Encuesta

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
    }; */


// Te dejo otro ejemplo de ciclo For para averiguar el factorial de un Numero.

/* let numero = parseInt(prompt("Cual es el FACTORIAL de...? Ingresa tu número"));
let total = 1;

for(let i=1; i<=numero; i++){
     total = total * i;   
     console.log(`${total}`);
}
alert(`El FACTORIAL de ${numero} es: ${total}`) */

window.onload = iniciar;

function iniciar(){
    let butoon = document.getElementById("butoon");
    butoon.addEventListener("click", calcular)
}

function calcular (){
    let inputMonto = document.getElementById("inputMonto");
    let monto = inputMonto.value;

    let inputCuota = document.getElementById("inputCuota");
    let cuota = inputCuota.value;

    let inputBanco = document.getElementById("inputBanco");
    let banco = inputBanco.value;

    let interes = ""

    if(banco != "Banco Macro"){
        if(banco != "Banco Citibank"){
            if(parseInt(cuota) > 12){
                if(parseInt(cuota) > 24){
                    if(parseInt(cuota) > 36){
                        interes = monto * (47/100);
                    }else{
                        interes = monto * (36/100);
                    }
                }else{
                    interes = monto * (25/100);
                }
            }else{
                interes = monto * (14/100);
            }
        }else{
            if(parseInt(cuota) > 12){
                if(parseInt(cuota) > 24){
                    if(parseInt(cuota) > 36){
                        interes = monto * (42/100);
                    }else{
                        interes = monto * (32/100);
                    }
                }else{
                    interes = monto * (22/100);
                }
            }else{
                interes = monto * (12/100);
            }
        }
    }else{
        if(parseInt(cuota) > 12){
            if(parseInt(cuota) > 24){
                if(parseInt(cuota) > 36){
                    interes = monto * (40/100);
                }else{
                    interes = monto * (30/100);
                }
            }else{
                interes = monto * (20/100);
            }
        }else{
            interes = monto * (10/100);
        }
    }

    let cuotas = "";

    for(let i = 1; i <= cuota; i++){
        cuotas += `<p> ${i}: $${((parseInt(monto) + interes) / cuota).toFixed(2)}</p>`;
    };

    document.getElementById("contentCuotas").innerHTML = cuotas
    document.getElementById("montoTotal").innerHTML = `Monto total: $${parseInt(monto)+interes}`


    alert(cuotas.split('-'))
};

/* let monto = prompt("Ingrese el monto em $");

let cantCuotas = prompt("Cantidad de cuotas");

while( parseInt(cantCuotas) > 48){
    alert("La cantidad de cuotas supera el limite.");
    cantCuotas = prompt("Cantidad de cuotas - Maximo 48 Cuotas");
};

let interes = ""

if(parseInt(cantCuotas) > 10){
    if(parseInt(cantCuotas) > 20){
        if(parseInt(cantCuotas) > 30){
            if(parseInt(cantCuotas) > 40){
                interes = monto * (40/100);
            };
        }else{
            interes = monto * (30/100);
        };
    }else{
        interes = monto * (20/100);
    };
}else{
    interes = monto * (10/100);
};

let cuotas = "";

for(let i = 1; i <= cantCuotas; i++){
    cuotas += `Couta ${i}: $${((parseInt(monto) + interes) / cantCuotas).toFixed(2)} \n`;
};
alert(cuotas + "\n" + `Monto total: $${parseInt(monto)+interes}`); */