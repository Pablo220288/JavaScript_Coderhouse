// Aca va el codigo con funciones flecha y normales que interactuan con el html

window.onload = iniciar;

const suma = (a,b) => a + b;
const division = (a,b) => a / b;

function iniciar(){
    let butoon = document.getElementById("butoon");
    butoon.addEventListener("click", calcular)
}

function calcular (){

    let monto = document.getElementById("inputMonto").value;
    let cuota = document.getElementById("inputCuota").value;
    let banco = document.getElementById("inputBanco").value;

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
        cuotas += `<p> ${i}: $${division(suma(parseInt(monto), interes),cuota).toFixed(2)}</p>`;
    };

    document.getElementById("contentCuotas").innerHTML = cuotas
    document.getElementById("montoTotal").innerHTML = `Monto total: $${parseInt(monto)+interes}`
};


// Este de abajo seria un ejemplo de uso de las funciones fecha pero sin interaccion con el HTML
    
/*     let monto = parseInt(prompt("Monto"));
    let cuotas = parseInt(prompt("Cuota"));
    let banco = parseInt(prompt("🏦 Ingresa la Entidad Bancaria."+"\n"+"1. Banco Macro - 10% Interes"+"\n"+"2 Banco Citibank - 20% Interes"+"\n"+"3 Banco Santander - 30% Interes"));
        
    if(banco != "1"){
        if(banco != "2"){
            banco = (30/100)
        }else{
            banco = (20/100)
        }
    }else{
        banco = (10/100)
    }

    let valorCuota = division(suma(monto, monto * banco),cuotas).toFixed(2) ;
    
    alert(`${cuotas} Cuotas de $: ${valorCuota}`); */