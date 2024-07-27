import { z } from "zod";
import {
  woodstockEventKindValidator,
  woodstockEventPlaceValidador,
} from "./woodstock-event";
import { paginatedInput } from "./paginated-input";

export const filteredEventsInputFiltersDayValidator = z.enum([
  "wednesday",
  "thursday",
  "friday",
  "saturday",
]);
export const filteredEventsInputFiltersPreferenceValidator = z.enum([
  "liked",
  "disliked",
  "undecided",
]);
export const filteredEventsInputFiltersValidator = z.object({
  preferences: filteredEventsInputFiltersPreferenceValidator
    .array()
    .default(filteredEventsInputFiltersPreferenceValidator.options),
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
  .merge(filteredEventsInputFiltersValidator)
  .merge(filteredEventsInputSearchByValidator);
