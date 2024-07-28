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
export type Day = z.infer<typeof filteredEventsInputFiltersDayValidator>;
export const isDay = (value: unknown): value is Day =>
  filteredEventsInputFiltersDayValidator.safeParse(value).success;

export const filteredEventsInputFiltersPreferenceValidator = z.enum([
  "liked",
  "disliked",
  "undecided",
]);
export type UserPreference = z.infer<
  typeof filteredEventsInputFiltersPreferenceValidator
>;

export const dislikedEventsInstancesIdsValidtor = z.object({
  dislikedEventsIds: z.string().array().default([]),
});
export type DislikedEventsInstances = z.infer<
  typeof dislikedEventsInstancesIdsValidtor
>;

export const selectedEventsInstancesValidator = z.object({
  selectedEventsInstancesIds: z.string().array().default([]),
});

export type SelectedEventsInstances = z.infer<
  typeof selectedEventsInstancesValidator
>;

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
  .merge(dislikedEventsInstancesIdsValidtor)
  .merge(selectedEventsInstancesValidator)
  .merge(filteredEventsInputFiltersValidator)
  .merge(filteredEventsInputSearchByValidator);
