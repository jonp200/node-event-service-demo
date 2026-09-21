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

export function normalizePointsAwarded({player_id: playerId, points: rawPoints}: RawPointsAwarded): PointsAwarded {
    const points = Number(rawPoints);

    if (rawPoints.trim() === "" || !Number.isFinite(points)) {
        throw new Error("Invalid points value");
    }

    return {
        type: "points.awarded",
        playerId: playerId,
        points,
    };
}