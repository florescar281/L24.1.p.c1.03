import Cl_Edades from "./Cl_Edades.js";
import Cl_Persona from "./Cl_Persona.js";

const salida = document.getElementById("salida");

let edades = new Cl_Edades();

let persona1 = new Cl_Persona(15);
let persona2 = new Cl_Persona(14);
let persona3 = new Cl_Persona(19);
let persona4 = new Cl_Persona(20);
let persona5 = new Cl_Persona(16);
let persona6 = new Cl_Persona(18);

edades.procesarEdad(persona1);
edades.procesarEdad(persona2);
edades.procesarEdad(persona3);
edades.procesarEdad(persona4);
edades.procesarEdad(persona5);
edades.procesarEdad(persona6);

salida.innerHTML = `
    Promedio de edades: ${edades.promedioEdad()}
`;