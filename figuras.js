/* Código del Cuadrado */

console.group("Cuadrado");

const ladoCuadrado = 8;
console.log("Los lados del cuadrado miden:  " + ladoCuadrado + "cm"); 

const perimetroCuadrado = ladoCuadrado * 4; 
console.log("El perimetro del cuadrado es:  " + perimetroCuadrado + "cm"); 

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El Area del cuadrado es:  " + areaCuadrado + "cm-exp-2"); 
console.groupEnd(); 

/* Código del Triángulo */
console.group("Triangulo");

const ladoTriangulo1 = 7;
const ladoTriangulo2 = 7;
const baseTriangulo = 10
const alturaTriangulo = 7.7; 

console.log(
    "Los lados del triangulo miden: "
     + ladoTriangulo1 
     + "cm, " 
     + ladoTriangulo2 
     + "cm, " 
     + baseTriangulo 
     + "cm"
     ); 


console.log("La altura del triangulo es de:  " + alturaTriangulo + "cm"); 

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log("El perimetro del triangulo es:  " + perimetroTriangulo+ "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2; 

console.log("El Area del triangulo es:  " + areaTriangulo+ "cm-exp-2"); 

console.groupEnd(); 


/* Código del Círculo */

console.group("Circulo");

// Radio
const radioCirculo = 5; 
console.log("El radio del circulo es:  " + radioCirculo+ "cm");
//Diametro
const diametroCirculo = radioCirculo * 2; 
console.log("El diametro del circulo es:  " + diametroCirculo+ "cm");
//PI 
const piCirculo = Math.PI;
console.log("PI es:  " + piCirculo);
//Circunferencia
const perimetroCirculo = diametroCirculo * piCirculo; 
console.log("El perimetro del circulo es:  " + perimetroCirculo + "cm");
//Área
const areaCirculo = (radioCirculo * radioCirculo) * piCirculo; 
console.log("El área del circulo es:  " + areaCirculo + "cm");

console.groupEnd(); 