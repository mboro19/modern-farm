

let harvestPlants = (fieldArray) => {

    let newArray = []

    for (let object of fieldArray){

    let objectNew = object.map(obj => obj.output * obj)
    newArray.push(objectNew)

    }
    return newArray
};

export {harvestPlants};



