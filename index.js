// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
    return arr.slice(0, 2);
}

function returnLastTwoDrivers(arr) {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplyValue) => {return (value) => value * multiplyValue}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arr, fn) => {return fn(arr)}