"use client";
import { useNextCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
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
import { ScrollArea } from "@radix-ui/react-scroll-area";

export function EventsCallendar() {
  const [savedEvents, setSavedEvents] = useAtom(savedEventInstancesIdsAtom);
  const { data: mappedEvents = [] } = api.events.getEventInstancesInfo.useQuery(
    {
      ids: savedEvents,
    },
  );
  console.log({ mappedEvents });
  const calendar = useNextCalendarApp({
    dayBoundaries: { start: "00:00", end: "23:59" },
    minDate: "2024-07-31",
    maxDate: "2024-08-03",
    datePicker: {
      selectedDate: "2024-08-01",
      disabled: true,
      min: "2024-07-31",
      max: "2024-08-03",
    },
    defaultView: viewMonthGrid.name,
    isResponsive: true,
    // views: [viewDay, viewWeek, viewMonthGrid, viewMonthAgenda],
    views: [viewDay],
    events: mappedEvents,
  });

  return <ScheduleXCalendar calendarApp={calendar} />;
}
