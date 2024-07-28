import { atomWithStorage } from "jotai/utils";
import { type UserPreferenceDetails } from "~/validators/filtered-events-input";
const preferenceDetailsStorageKey = "woodstock-planner-preference-details";

export const userPreferenceDetailsAtom = atomWithStorage<UserPreferenceDetails>(
  preferenceDetailsStorageKey,
  { dislikedEventsIds: [], likedEventsIds: [], selectedEventsInstancesIds: [] },
  undefined,
  { getOnInit: true },
);
