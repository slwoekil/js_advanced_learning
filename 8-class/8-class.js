class Car {
    #brand;
    #model;
    #mileage;
    constructor(brand, model, mileage) {
        this.#brand = brand;
        this.#model = model;
        this.#mileage = mileage;
    }

    get mileage() {
        return this.#mileage;
    }

    set mileage(newMileage) {
        return this.#mileage = newMileage;
    }

    info() {
        console.log(`Марка: ${this.#brand}, Модель: ${this.#model}, Пробег: ${this.#mileage}`);
    }
}


const fordFocus = new Car('Ford', 'Focus', 34000);

console.log(fordFocus);
console.log(fordFocus.mileage)
fordFocus.info();
fordFocus.mileage = 95000;
fordFocus.info();