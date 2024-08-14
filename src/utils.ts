import { uniq } from "lodash";
import {
  //   type EventDay,
  //   eventDayValidator,
  isEventDay,
} from "./validators/filtered-events-input";
import { type WoodstockEvent } from "./validators/woodstock-event";
import { getDayByDate } from "./events-list";
import { type EventDay, eventDayValidator } from "./validators/event-day";
export const hasGivenEventAnInstanceInAnyOfGivenDays = ({
  days,
  event,
}: {
  event: WoodstockEvent;
  days: EventDay[];
}) => {
  const uniqueInstancesStartDates = uniq(
    event.instances.map((instance) => instance.dateStart),
  );
  const daysOfInstances = uniqueInstancesStartDates
    .map((date) => getDayByDate(date))
    .filter((maybeDay) => isEventDay(maybeDay))
    .map((el) => eventDayValidator.parse(el));

  return daysOfInstances.some((day) => days.includes(day));
};
