import { z } from "zod";

export const eventDayValidator = z.enum([
  "wednesday",
  "thursday",
  "friday",
  "saturday",
]);

export type EventDay = z.infer<typeof eventDayValidator>;

export const EventDays = eventDayValidator.enum;
export const eventDays = eventDayValidator.options;
