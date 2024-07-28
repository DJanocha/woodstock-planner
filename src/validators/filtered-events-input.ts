import { z } from "zod";
import {
  woodstockEventKindValidator,
  woodstockEventPlaceValidador,
} from "./woodstock-event";
import { paginatedInput } from "./paginated-input";
import { eventFriendshipVariant } from "./events-friendship";
import { type EventDay, eventDays, eventDayValidator } from "./event-day";

export const isEventDay = (value: unknown): value is EventDay =>
  eventDayValidator.safeParse(value).success;

export const userPreferenceDetailsValidator = z.object({
  dislikedEventsIds: z.string().array().default([]),
  likedEventsIds: z.string().array().default([]),
  selectedEventsInstancesIds: z.string().array().default([]),
});
export type UserPreferenceDetails = z.infer<
  typeof userPreferenceDetailsValidator
>;

export const filteredEventsInputFiltersValidator = z.object({
  friendships: eventFriendshipVariant
    .array()
    .default(eventFriendshipVariant.options),
  days: eventDayValidator.array().default(eventDays),
  kinds: woodstockEventKindValidator
    .array()
    .default(woodstockEventKindValidator.options),
  places: woodstockEventPlaceValidador
    .array()
    .default(woodstockEventPlaceValidador.options),
});
export const filteredEventsInputSearchByValidator = z.object({
  searchBy: z.string().default(""),
});

export const filteredEventsInputValidator = paginatedInput
  .merge(userPreferenceDetailsValidator)
  .merge(filteredEventsInputFiltersValidator)
  .merge(filteredEventsInputSearchByValidator);
