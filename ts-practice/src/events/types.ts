import {PointsAwarded, RawPointsAwarded} from "./points-awarded.js";
import {PlayerCreated, RawPlayerCreated} from "./player-created.js";

export type RawEvent = RawPlayerCreated | RawPointsAwarded;

export type AppEvent = PlayerCreated | PointsAwarded;