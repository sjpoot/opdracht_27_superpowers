const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
];

//console.log(superheroes);

//Opdracht 1:

const superNames = superheroes.map(supm => supm.name);
console.log(superNames);

//Opdracht 2:

const superLight = superheroes.filter(supweight => parseInt(supweight.weight) < 190);
console.log(superLight);

//Opdracht 3:

const super200 = superheroes
.filter(supweight => parseInt(supweight.weight) === 200)
.map(supweight => supweight.name);

console.log(super200);

//Opdracht 4:

const superFirst = superheroes.map(supFA => supFA.first_appearance);
console.log(superFirst);

//Opdracht 5:

const superDC = superheroes.filter(supDC => supDC.publisher == "DC Comics");
console.log(superDC);

const superMarvel = superheroes.filter(supMarv => supMarv.publisher == "Marvel Comics");
console.log(superMarvel);

//Opdracht 6:
const weightDC = superDC
.map(supDC => parseInt(supDC.weight))
.reduce((totalWeightDC, weight) => totalWeightDC + weight);

console.log(weightDC);

//Opdracht 7:
const weightMarvel = superMarvel
.map(supMarv => parseInt(supMarv.weight))
.filter(supMarv => supMarv > 0)
.reduce((totalWeightMarv, weight) => totalWeightMarv + weight);
console.log(weightMarvel);

//Opdracht 8:

/* const superHeavy = superheroes
.map(supHeav => parseInt(supHeav.weight))
.filter(supHeav => supHeav > 0)
.reduce((superHeaviest, weight) => superHeaviest > weight)
.map(supHeav => supHeav.name);

console.log(superHeavy); */