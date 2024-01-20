// function greet(name) {
//     console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//     console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//     console.log(`Registering ${name}!`);
//     callback(name);
// }

// registerGuest("Mango", greet); // "Registering Mango!"
// // "Welcome Mango!"

// registerGuest("Mango", notify); // "Registering Mango!"
// "Dear Mango, your room will be ready in 30 minutes"
// ____________________________________________________________________________


// const sum = (a, b) => { return a + b; }

// function sum(a, b) {
//     return a + b;
// }

// function minus(a, b) {
//     return a - b;
// }

// function multipy(a, b) {
//     return a * b;
// }

// function calculate(a, b, callback) {
//     return callback(a, b);
// }

// console.log(calculate(2, 5, sum));


// const arr = [1, 2, 3, 4, 5, 6];
// let sum = 0;


// arr.forEach((i) => {
//     sum += i;
// })

// console.log(sum);



// const data = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         balance: 2811
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         balance: 3821
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         balance: 3793
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         balance: 2278
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         balance: 3951
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         balance: 1498
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         balance: 2764
//     },
// ]

// for (let i = 0; i < data.length; i++) {
//     if (data[i].name === 'Moore Hensley') {
//         console.log(data[i]);
//         break;
//     } else { console.log(data[i]) }
// }

// for (let dataItem of data) {
//     if (dataItem.name === 'Moore Hensley') {
//         console.log(dataItem);
//         return;
//     } else { console.log(dataItem); }
// }


// data.forEach((dataItem) => {
//     if (dataItem.name === 'Moore Hensley') {
//         console.log(dataItem)
//     }
// });
// __________________________________________________________________

// const arr1 = [1, 4, 5, 6];
// const arr3 = [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]];

// const arr4 = arr3.flat();
// console.log(arr4);

// const workers = [{
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     balance: 1498,
//     skills: ['css', 'js', 'sql']
// },
// {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     balance: 2951,
//     skills: ['figma', 'java', 'python', 'node']
// },
// {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     balance: 3951,
//     skills: ['c++', 'rubby', 'html']
// }];

// const newArr = workers.forEach((w) => {
//     if (w.name === "Carey Barr") {
//         w.balance = 777777777;
//     }
// })

// console.log(workers);

// const newArr = workers.map((w) => {
//     w.balance = 88888;
//     return {
//         ...w
//     }
// })

// console.log(newArr);

// console.log(workers);

// const newArr = workers.flatMap((w) => {
//     return w.skills
// })

// console.log(newArr);

// const arr3 = [["mathematics", "physics", [1, 3, 5]], ["science", "mathematics", [2, 4, 6]], ["physics", "biology"]];

// const arrMapFlat = arr3.flatMap((a) => {
//     return a.flatMap((f) => {
//         return f;
//     });
// })
// console.log(arrMapFlat);

// console.log(arr3.flat().flat());

// const arrMap = workers.map((a) => {
//     if (a.balance > 2000) {
//         a.balance = a.balance * 2;
//     } else {
//         a.balance;
//     }
//     return { ...a }

// })

// console.log(arrMap);

// const find = workers.find((w) => { return w.balance > 2000 });
// console.log(find);

// 1
// const filter = workers.filter((w) => { return w.balance > 2000 && w.skills.length === 4 });
// console.log(filter);

// 2
// let newResult = [];
// for (let i = 0; i < workers.length; i++) {
//     if (workers[i].balance > 2000) {
//         newResult.push(workers[i]);
//         break;
//     }
// }

// console.log(newResult);


// const redSum = workers.reduce((acc, w) => {
//     return acc + w.balance;
// }, 0);

// console.log(redSum);

// const redString = workers.reduce((acc, w) => {
//     return acc + w.name + ', ';
// }, '');

// console.log(redString);


// console.log('A'.charCodeAt(0));
// console.log('a'.charCodeAt(0));

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted((a, b) => b - a);
// console.log(ascendingScores);


// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
// console.log(students.toSorted((a, b) => a - b));

// const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]


// _____________________________________________________________________________-


// async function getUsers() {
//     return await fetch('https://jsonplaceholder.typicode.com/users').then(response =>
//         response.json()
//     );
// }

// const users = await getUsers();
// // console.log(+users[0].address.geo.lat + +users[0].address.geo.lng);
// console.log(users.filter((u) => {
//     return u.address.zipcode.indexOf('-')
// }));

// console.log(users.map((u) => {
//     return {
//         id: u.id,
//         name: u.name,
//         street: u.address.street,
//         geoLat: u.address.geo.lat,
//         companyName: u.company.name
//     }
// }));



async function getCountries() {
    return await fetch('https://restcountries.com/v3.1/all').then(response =>
        response.json()
    );
}

const country = await getCountries();
console.log(country[0]);
// console.log(country[0].idd.root + country[0].idd.suffixes);
// console.log(country.filter((c) => {
//     return c.idd.suffixes === undefined
// }));

// const countryPhone = country.
//     //     filter((c) => {
//     //     return c.idd.suffixes === undefined
//     // }).
//     flatMap((c) => {
//         if (!c.idd.suffixes) {
//             return {
//                 name: c.name.common,
//                 code: '-'
//             }
//         }
//         else {
//             return c.idd.suffixes?.flatMap((s) => {
//                 return {
//                     name: c.name.common,
//                     code: c.idd.root + s
//                 }
//             })
//         }
//     })

// console.table(countryPhone);

