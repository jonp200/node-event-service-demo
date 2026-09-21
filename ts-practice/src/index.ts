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