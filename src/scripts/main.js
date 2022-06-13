
import { addPlant, usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";
import {createPlan} from "./plan.js";
import { plantSeeds } from "./tractor.js";

let yearlyPlan = createPlan();

console.log(yearlyPlan);


export {yearlyPlan}



// let testCorn = [{
//     type: "Corn",
//     height: 180,
//     output: 6

// },
// {
//     type: "Corn",
//     height: 180,
//     output: 6

// }];

// console.log(harvestPlants(testCorn))

