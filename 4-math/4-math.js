function diceRoll (dice) {
    const typesOfDice = [
        'D4',
        'D6',
        'D8',
        'D10',
        'D12',
        'D16',
        'D20',
    ]

    const isValidDice = typesOfDice.find(item => item === dice);

    if (!isValidDice) {
        console.log('Передано некоррктное количество граней кубика');
        return null;
    }

    const max = Number(dice.slice(1));

    return Math.round(1 + Math.random() * (max - 1));
}


console.log(diceRoll('D20'))