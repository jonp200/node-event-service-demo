const noname = "Jon";
let callCount = 0;

function greet(name: string): string {
    callCount++;

    if (name === "") {
        name = noname;
    }

    return `Hello, ${name}!`;
}

console.log(greet("Jon"));
console.log(`Call count: ${callCount}`);