import {add, arrowAddFn} from "./math.js";
import {awardPoints, greet, NO_NAME, Player} from "./player.js";
import {normalizeEvent} from "./events/normalize-event.js";

let player: Player = {
    playerId: "player-1",
    name: NO_NAME,
    score: 0,
}

console.log(greet(player, "Jon"));

const playerCreatedEvent = normalizeEvent({
    type: "PLAYER_CREATED",
    player_id: player.playerId,
    name: player.name,
});

console.log(`Player created event: ${JSON.stringify(playerCreatedEvent)}`);

console.log(`Initial score: ${player.score}`);

const award = 10;

console.log(`Awarding ${award} points to the player...`);

player = awardPoints(player, award);

const pointsAwardedEvent = normalizeEvent({
    type: "POINTS_AWARDED",
    player_id: player.playerId,
    points: award.toString(),
});

console.log(`Award event: ${JSON.stringify(pointsAwardedEvent)}`);

console.log(`Updated score: ${player.score}`);

const a = 1, b = 2,
    sum = add(a, b);

console.log(`Sum of ${a} and ${b}: ${sum}`);

const arrowSum = arrowAddFn(a, b);

console.log(`Sum of ${a} and ${b} using arrow function: ${arrowSum}`);
