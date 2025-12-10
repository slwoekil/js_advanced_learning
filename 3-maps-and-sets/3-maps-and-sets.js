const array = [
    {
        id: 1,
        name: 'Вася'
    },
    {
        id: 2,
        name: 'Петя'
    },
    {
        id: 1,
        name: 'Вася'
    },
]

const uniqueUsers = [
    ...new Set(array
        .map(user => user.id))]
    .map(id => array
        .find(user => user.id === id));


console.log(uniqueUsers);

