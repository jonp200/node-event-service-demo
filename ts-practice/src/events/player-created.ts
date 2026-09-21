export type RawPlayerCreated = {
    type: "PLAYER_CREATED";
    player_id: string;
    name: string;
};

export type PlayerCreated = {
    type: "player.created";
    playerId: string;
    name: string;
};

export function normalizePlayerCreated({player_id: playerId, name}: RawPlayerCreated): PlayerCreated {
    return {
        type: "player.created",
        playerId: playerId,
        name: name.trim(),
    };
}