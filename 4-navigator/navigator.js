'use-strict';

function calculateDistance(addressLat, addressLong, positionLat, positionLong) {
    return Math.sqrt(Math.pow((addressLat - positionLat), 2) + Math.pow((addressLong - positionLong), 2));
}
