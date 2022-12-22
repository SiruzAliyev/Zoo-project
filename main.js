var redPanda = {
    id: 1,
    name: "Red",
    age: 8,
    amountOfFoodPerDay: 2,
    biome: "forest",
    needforReservoir: false,
    area: 20,
    meal: "mambo",
    type: "predator"
};
var zebra = {
    id: 2,
    name: "Zebra",
    age: 30,
    amountOfFoodPerDay: 2,
    biome: "savanna",
    needforReservoir: true,
    area: 30,
    meal: "grass",
    type: "herbivore"
};
var camel = {
    id: 3,
    name: "Camel",
    age: 50,
    amountOfFoodPerDay: 8,
    biome: "desert",
    needforReservoir: true,
    area: 50,
    meal: "plant",
    type: "herbivore"
};
var camella = {
    id: 5,
    name: "Camella",
    age: 30,
    amountOfFoodPerDay: 8,
    biome: "desert",
    needforReservoir: true,
    area: 30,
    meal: "plant",
    type: "herbivore"
};
var cage1 = {
    id: 1,
    biome: "desert",
    space: 70,
    presenceOfReservoir: true,
    animals: [],
    typeOfAnimal: "herbivore"
};
var cage2 = {
    id: 2,
    biome: "savanna",
    space: 50,
    presenceOfReservoir: true,
    animals: [],
    typeOfAnimal: "herbivore"
};
var cage3 = {
    id: 1,
    biome: "forest",
    space: 20,
    presenceOfReservoir: false,
    animals: [],
    typeOfAnimal: "predator"
};
function settleAnimals(animal, cage) {
    if (animal.needforReservoir === cage.presenceOfReservoir && animal.biome === cage.biome && animal.area <= cage.space) {
        if (checkType(animal, cage.animals)) {
            console.log("This enclosure is suitable for ".concat(animal.name, "."));
            return "".concat(animal.name, " added to ").concat(cage.biome);
        }
        else {
            return "".concat(animal.name, " wasn't added to ").concat(cage.biome);
        }
    }
    else {
        console.log("It is impossible to add \"".concat(animal.name, "\" to enclosure with ").concat(cage.space, "m area,").concat(cage.biome, " biome. "));
        return "That is why adding failed.";
    }
}
// function checkType(animal: IAnimal, animals: IAnimal[]): boolean {
//   for (let i = 0; i < animals.length; i++) {
//     // if(animals[i].type == "predator" && animals[i].name==animal.name){
//     //
//     // }
//     // else if (animals[i].type== "herbivore" && animals[i].type == animal.type ) {
//     //   animals.push(animal)
//     // }
//     if (animals[i].type == animal.type) {
//       animals.push(animal)
//       return true
//     }
//   }
//   console.log(`This enclosure is not suitable for ${animal.name},because types of animals are opposite. `)
//   return false
// }
function checkType(animal, animals) {
    for (var i = 0; i < animals.length; i++) {
        if ((animals[i].type !== animal.type)) {
            console.log("This enclosure is not suitable for ".concat(animal.name, ",because types of animals are opposite. "));
            console.log('====================================');
            return false;
        }
    }
    animals.push(animal);
    return true;
}
console.log(settleAnimals(camel, cage1));
console.log(settleAnimals(camella, cage1));
console.log(cage1.animals);
