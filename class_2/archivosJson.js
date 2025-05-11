// json a objeto
const jsonData = '{"nombre": "Carlos", "edad": 25, "esEstudiante": true}';

const objeto = JSON.parse(jsonData);

console.log(objeto.nombre); // "Carlos"

console.log(objeto.edad);   

// objeto a json
const estudiante = {

    nombre: "Ana",

    edad: 22,

    esEstudiante: true,

    materias: ["Historia", "Inglés", "Literatura"]

};

const jsonString = JSON.stringify(estudiante);

console.log(jsonString);

// arreglo json a objeto
const jsonData2 = '{"estudiantes":[{"nombre":"Carlos","edad":25},{"nombre":"Ana","edad":22},{"nombre":"Luis","edad":23}]}';

const data = JSON.parse(jsonData2);

console.log(data.estudiantes[0].nombre);  // "Carlos"

console.log(data.estudiantes[1].edad);    // 22

