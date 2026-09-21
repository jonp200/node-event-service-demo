export type Player = {
    playerId: string;
    name: string;
    score: number;
}

export function greet(player: Player, name: string): string {
    player.score++;

    if (name !== "") {
        player.name = name;
    }

    return `Hello, ${player.name}!`;
}

export function awardPoints(player: Player, points: number): Player {
    return {
        ...player, // Copy the existing properties
        score: player.score + points
    }
}

export const NO_NAME = "No name";