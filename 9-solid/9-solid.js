class Character {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }

    say() {
        console.log(`${this.name} говорит на языке: ${this.language}`);
    }
}

class Orc extends Character {
    constructor(name, weapon) {
        super(name);
        this.race = 'орк';
        this.name = name;
        this.language = "орочий";
        this.weapon = weapon;
    }

    say() {
        console.log(`${this.name} можа говорить на языке: ${this.language}`);
    }

    slam() {
        console.log(`${this.name} наносит удар оружием: ${this.weapon}`);
    }
}

class Elf extends Character {
    constructor(name, spell) {
        super(name);
        this.race = 'эльф';
        this.name = name;
        this.language = "эльфийский";
        this.spell = spell;
    }

    say() {
        console.log(`${this.name} изъясняется на языке: ${this.language}`);
    }

    cast() {
        console.log(`${this.name} произносит заклинание: ${this.spell}`);
    }
}




const human = new Character('человек', 'Юрий', 'английский');
console.log(human);
human.say();

const orc = new Orc('Злорк', 'дубина');
console.log(orc);
orc.say();
orc.slam();

const elf = new Elf('Федерико', 'огненный шар');
console.log(elf);
elf.say();
elf.cast();
