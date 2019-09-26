/*Palíndromo: Se dice que una palabra es palíndroma cuando se puede leer de la misma manera 
tanto de derecha a izquierda y viceversa. Crear una función en JavaScript que reciba como 
parámetro una palabra. La función debe retornar si la palabra es palíndroma o no. */

    var fraseUsuario = () ;
    
    function frasePalindromo(fraseUsuario){
      fraseUsuario=fraseUsuario.toLowerCase().replace(/\s/g,"");
      fraserReverse=fraseUsuario.split("").reverse().toString();

      for (var i = 0; i < ((fraserReverse.length)-1); i++) {
        fraserReverse=fraserReverse.replace(",","");
      };
      if(fraseUser==fraserReverse){
        resultado="es  Palindromo";
      }
      else{
        resultado="no es  Palindromo";
      }
    
    }
    frasePalindromo(fraseUsuario);