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

export function normalizePointsAwarded(raw: RawPointsAwarded): PointsAwarded {
    if (raw.points.trim() === "") {
        throw new Error("Points value is required");
    }

    const points = Number(raw.points);

    if (!Number.isFinite(points)) {
        throw new Error("Invalid points value");
    }

    return {
        type: "points.awarded",
        playerId: raw.player_id,
        points,
    };
}