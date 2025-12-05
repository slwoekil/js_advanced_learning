const age = 18;
const hasLicense = true;
const isDrunk = false;

const canRideCar = age >= 18 && hasLicense && !isDrunk ? 'может' : 'не может';

console.log(canRideCar);