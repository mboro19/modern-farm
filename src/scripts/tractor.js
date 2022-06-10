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

        if (plant.type === "Asparagus") {usePlants(createAsparagus())}
        else if (plant.type === "Corn") {usePlants(createCorn())}
        else if (plant.type === "Potato") {usePlants(createPotato())}
        else if (plant.type === "Soybean") {usePlants(createSoybean())}
        else if (plant.type === "Sunflower") {usePlants(createSunflower())}
        else if (plant.type === "Wheat") {usePlants(createWheat())}
    }
  }
}

export {plantSeeds};

