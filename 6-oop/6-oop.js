const Character = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Character.prototype.say = function () {
    console.log(`Язык: ${this.language}, имя: ${this.name}`);
}

const orc = new Character('Орк', 'Оркадий', 'Орочий');

orc.say();

orc.weapon = 'Меч';

orc.slam = function () {
    console.log(`Нанесен удар оружием: ${this.weapon}`);
}

orc.createSpell = function () {
    orc.spell = 'Абра-кадабра'
};

orc.spellCast = function () {
    console.log(`Применено заклинание ${this.spell}`);
}


orc.slam();
orc.createSpell();
orc.spellCast();
