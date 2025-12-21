class Billing {
    #amount
    constructor(amount) {
        this.#amount = amount;
    }

    calculateTotal() {
        return this.#amount;
    }
}

class FixedBilling extends Billing {
    #amount
    constructor(amount) {
        super(amount);

        this.#amount = amount;
    }

    calculateTotal() {
        return this.#amount;
    }
}

class HourBilling extends Billing {
    #amount

    constructor(amount, hours) {
        super(amount);

        this.#amount = amount;
        this.hours = hours;
    }

    calculateTotal() {
        return this.#amount * this.hours;
    }
}

class ItemBilling extends Billing {
    #amount

    constructor(amount, items) {
        super(amount);

        this.#amount = amount;
        this.items = items;
    }

    calculateTotal() {
        return this.#amount * this.items;
    }
}