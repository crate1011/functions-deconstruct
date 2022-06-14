const checkWeather = (weather) => {
    return `its ${weather} out, go fishing!!`
}

const getBait = (bait) => {
    return `you bought ${bait}`
}

const getGas = (gallons) => {
    return `I bought ${gallons} gallons of gas`
}

const checkSize = (size) => {
    if (size < 10) {
       return `too small, throw it back`
    } else {
       return `Its a keeper!`
    }
}

const fishFry = (fish) => {
    return `your fried ${fish} is ready, enjoy!!`
}

console.log(checkWeather('sunny'))
console.log(getBait('crickets'))
console.log(getGas(15))
console.log(checkSize(20))
console.log(fishFry('bass'))