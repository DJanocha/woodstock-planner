"use client";

import { isSameDay, areIntervalsOverlapping } from "date-fns";
import { useAtom } from "jotai";
import { useMemo, useState } from "react";
import { savedEventInstancesIdsAtom } from "~/atoms/user-preferences-atom";
import { V6 } from "~/components/v6";
import { daysToDatesMap } from "~/events-list";
import { api } from "~/trpc/react";
import { type EventDay, eventDays } from "~/validators/event-day";
import { type WoodstockEvent } from "~/validators/woodstock-event";

const hours = Array.from({ length: 24 }, (_, i) => i);
const days = eventDays;
type Placement = { start: number; end: number; position: number };
export const CustomDayPlanner = () => {
  const [selectedDay, setSelectedDay] = useState<EventDay>("wednesday");
  const [savedEvents, setSavedEvents] = useAtom(savedEventInstancesIdsAtom);
  const { data: mappedEvents = [] } = api.events.getEventsInstances.useQuery({
    ids: savedEvents,
  });
  const thisDayEvents = mappedEvents.filter((event) =>
    isSameDay(new Date(event.instance.dateStart), daysToDatesMap[selectedDay]),
  );
  const placements = useMemo(() => {
    const _placements: Placement[] = [];
    const eventsWithIndexes: {
      instance: WoodstockEvent["instances"][number];
      index: number;
    }[] = [];
    thisDayEvents.forEach((event, index) => {
      const overlappingPlacements = eventsWithIndexes.filter((eventWithIndex) =>
        areIntervalsOverlapping(
          {
            end: eventWithIndex.instance.dateEnd,
            start: eventWithIndex.instance.dateStart,
          },
          { end: event.instance.dateEnd, start: event.instance.dateStart },
        ),
      );
      const maxPositionOfOverlappingPlacements = Math.max(
        ...overlappingPlacements.map((placement) => placement.index),
      );
      console.log({ overlappingPlacements, index, eventsWithIndexes });
      eventsWithIndexes.push({
        index: maxPositionOfOverlappingPlacements + 1,
        instance: event.instance,
      });
      _placements.push({
        end: new Date(event.instance.dateEnd).getHours(),
        start: new Date(event.instance.dateStart).getHours(),
        position: overlappingPlacements.length,
      });
    });
    return _placements;
  }, [thisDayEvents]);
  console.log({ thisDayEvents, placements });
  return <V6 instancesDetails={mappedEvents} />;
};
