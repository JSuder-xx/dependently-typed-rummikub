import { Set as NumberSet } from "./tile_number";
import { Group } from "./group";
import { Run } from "./run";

/** A set is either a group or a run. */
type Set = Group | Run<NumberSet>;
export = Set;

