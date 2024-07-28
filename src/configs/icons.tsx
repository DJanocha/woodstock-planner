import {
  CircleHelpIcon,
  HeartIcon,
  type LucideProps,
  MapPinIcon,
  PartyPopperIcon,
  ReceiptTextIcon,
  ThumbsDownIcon,
} from "lucide-react";
import type react from "react";

import { type UserPreference } from "~/validators/filtered-events-input";
import { type WoodstockEvent } from "~/validators/woodstock-event";
type Icon = react.ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>
>;

export const iconsConfig = {
  preferences: {
    liked: HeartIcon,
    disliked: ThumbsDownIcon,
    undecided: CircleHelpIcon,
  },
  eventProperties: {
    kind: PartyPopperIcon,
    place: MapPinIcon,
    description: ReceiptTextIcon,
  },
} as const satisfies {
  preferences: { [key in UserPreference]: Icon };
  eventProperties: Partial<Record<keyof WoodstockEvent, Icon>>;
};
