// Gestion de Usuarios
window.onload = iniciar;

function iniciar(){
    let butoon = document.getElementById("butoon1");
    butoon.addEventListener("click", ingresoUsuarios)
    let butoon2 = document.getElementById("butoon2");
    butoon2.addEventListener("click", elimiarUsuarios)
};

// Funcion para poner primera letra en Mayusculas a fin de respetar lo Nombres
let capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1);
};

//Constructor de Usuarios
class User{
    constructor(sexo,nombre,direccion,monto,financiado){
      this.sexo = sexo;
      this.nombre = nombre;
      this.direccion = direccion;
      this.monto = monto;
      this.financiado = financiado;
    }
    pagrarCuota(){
      this.financiado = this.financiado - 1;
    }
};

//Array de usuarios y Variable con Cantidad de usuarios

const usuarios = [];

let cantidad = 3;

//Funcion para Insertar en el DOM los Usuarios
let insert = () => {

    if(usuarios[usuarios.length - 1].sexo === "m"){
        let varon = document.createElement('img')
        varon.src = 'assets/hombre.png'
        document.getElementById(`imagen${usuarios.length}`).appendChild(varon)
    }else{
        let mujer = document.createElement('img')
        mujer.src = 'assets/mujer.png'
        document.getElementById(`imagen${usuarios.length}`).appendChild(mujer)
    }

    document.getElementById(`nombre${usuarios.length}`).innerHTML = capitalize(usuarios[usuarios.length - 1].nombre)
    document.getElementById(`direccion${usuarios.length}`).innerHTML = capitalize(usuarios[usuarios.length - 1].direccion)
    document.getElementById(`monto${usuarios.length}`).innerHTML = `$${usuarios[usuarios.length - 1].monto}`
    document.getElementById(`financiado${usuarios.length}`).innerHTML = `Hasta: ${usuarios[usuarios.length - 1].financiado} Cuotas`
};

// Funcion para limpiar el Html
let clearcontent = () => {
    for(let i = 1; i <= 3; i++){
        document.getElementById(`imagen${i}`).innerHTML = "";
        document.getElementById(`nombre${i}`).innerHTML = "";
        document.getElementById(`direccion${i}`).innerHTML = "";
        document.getElementById(`monto${i}`).innerHTML = "";
        document.getElementById(`financiado${i}`).innerHTML = "";
    };
};

//Funcion de Ingreso de Usuarios
let ingresoUsuarios = () => {

    if(usuarios.length == cantidad){
            alert(`Ya existen la cantidad maxima de usuarios\nElimine un usuario para crear uno nuevo`)
            return};

    // Bucle para crear Usuarios

    while(usuarios.length != cantidad){

        let genero = prompt(`Usuario ${usuarios.length + 1}\nIngrese Genero:\nM - Masculino\nF - Femenino`);

        while((genero.toLowerCase() != "m") && (genero.toLowerCase() != "f")){
            alert(`No se ingreso correctamente el Genero del Usuario`)
            genero = prompt(`Usuario ${usuarios.length + 1}\nIngrese Genero (M o F):\nM - Masculino\nF - Femenino`)
        };

        let nombrePush = prompt(`Usuario ${usuarios.length + 1} \nIngrese Nombre:`);

        while(nombrePush === ""){
            alert(`Debes Ingresar algun Nombre`)
            nombrePush = prompt(`Usuario ${usuarios.length + 1} \nIngrese Nombre:`)
        };

        let direccionPush = prompt(`Usuario ${usuarios.length + 1} \nIngrese Direccion:`);

        while(direccionPush === ""){
            alert(`Debes Ingresar alguna Direccion`)
            direccionPush = prompt(`Usuario ${usuarios.length + 1} \nIngrese Direccion:`)
        };

        let montoPush = parseInt(prompt(`Usuario ${usuarios.length + 1} \nIngrese Monto Limite:`));

        while(/\D/.test(montoPush)){
            alert(`Debes Ingresar algun Monto`)
            montoPush = parseInt(prompt(`Usuario ${usuarios.length + 1} \nIngrese Monto Limite:`))
        };

        let cuotaPush = parseInt(prompt(`Usuario ${usuarios.length + 1} \nIngrese Cuotas Limite:`));

        while(/\D/.test(cuotaPush)){
            alert(`Debes Ingresar un numero de cuota`)
            cuotaPush = parseInt(prompt(`Usuario ${usuarios.length + 1} \nIngrese Cuotas Limite:`))
        };
        // Subiendo usuarios al Array
        usuarios.push (new User(
            genero,
            nombrePush, 
            direccionPush, 
            montoPush,
            cuotaPush
        ));

        //LLamamos a la Funcion de Carga en el DOM
        insert ();

        let otro = confirm(`Desea Crear otro Usuario.?`);
        
        if(otro == false){
            alert(`${usuarios.length} Usuarios Creados`)
            return
        }else if(usuarios.length == cantidad){
            alert(`Ya existen la cantidad maxima de usuarios\nElimine un usuario para crear uno nuevo`)
            return
        };
    };
};



//Funcion para elimiar Usuarios

let elimiarUsuarios = () => {

    let elimina = confirm(`Desea eliminar un usuario.?`);

    if(elimina == false){
        alert(`No se eliminó ningun usuario`)
        return
    }else if(usuarios.length == 0){
        alert(`No hay Usuarios Ingresados\nPara eliminar Usuarios primero ahi que crearlos`)
        return
    }else{
        let userName = "";

        for(const item of usuarios){
            userName += capitalize(item.nombre)+"\n"
        };

        let userDelet = prompt(`Ingrese el Nombre del Usuario a eliminar\n${userName}`);

// Detectamos si en Usuario Ingresado existe en el array Usuarios

        if(usuarios.some(el => el.nombre === userDelet) == false){
            alert(`El Nombre de Usuario ingresado no existe`)
        return
        }else{
            let confirmacion = confirm(`Confirma que desea ELIMINAR al Usuario "${capitalize(userDelet)}"`)

            if(confirmacion == false){
                alert(`No se eliminó ningun usuario`)
                return
            }else{
                usuarios.splice(usuarios.findIndex(em => em.nombre === userDelet),1)
            };

            //Limpiamos el HTML

            clearcontent()

            //Volvemos a Cargar el HTML con los usuarios que quedaron en el Array

            for(let g = 1 ; g <= usuarios.length; g++){
                insert()
            };
        };
    };
};