import {add, arrowAddFn} from "./math.js";
import {awardPoints, NO_NAME, Player} from "./player.js";

let player: Player = {
    name: NO_NAME,
    score: 0,
}

function greet(name: string): string {
    player.score++;

    if (name !== "") {
        player.name = name;
    }

    return `Hello, ${player.name}!`;
}

console.log(greet("Jon"));

console.log(`Initial score: ${player.score}`);

const award = 10;

console.log(`Awarding ${award} points to the player...`);

player = awardPoints(player, award);

console.log(`Updated score: ${player.score}`);

const a = 1,
    b = 2,
    sum = add(a, b);

console.log(`Sum of ${a} and ${b}: ${sum}`);

const arrowSum = arrowAddFn(a, b);

console.log(`Sum of ${a} and ${b} using arrow function: ${arrowSum}`);
