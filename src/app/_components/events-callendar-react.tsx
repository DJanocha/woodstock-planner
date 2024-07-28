"use client";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  viewWeek,
  viewDay,
  viewMonthGrid,
  viewMonthAgenda,
} from "@schedule-x/calendar";

import "@schedule-x/theme-default/dist/index.css";
import { useAtom } from "jotai";
import { savedEventInstancesIdsAtom } from "~/atoms/user-preferences-atom";
import { api } from "~/trpc/react";

export function EventsCallendarReact() {
  const [savedEvents, setSavedEvents] = useAtom(savedEventInstancesIdsAtom);
  const { data: _mappedEvents = [] } =
    api.events.getEventInstancesInfo.useQuery({
      ids: savedEvents,
    });
  const mappedEvents = _mappedEvents.map((el, index) => ({
    ...el,
    id: `${index}`,
  }));
  const exampleEvents = [
    {
      id: "1",
      title: "Event 1",
      start: "2024-08-01 12:00",
      end: "2024-08-01 13:00",
    },
    {
      id: "2",
      title: "Event 2",
      start: "2024-08-01 11:00",
      end: "2024-08-01 14:00",
    },
  ];
  const firstMapped = mappedEvents[0];
  console.log({ firstMapped });
  if (firstMapped) {
    exampleEvents.push({ ...firstMapped, title: "test" });
  }

  const calendar = useCalendarApp({
    defaultView: viewDay.name,
    views: [viewDay, viewWeek, viewMonthGrid, viewMonthAgenda],
    events: [
      ...exampleEvents,
      ...mappedEvents,
      //   {
      //     id: "fdfd",
      //     title: "abc",
      //     start: "2024-08-01 08:00",
      //     end: "2024-08-01 14:00",
      //     _options: { additionalClasses: ["bg-red-500"] },
      //     description: "description",
      //   },
    ],
    selectedDate: "2024-08-01",
    timePointsPerDay: 12,
  });
  console.log({ mappedEvents, exampleEvents });

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}
