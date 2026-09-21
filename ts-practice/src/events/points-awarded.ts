export type RawPointsAwarded = {
    type: "POINTS_AWARDED";
    player_id: string;
    points: string;
};

export type PointsAwarded = {
    type: "points.awarded";
    playerId: string;
    points: number;
};

export function normalizePointsAwarded(input: RawPointsAwarded): PointsAwarded {
    const points = Number(input.points);

    if (input.points.trim() === "" || !Number.isFinite(points)) {
        throw new Error("Invalid points value");
    }

    return {
        type: "points.awarded",
        playerId: input.player_id,
        points,
    };
}