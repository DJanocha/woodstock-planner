import { z } from "zod";
import { events } from "~/events-list";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { hasGivenEventAnInstanceInAnyOfGivenDays } from "~/utils";
import { filteredEventsInputValidator } from "~/validators/filtered-events-input";
const stringToLowerAlphaNumeric = (str: string) =>
  str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

export const eventsRouter = createTRPCRouter({
  getFiltered: publicProcedure
    .input(filteredEventsInputValidator)
    .query(({ input }) => {
      const pageIndex = input.cursor?.pageIndex ?? input.pageIndex;
      const skip = input.pageSize * pageIndex;
      const eventKeysTosearchBy: (keyof (typeof events)[number])[] = [
        "kind",
        "place",
        "description",
        "kind",
        "place",
        "event",
        // date we cannot use because its not a string
      ];
      const filteredBySearchEngine = events.filter((e) =>
        eventKeysTosearchBy.some((evKey) => {
          const val = z.string().default("").parse(e[evKey]);
          return stringToLowerAlphaNumeric(val).includes(
            stringToLowerAlphaNumeric(input.searchBy),
          );
        }),
      );
      const filteredByDays = filteredBySearchEngine.filter((e) =>
        hasGivenEventAnInstanceInAnyOfGivenDays({ days: input.days, event: e }),
      );
      const filteredByKinds = filteredByDays.filter((e) =>
        input.kinds.includes(e.kind),
      );
      const filteredByPlaces = filteredByKinds.filter((e) =>
        input.places.includes(e.place),
      );

      const sliced = filteredByPlaces.slice(skip, skip + input.pageSize);
      return sliced;
    }),
});
