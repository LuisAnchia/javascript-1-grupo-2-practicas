//Escribe un programa que invierta una cadena usando recursión. Dada la
//cadena "freeCodeCamp", el programa debería devolver "pmaCedoCeerf"

const reverseString = str => {
  let result = '';
  if (str === '') return '';
  result = str[str.length - 1] + reverseString(str.slice(0, -1));
  return result;
};

reverseString.console.log ('freeCodeCamp');


//Escribe un programa que devuelva el número de veces que aparece una
//letra en una cadena. Tu programa debería recibir una cadena y la letra.S


//Escriba un programa que reciba una frase y este debe de intercambiar las
//vocales por la ‘i’. Ej, “esta es la entrada” → “isti is li intridi”

//Escriba un programa que reciba una palabra y reordene sus letras en orden
//alfabético. Ej. hola → ahlo