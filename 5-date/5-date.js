function isAdult (dateOfBirth) {
    const dateNow = Date.now();
    const date = new Date(dateOfBirth).getTime();
    const difference = dateNow - date;

    return (difference / 1000 / 60 / 60 / 24/ 365) >= 14;
}

console.log(isAdult('2022-01-01'));
console.log(isAdult('1990-12-23'));
console.log(isAdult('1333-01-22'));
console.log(isAdult('2015-04-05'));
