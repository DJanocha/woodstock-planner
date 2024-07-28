import { format } from "date-fns";
import { z } from "zod";
import { events } from "~/events-list";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { hasGivenEventAnInstanceInAnyOfGivenDays } from "~/utils";
import { filteredEventsInputValidator } from "~/validators/filtered-events-input";
const stringToLowerAlphaNumeric = (str: string) =>
  str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
import { type WoodstockEvent } from "~/validators/woodstock-event";

export const eventsRouter = createTRPCRouter({
  getEventsInstances: publicProcedure
    .input(z.object({ ids: z.array(z.string()) }))
    .query(({ input }) => {
      const instanceToEventMap = new Map<
        WoodstockEvent["instances"][number],
        WoodstockEvent
      >();
      events.forEach((event) => {
        event.instances.forEach((instance) => {
          instanceToEventMap.set(instance, event);
        });
      });
      const allInstances = events.flatMap((e) => e.instances ?? []);
      const details = allInstances.filter((i) => input.ids.includes(i.id));
      const mapped = details.map((instance) => ({
        instance,
        event: instanceToEventMap.get(instance),
      }));
      console.log({ details, mapped });
      return mapped;
    }),
  getEventInstancesInfo: publicProcedure
    .input(z.object({ ids: z.array(z.string()) }))
    .query(({ input }) => {
      const instanceToEventMap = new Map<
        WoodstockEvent["instances"][number],
        WoodstockEvent
      >();
      events.forEach((event) => {
        event.instances.forEach((instance) => {
          instanceToEventMap.set(instance, event);
        });
      });
      const allInstances = events.flatMap((e) => e.instances ?? []);
      const details = allInstances.filter((i) => input.ids.includes(i.id));
      const mapped = details.map((el) => ({
        id: el.id,
        start: format(new Date(el.dateStart), "yyyy-MM-dd HH:mm"),
        end: format(new Date(el.dateEnd), "yyyy-MM-dd HH:mm"),
        title: instanceToEventMap.get(el)?.event ?? "Unknown",
      }));
      console.log({ details, mapped });
      return mapped;
    }),
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
