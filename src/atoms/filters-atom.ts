import { atomWithStorage } from "jotai/utils";
import { z } from "zod";
import {
  filteredEventsInputFiltersPreferenceValidator,
  filteredEventsInputFiltersValidator,
} from "~/validators/filtered-events-input";
import {
  woodstockEventKindValidator,
  woodstockEventPlaceValidador,
} from "~/validators/woodstock-event";
type Filters = z.infer<typeof filteredEventsInputFiltersValidator>;

const filtersAtomStorageKey = "woodstock-planner-filters";
const initialFiltersAtomValue: Filters = {
  days: ["wednesday", "thursday", "friday", "saturday"],
  kinds: woodstockEventKindValidator.options,
  preferences: filteredEventsInputFiltersPreferenceValidator.options,
  places: woodstockEventPlaceValidador.options,
};

export const filtersAtom = atomWithStorage<Filters>(
  filtersAtomStorageKey,
  initialFiltersAtomValue,
  undefined,
  { getOnInit: true },
);
