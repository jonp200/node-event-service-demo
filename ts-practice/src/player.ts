export type Player = {
    playerId: string;
    name: string;
    score: number;
}

export function awardPoints(player: Player, points: number): Player {
    return {
        ...player, // Copy the existing properties
        score: player.score + points
    }
}

export const NO_NAME = "Jon";