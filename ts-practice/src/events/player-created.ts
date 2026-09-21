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

export function normalizePlayerCreated(input: RawPlayerCreated): PlayerCreated {
    return {
        type: "player.created",
        playerId: input.player_id,
        name: input.name.trim(),
    };
}