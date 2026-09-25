// let nemu = "john";
// let age = 25;
// let isEnrolled = true;
// let subjects = ["Programacion","Basede datos", "IA"];

// //acceder a la informacion
// console.log(typeof(nameu));
// console.log(typeof(age));
// console.log(typeof(isEnrolled));
// console.log(typeof(subjects));

// console.log(Array.isArray(subjects));

// console.log(subjects.map(function (s){return typeof (s); }));

// subjects.forEach(function (element){
//     console.log(element);
// })


let estudiante = {
    "name":"jonh M",
    "age": 25,
    "esActivo": true,
    "materias" : ["Progamacion", "BD", "IA"]
}

console.log(typeof(estudiante));
//accedemos alos datos delobjeto
console.log("El nombre del estudiante es:", estudiante.name)
console.log("La edad es:", estudiante.age)
console.log("¿Esta escrito?:",estudiante.esActivo);
console.log("La primera materia es:", estudiante.materias[0]);
console.log("La cantidad de materias:", estudiante.length);

//mostramos el completo
console.table(estudiante);



