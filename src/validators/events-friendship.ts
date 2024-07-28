import { z } from "zod";

export const eventFriendshipVariant = z.enum([
  "liked",
  "undecided",
  "disliked",
]);
export const eventFriendshipVariants = eventFriendshipVariant.options;
export type EventFriendship = z.infer<typeof eventFriendshipVariant>;
