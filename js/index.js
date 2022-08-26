// Aca va el codigo con funciones flecha y normales que interactuan con el html

/* window.onload = iniciar;

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
}; */


// Este de abajo seria un ejemplo de uso de las funciones fecha pero sin interaccion con el HTML
    
/*     const suma = (a,b) => a + b;
    const division = (a,b) => a / b;

    let monto = parseInt(prompt("Monto"));
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

    let valorCuota = "";

    for(let i = 1; i <= cuotas; i++){
        valorCuota += `${i}: $${division(suma(parseInt(monto), monto * banco),cuotas).toFixed(2)} \n`;
    };

    let montoTotal = suma(parseInt(monto),monto * banco)

  
    alert(`Cuotas:\n\n${valorCuota}\nTotal Prestamo $: ${montoTotal}`); */

/* class Prestamo{
    constructor(nombre, monto, cuota){
      this.nombre = nombre;
      this.monto = monto;
      this.cuota = cuota;
    }
    pagrarCuota(){
      this.cuota = this.cuota - 1;
    }
  };
  
  let prestamo1 = new Prestamo(
    prompt("Ingresa el Motivo de Tu Prestamos"), 
    parseInt(prompt("Ingresa el monto")), 
    parseInt(prompt("Cantidad de cuotas"))
    );

  console.log(prestamo1);
  alert(`Se creo el Prestamo: ${prestamo1.nombre}\nPor un monto de $${prestamo1.monto}\na pagar en ${prestamo1.cuota} cuotas`);

  let pagar = confirm("Quiere Realizar el pago de una cuota.?");
  if(pagar === true){
    prestamo1.pagrarCuota();
    alert(`Restan por pagar ${prestamo1.cuota} cuotas.`);
  }else{
    alert(`Restan por pagar ${prestamo1.cuota} cuotas.`);
  }; */


const sumaPrecio  = (a,b,c) => a + b + c;
const restaDescuento = (a,b) => a - b;


let producto1 = parseInt(prompt("Ingrese el precio del producto"));
let producto2 = parseInt(prompt("Ingrese el precio del producto"));
let producto3 = parseInt(prompt("Ingrese el precio del producto"));

let totalParcial = sumaPrecio(producto1, producto2, producto3)

let macro = 0.2
let santander = 0.1

let descuento = ""

let pago = parseInt(prompt("Como que Tarjeta va abonar:"+"\n"+"1 - Macro - DTO:20%"+"\n"+"2 - Santander DTO:10%"))

if(pago != 1){
    if(pago != 2){
        alert("Ingrese un numero valido")
        pago = parseInt(prompt("Como que Tarjeta va abonar:"+"\n"+"1 - Macro - DTO:20%"+"\n"+"2 - Santander DTO:10%"))
    }else{
        descuento = totalParcial * santander
    }
}else{
    descuento = totalParcial * macro
}

let total = restaDescuento(totalParcial, descuento);

let cuota = parseInt(prompt(`Su monto a pagar es de: $${total}\nEn cuantas cuotas lo va a pagar.?`))

alert(`Va a pagar ${cuota} cuotas de: ${total / cuota}`)

let valorCuota = "";

for(let i = 1; i <= cuota; i++){
    valorCuota += `${i}: $${total / cuota.toFixed(2)} \n`;
};

alert(`Cuotas:\n\n${valorCuota}\nTotal $: ${total}`);