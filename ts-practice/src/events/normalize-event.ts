import {AppEvent, RawEvent} from "./types.js";
import {normalizePlayerCreated} from "./player-created.js";
import {normalizePointsAwarded} from "./points-awarded.js";

export function normalizeEvent(event: RawEvent): AppEvent {
    switch (event.type) {
        case "PLAYER_CREATED":
            return normalizePlayerCreated(event);
        case "POINTS_AWARDED":
            return normalizePointsAwarded(event);
        default:
            // Produces a compiler error if we add an event to RawEvent that isn't defined yet.
            throw new Error(`Unsupported event: ${event}`);
    }
}