import {add, arrowAddFn} from "./math.js";
import {award, createPlayer, createPointsAwarder} from "./player.js";
import {isDeepStrictEqual} from "node:util";

const player1 = createPlayer("player-1", "") // Intentionally left blank to confirm default name

const awarder1 = createPointsAwarder(player1);

award(10, player1, awarder1);

award(20, player1, awarder1);

console.log("==================================");

const player2 = createPlayer("player-2", "Jon")

const awarder2 = createPointsAwarder(player2);

award(50, player2, awarder2);

award(60, player2, awarder2);

console.log("==================================");

const a = 1, b = 2,
    sum = add(a, b);

console.log(`Sum of ${a} and ${b}: ${sum}`);

const arrowSum = arrowAddFn(a, b);

console.log(`Sum of ${a} and ${b} using arrow function: ${arrowSum}`);

console.log("==================================");

console.log("Intentionally overwriting player1 with player2 value...");

player1.playerId = "player-2";
player1.name = "Jon";
player1.score = 111;

console.log(player1);
console.log(player2);

if (player1 !== player2) {
    console.log("player1 !== player2");
    console.log(">> At first, you may think shouldn't happen, but they are actually strictly not equal.");
    console.log(">> Strict inequality is true here, since they are two distinct objects.");
}

if (isDeepStrictEqual(player1, player2)) {
    console.log("isDeepStrictEqual(player1, player2)");
    console.log(">> If isDeepStrictEqual is true, it means that player1 and player2 have the same values.");
}

if (player1.playerId === player2.playerId && player1.name === player2.name && player1.score === player2.score) {
    console.log("Manual strict equalities");
    console.log(">> If isDeepStrictEqual is true, these manual strict equalities should also be true.");
}