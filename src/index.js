const user = {
    name: 'Serhii',
    surname: 'Romanenko',
    age: 29,
    profession: 'driver',
    children: 'boy',
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

// console.log(user);

function myDeepFreeze(obj) {
    Object.freeze(obj);
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            return myDeepFreeze(obj[key]);
        }
    }
}

myDeepFreeze(user);

user.name = 'OLOLO';
delete user.name;
user.car.model = 'AUDI';
delete user.car.model;

// console.log(Object.isFrozen(user.car.country));
// console.log(Object.isFrozen(user.car));
// console.log(Object.isFrozen(user));
// console.log(user);
