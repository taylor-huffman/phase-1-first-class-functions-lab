// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(parameter) {
    return parameter.slice(0,2);
}

function returnLastTwoDrivers(parameter) {
    return parameter.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function() {
        return fare * fare;
    }
}

function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers);
}