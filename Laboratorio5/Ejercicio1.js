/*Realice una función que reciba un arreglo como parámetro y liste los tipos de datos de sus 
elementos y cuantos de cada tipo. */

var auno=['hola','dos'];

function uno(auno){
cont=0;
for(i=0, i<auno.length;i++){
if(typeof (auno[i])=='string'){
    cont++;
}
}
return cont;
}