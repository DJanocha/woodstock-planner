import { z } from "zod";
import { events } from "~/events-list";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { filteredEventsInputValidator } from "~/validators/filtered-events-input";
import { woodstockEventValidator } from "~/validators/woodstock-event";

// Mocked DB

export const eventsRouter = createTRPCRouter({
  getFiltered: publicProcedure
    .input(filteredEventsInputValidator)
    .query(({ input }) => {
      const skip = input.pageSize * input.pageIndex;
      const eventKeysToFilterBy: (keyof (typeof events)[number])[] = [
        "kind",
        "place",
        "description",
        "kind",
        "place",
        'event'
        // date we cannot use because its not a string
      ];
      const filtered = events.filter((e) =>
        eventKeysToFilterBy.some((evKey) => {
          const val = z.string().default('').parse(e[evKey]);
          return val?.includes(input.filterBy.toLowerCase());
        }),
      );
  
      const spliced =filtered.slice(skip,skip+input.pageSize)
      return spliced;
    }),
});
