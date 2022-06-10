import { addPlant } from "./field";
import { createAsparagus } from "./seeds/asparagus";
import { createCorn } from "./seeds/corn";
import { createPotato } from "./seeds/potato";
import { createSoybean } from "./seeds/soybean";
import { createSunflower } from "./seeds/sunflower";
import { createWheat } from "./seeds/wheat";




let plantSeeds = (yearlyPlan) => {

 for (const array of yearlyPlan){

    for (const plant of array){

        if (plant.type === "Asparagus") {addPlant(createAsparagus())}
        else if (plant.type === "Corn") {addPlant(createCorn())}
        else if (plant.type === "Potato") {addPlant(createPotato())}
        else if (plant.type === "Soybean") {addPlant(createSoybean())}
        else if (plant.type === "Sunflower") {addPlant(createSunflower())}
        else if (plant.type === "Wheat") {addPlant(createWheat())}
    }
  }
}

export {plantSeeds};
console.log(plantSeeds)