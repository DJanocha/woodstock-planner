import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { type EventFriendship } from "~/validators/events-friendship";
import { type UserPreferenceDetails } from "~/validators/filtered-events-input";

const savedEventsInstancesIdsStorageKey =
  "woodstock-planner-saved-events-instances-ids";
export const savedEventInstancesIdsAtom = atomWithStorage<string[]>(
  savedEventsInstancesIdsStorageKey,
  [],
  undefined,
  { getOnInit: true },
);

const dislikedEventsIdsStorageKey = "woodstock-planner-disliked-events-ids";
export const dislikedEventsIdsAtom = atomWithStorage<string[]>(
  dislikedEventsIdsStorageKey,
  [],
  undefined,
  { getOnInit: true },
);

const likedEventsIdsStorageKey = "woodstock-planner-liked-events-ids";
export const likedEventsIdsAtom = atomWithStorage<string[]>(
  likedEventsIdsStorageKey,
  [],
  undefined,
  { getOnInit: true },
);

const __internal__generateEventFriendshipAtom = ({
  eventId,
}: {
  eventId: string;
}) =>
  atom<EventFriendship>((get) => {
    const isDisliked = get(dislikedEventsIdsAtom).includes(eventId);
    const isLiked = get(likedEventsIdsAtom).includes(eventId);
    if (isDisliked) {
      return "disliked";
    }
    if (isLiked) {
      return "liked";
    }
    return "undecided";
  });
export const generateEventFriendshipAtom = ({ eventId }: { eventId: string }) =>
  atom(
    (get) => {
      return get(__internal__generateEventFriendshipAtom({ eventId }));
    },
    (get, set, { newStatus }: { newStatus: EventFriendship }) => {
      console.log("in set new friendship: ", { newStatus, eventId });
      switch (newStatus) {
        case "disliked": {
          set(dislikedEventsIdsAtom, [...get(dislikedEventsIdsAtom), eventId]);
          set(
            likedEventsIdsAtom,
            get(likedEventsIdsAtom).filter((id) => id !== eventId),
          );
          return;
        }
        case "liked": {
          set(likedEventsIdsAtom, [...get(likedEventsIdsAtom), eventId]);
          set(
            dislikedEventsIdsAtom,
            get(dislikedEventsIdsAtom).filter((id) => id !== eventId),
          );
          return;
        }
        case "undecided": {
          set(
            likedEventsIdsAtom,
            get(likedEventsIdsAtom).filter((id) => id !== eventId),
          );
          set(
            dislikedEventsIdsAtom,
            get(dislikedEventsIdsAtom).filter((id) => id !== eventId),
          );
          return;
        }
        default:
          return;
      }
    },
  );

const preferenceDetailsStorageKey = "woodstock-planner-preference-details";

export const userPreferenceDetailsAtom = atomWithStorage<UserPreferenceDetails>(
  preferenceDetailsStorageKey,
  { dislikedEventsIds: [], likedEventsIds: [], selectedEventsInstancesIds: [] },
  undefined,
  { getOnInit: true },
);
