const square = x => x * x;

console.log(square(9));

const user = {
    name: "Nathan",
    sayHi: () => console.log(`Hi. I'm ${this.name}`),
    sayHiAlt () {
    console.log(arguments)
    console.log(`Hi. I'm ${this.name}`)
    }
}

user.sayHiAlt(1, 2, 3);