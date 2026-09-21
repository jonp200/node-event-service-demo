const noname = "Jon";

type User = {
    name: string;
    score: number;
    email?: string;
}

let user: User = {
    name: noname,
    score: 0,
}

function greet(name: string): string {
    user.score++;

    if (name !== "") {
        user.name = name;
    }

    return `Hello, ${user.name}!`;
}

console.log(greet("Jon"));
console.log(`Score: ${user.score}`);
console.log(user);

function add(a: number, b: number): number {
    return a + b;
}

const a = 1,
    b = 2,
    sum = add(a, b);

console.log(`Sum of ${a} and ${b}: ${sum}`);

const arrowAddFn = (a: number, b: number): number => a + b;

const arrowSum = arrowAddFn(a, b);
console.log(`Sum of ${a} and ${b} using arrow function: ${arrowSum}`);
