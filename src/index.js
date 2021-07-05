const user = {
    name: 'Serhii',
    surname: 'Romanenko',
    age: 29,
    profession: 'driver',
    children: ['Anya', 'Dasha'],
    car: {
        model: 'Tesla',
        year: 1999,
        type: 'sedan',
        color: 'red',
        country: {
            continent: 'America',
            way: 'North',
            population: 120000,
            capital: 'Washingtone',
            city: 'USA',
        },
    },
};

function myDeepFreeze(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null && !Object.isFrozen(obj[key])) {
            myDeepFreeze(obj[key]);
        }
    }
    // console.log(obj);
    return Object.freeze(obj);
}

myDeepFreeze(user);
user.name = 'OLOLO';
delete user.name;
user.car.model = 'AUDI';
delete user.car.model;

// console.log(Object.isFrozen(user.car.country));
// console.log(Object.isFrozen(user.children));
// console.log(Object.isFrozen(user.car));
// console.log(Object.isFrozen(user));
// console.log(user);
