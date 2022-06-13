import { addPlant } from "./field.js";
import { usePlants } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";




let plantSeeds = (plan) => {

 for (let array of plan){

    for (let plant of array){

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

