'use-strict';

function calculateDistance(addressLat, addressLong, positionLat, positionLong) {
    return Math.sqrt(Math.pow((addressLat - positionLat), 2) + Math.pow((addressLong - positionLong), 2));
}

console.log(calculateDistance(54.712821, 20.428106, 54.713729, 20.424612));