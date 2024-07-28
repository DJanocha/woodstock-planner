import { uniq } from "lodash";
import {
  type Day,
  filteredEventsInputFiltersDayValidator,
  isDay,
} from "./validators/filtered-events-input";
import { type WoodstockEvent } from "./validators/woodstock-event";
import { getDayByDate } from "./events-list";
export const hasGivenEventAnInstanceInAnyOfGivenDays = ({
  days,
  event,
}: {
  event: WoodstockEvent;
  days: Day[];
}) => {
  const uniqueInstancesStartDates = uniq(
    event.instances.map((instance) => instance.dateStart),
  );
  const daysOfInstances = uniqueInstancesStartDates
    .map((date) => getDayByDate(date))
    .filter((maybeDay) => isDay(maybeDay))
    .map((el) => filteredEventsInputFiltersDayValidator.parse(el));

  return daysOfInstances.some((day) => days.includes(day));
};
