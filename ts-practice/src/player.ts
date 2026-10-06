import {normalizeEvent} from "./events/normalize-event.js";

export type Player = {
    playerId: string;
    name: string;
    score: number;
    wins: number | null; // Nullable number; null when unassigned
    email?: string; // Optional field; undefined when unassigned
}

export const NO_NAME = "No name";

export function greet(player: Player, name: string): string {
    player.score++;

    if (name !== "") {
        player.name = name;
    }

    const msg = `Hello, ${player.name}!`;

    // An `undefined` value indicates that it is unassigned or missing
    if (player.email === undefined) {
        console.log("Player email was left blank");
    }

    // A `null` value indicates that it was explicitly assigned empty
    if (player.wins === null) {
        console.log("Player is new to the game");
    }

    return msg;
}

export function createPlayer(id: string, name: string): Player {
    const player: Player = {
        playerId: id,
        name: NO_NAME,
        wins: null,
        score: 0
    };

    console.log(greet(player, name));

    const event = normalizeEvent({
        type: "PLAYER_CREATED",
        player_id: player.playerId,
        name: player.name,
    });

    // Demonstrating strict equality
    if (event.type === "player.created") {
        console.log(`Player created event: ${JSON.stringify(event)}`);
    }

    console.log(`[${player.name}] Initial score: ${player.score}`);

    return player;
}

export function createPointsAwarder(player: Player) {
    return function fn(score: number): number {
        player.score += score;
        return score;
    };
}

export function award(points: number, player: Player, fn: (score: number) => number) {
    console.log(`Awarding ${points} points to player [${player.name}]...`);

    fn(points);

    const event = normalizeEvent({
        type: "POINTS_AWARDED",
        player_id: player.playerId,
        points: points.toString(),
    });

    // Demonstrating strict equality
    if (event.type === "points.awarded") {
        console.log(`Award event: ${JSON.stringify(event)}`);
    }

    console.log(`[${player.name}] Updated score: ${player.score}`);
}