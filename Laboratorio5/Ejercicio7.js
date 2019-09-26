/*Fibonacci: La serie Fibonacci es una serie matemática muy reconocida, la cual tiene 
como primeros 10 términos: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. Realice una función en JavaScript 
que reciba un número n como argumento y muestre la serie hasta el enésimo término. */



function fibonacci(numero)
{
    var var1 = 0;
    var var2 = 1;
    var var3;

    document.write(var1+"");
    document.write(var2+"");

    for(var i=3; i <= numero;i++)
    {
        var3 = var1 + var2;
        var1 = var2;
        var2 = var3;
        document.write(var3+"");
    }
}