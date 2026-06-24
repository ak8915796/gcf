let student = {
    name = "jays",
    city = "pune",

}

console.log(student);
console.log(student["name"]);
console.log(student.name);

let person  ={
    name : "ayush",
    tech :  "javaScript",
    laptop : {
        cpu : "i7",
        ram : 16,
        brand : "DELL"
    }
}
    console.log(person.laptop.cpu);
    console.log(person.laptop.ram.length);

    let animal = new Object();
    let dog = animal;
    let cat = animal;
    console.log(animal);
    console.log(dog == cat);
    console.log(dog === cat);
    let horse =new Object();
    console.log(cat == horse);


