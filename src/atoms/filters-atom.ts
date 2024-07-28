import { atomWithStorage } from "jotai/utils";
import { type z } from "zod";
import { eventFriendshipVariants } from "~/validators/events-friendship";
import { type filteredEventsInputFiltersValidator } from "~/validators/filtered-events-input";
import {
  woodstockEventKindValidator,
  woodstockEventPlaceValidador,
} from "~/validators/woodstock-event";
type Filters = z.infer<typeof filteredEventsInputFiltersValidator>;

const filtersAtomStorageKey = "woodstock-planner-filters";
const initialFiltersAtomValue: Filters = {
  days: ["wednesday", "thursday", "friday", "saturday"],
  kinds: woodstockEventKindValidator.options,
  friendships: eventFriendshipVariants,
  places: woodstockEventPlaceValidador.options,
};

export const filtersAtom = atomWithStorage<Filters>(
  filtersAtomStorageKey,
  initialFiltersAtomValue,
  undefined,
  { getOnInit: true },
);
