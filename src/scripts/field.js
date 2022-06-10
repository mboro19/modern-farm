



let fieldArray = [];

let addPlant = (seedObj) => {

    let seedlings = fieldArray.push(seedObj)

    return seedlings

};


let usePlants = () => {

    let plants = fieldArray
    return plants
    
};

export {usePlants};
export {addPlant};

console.log(fieldArray)