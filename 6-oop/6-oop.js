const Character = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

const Orc = function (name, weapon) {
    Character.call(this, 'Орк', name, 'Орочий')

    this.weapon = weapon || 'Кулак';
};

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;

const Elf = function (name, spellSchool) {
    Character.call(this, 'Эльф', name, 'Эльфийский');

    this.spell_school = spellSchool || 'Простой';
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Character.prototype.say = function () {
    console.log(`Язык: ${this.language}, имя: ${this.name}`);
}

Orc.prototype.slam = function () {
    console.log(`Нанесен удар оружием: ${this.weapon}`);
}

Elf.prototype.createSpell = function () {
    this.spell = `Магическая стрела - ${this.spell_school}`
};

Elf.prototype.castSpell = function () {
    console.log(`Применено заклинание: ${this.spell}`);
}


const character1 = new Character('Человек', 'Локи', 'Человеческий');

character1.say();

const orc1 = new Orc('Злорк');

orc1.say();
orc1.slam();

const elf1 = new Elf('Виего');

elf1.say();
elf1.createSpell();
elf1.castSpell();
