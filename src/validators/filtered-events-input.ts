import { z } from "zod";
import {
  woodstockEventKindValidator,
  woodstockEventPlaceValidador,
} from "./woodstock-event";
import { paginatedInput } from "./paginated-input";
import { eventFriendshipVariant } from "./events-friendship";

export const filteredEventsInputFiltersDayValidator = z.enum([
  "wednesday",
  "thursday",
  "friday",
  "saturday",
]);
export type Day = z.infer<typeof filteredEventsInputFiltersDayValidator>;
export const isDay = (value: unknown): value is Day =>
  filteredEventsInputFiltersDayValidator.safeParse(value).success;

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
  days: filteredEventsInputFiltersDayValidator
    .array()
    .default(["friday", "thursday", "saturday", "wednesday"]),
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
