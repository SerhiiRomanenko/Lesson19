const user = {
    name: 'Serhii',
    surname: 'Romanenko',
    age: 29,
    profession: 'driver',
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
    Object.values(obj).forEach(elem => {
        if (typeof elem === 'object') {
            myDeepFreeze(elem);
        }
    });
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
