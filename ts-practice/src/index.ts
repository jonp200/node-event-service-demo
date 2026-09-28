import {add, arrowAddFn} from "./math.js";
import {award, createPlayer, createPointsAwarder} from "./player.js";

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
