import {addPlant} from "./field.js"

let harvestPlants = (fieldArray) => {

    let newArray = []

    for (let object of fieldArray){
        for(let i = 0; i < object.output; i++){

            newArray.push(addPlant(object))
        }
    

    }
    return newArray
};

export {harvestPlants};



