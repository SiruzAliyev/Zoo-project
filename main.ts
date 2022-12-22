interface ITypeofAnimal {
  id: number
  name: string
  biome: string
  needforReservoir: boolean
  area: number
  meal: string
  type: "predator" | "herbivore"
}

interface IAnimal extends ITypeofAnimal {
  id: number
  name: string
  age: number
  amountOfFoodPerDay: number
}

interface ISettlement {
  id: number
  biome: string
  space: number
  presenceOfReservoir: boolean
  animals: IAnimal[]
  typeOfAnimal: "predator" | "herbivore"
}

let redPanda: IAnimal = {
  id: 1,
  name: "Red",
  age: 8,
  amountOfFoodPerDay: 2,
  biome: "forest",
  needforReservoir: false,
  area: 20,
  meal: "mambo",
  type: "predator"
}

let zebra: IAnimal = {
  id: 2,
  name: "Zebra",
  age: 30,
  amountOfFoodPerDay: 2,
  biome: "savanna",
  needforReservoir: true,
  area: 30,
  meal: "grass",
  type: "herbivore"
}

let camel: IAnimal = {
  id: 3,
  name: "Camel",
  age: 50,
  amountOfFoodPerDay: 8,
  biome: "desert",
  needforReservoir: true,
  area: 50,
  meal: "plant",
  type: "herbivore"
}

let camella: IAnimal = {
  id: 5,
  name: "Camella",
  age: 30,
  amountOfFoodPerDay: 8,
  biome: "desert",
  needforReservoir: true,
  area: 30,
  meal: "plant",
  type: "herbivore"
}

let cage1: ISettlement = {
  id: 1,
  biome: "desert",
  space: 70,
  presenceOfReservoir: true,
  animals: [],
  typeOfAnimal: "herbivore"
}

let cage2: ISettlement = {
  id: 2,
  biome: "savanna",
  space: 50,
  presenceOfReservoir: true,
  animals: [],
  typeOfAnimal: "herbivore"
}

let cage3: ISettlement = {
  id: 1,
  biome: "forest",
  space: 20,
  presenceOfReservoir: false,
  animals: [],
  typeOfAnimal: "predator"
}

function settleAnimals(animal: IAnimal, cage: ISettlement) {
  if (animal.needforReservoir === cage.presenceOfReservoir && animal.biome === cage.biome && animal.area <= cage.space) {
    if (checkAnimals(animal, cage.animals)) {
      console.log(` ${animal.name} can be settled into the cage.`)
      return `${animal.name} added to ${cage.biome}`
    } else {
      return `${animal.name} can't added to ${cage.biome}`
    }
  } else {
    return "Settled is impossible."
  }
}

// function checkAnimals(animal: IAnimal, animals: IAnimal[]): boolean {
//   for (let i = 0; i < animals.length; i++) {
//     // if(animals[i].type == "predator" && animals[i].name==animal.name){
//     //
//     // }
//     // else if (animals[i].type== "herbivore" && animals[i].type == animal.type ) {
//     //   animals.push(animal)
//     // }
//     return true
//   }
//   console.log(`This enclosure is not suitable for ${animal.name},because types of animals are opposite. `)
//   return false
// }

function checkAnimals(animal: IAnimal, animals: IAnimal[]): boolean {
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].type !== animal.type) {
      console.log(`types are opposite. `)
      return false
    }
  }
  animals.push(animal)
  return true
}

console.log(settleAnimals(camel, cage1))
console.log(settleAnimals(camella, cage1))

console.log(cage1.animals)
