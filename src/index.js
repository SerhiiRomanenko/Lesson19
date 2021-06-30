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
    // console.log(obj, 'is frosen');
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            return myDeepFreeze(obj[key]);
        }
        // console.log(key);
        // console.log(obj);
    }
    // console.log(obj); ///  WTF???
    return obj;
}

myDeepFreeze(user);

user.name = 'OLOLO';
delete user.name;

user.car.model = 'AUDI';
delete user.car.model;
// console.log(user.car);

// console.log(Object.isFrozen(user.car.country));
// console.log(Object.isFrozen(user.car));
// console.log(Object.isFrozen(user));

// console.log(user);
