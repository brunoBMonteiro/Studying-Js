const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10,
        weight: 15
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2,
        weight: 4
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 2,
        weight: 0.2
    },
    {
        name: 'Monkey',
        type: 'macaco',
        age: 15,
        weight: 20
    },
    {
        name: 'Poste',
        type: 'Girafa',
        age: 20,
        weight: 300
    },
    
];

const petNames = pets.map((pet) => {
    return pet.age
})

console.log(petNames);