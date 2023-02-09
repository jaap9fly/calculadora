let parcial = "";

let opRealizada = document.getElementById("operacionRealizada");

let txtResult = document.getElementById("txtResultado");

let opSeleccionado = "";

let numero = "";

let ultimoDigitoPresionado= "";

function operador (num){
   
    numero = numero + num;

    parcial = parcial + num;

    opRealizada.innerHTML= parcial;

    if(numero=='0' && opSeleccionado=='/'){
        limpiar();
        txtResult.innerHTML= "Undefined";
        return;
    }
    if(ultimoDigitoPresionado=='operacion'){
        ultimoDigitoPresionado='numero'
    }

}

function operacion(oper){
    opSeleccionado = oper;
    ultimoDigitoPresionado = "operacion";
    parcial = parcial + oper;
    numero = "";
    opRealizada.innerHTML=parcial;
}

function calculo(){
    parcial = eval(parcial);
    txtResult.innerHTML=parcial;
    parcial= parcial.toString();
    numero="";

    opRealizada.innerHTML=parcial;
}


function limpiar(){
    opSeleccionado ="";
    parcial=""
    opRealizada.innerHTML=0;
    numero=""
    txtResult.innerHTML=parcial;
}