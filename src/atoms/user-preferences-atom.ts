import { atomWithStorage } from "jotai/utils";
import {
  DislikedEventsInstances,
  SelectedEventsInstances,
} from "~/validators/filtered-events-input";
// const dislikedEventsStorageKey = "woodstock-planner-disliked-events";
// export const userPreferencesDislikedEventsAtom = atomWithStorage<string[]>(
//   dislikedEventsStorageKey,
//   [],
//   undefined,
//   { getOnInit: true },
// );

const selectedEventsInstancesStorageKey =
  "woodstock-planner-selected-events-instances";

export const userSelectedEventsInstancesAtom =
  atomWithStorage<SelectedEventsInstances>(
    selectedEventsInstancesStorageKey,
    { selectedEventsInstancesIds: [] },
    undefined,
    { getOnInit: true },
  );

const dislikedEventsInstancesStorageKey =
  "woodstock-planner-disliked-events-instances";

export const userDislikedEventsInstancesAtom =
  atomWithStorage<DislikedEventsInstances>(
    dislikedEventsInstancesStorageKey,
    { dislikedEventsIds: [] },
    undefined,
    { getOnInit: true },
  );
