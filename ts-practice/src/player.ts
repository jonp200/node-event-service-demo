export type Player = {
    name: string;
    score: number;
    email?: string;
}

export function awardPoints(player: Player, points: number): Player {
    return {
        ...player, // Copy the existing properties
        score: player.score + points
    }
}

export const NO_NAME = "Jon";