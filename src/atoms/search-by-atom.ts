import { atom } from "jotai";
import { type z } from "zod";
import { type filteredEventsInputSearchByValidator } from "~/validators/filtered-events-input";
const initValue: z.infer<typeof filteredEventsInputSearchByValidator> = {
  searchBy: "",
};
export const searchByAtom =
  atom<z.infer<typeof filteredEventsInputSearchByValidator>>(initValue);
