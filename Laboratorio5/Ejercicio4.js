/*Elabore una función que llene un arreglo con 20 números de forma aleatoria (random),
 y que pida al usuario adivinar un número, si lo adivina mostrará un mensaje indicando que ganó,
  si no mostrará que perdió. */

function cuatro(numero){
    valores=[];
    validacion=false;
    var numeroaleatorio;

    for (var i=0; i<20; i++){
        numeroaleatorio=(Math.floor(Math.random()*100)+1);
        valores.push(numeroaleatorio);
    }
    for (var j=0; j<20; j++){
        if(numero==valores[j]){
            console.log("ganaste");
            validacion=true;
            break;
        }
    }
    if(validacion==false){
        console.log("perdiste");
        }
        return valores;
}