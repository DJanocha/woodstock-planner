import { HeartIcon, LucideProps, MapPinIcon, PartyPopperIcon, ReceiptTextIcon, ShieldQuestionIcon, ThumbsDownIcon } from "lucide-react"
import react from "react"

import { UserPreference } from '~/validators/filtered-events-input'
import { WoodstockEvent } from "~/validators/woodstock-event"
type Icon = react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>

export const iconsConfig = {
    preferences: {
        liked: HeartIcon,
        disliked: ShieldQuestionIcon,
        undecided: ThumbsDownIcon
    },
    eventProperties: {
        kind: PartyPopperIcon,
        place: MapPinIcon,
        description: ReceiptTextIcon
    }
} as const satisfies {
    preferences: { [key in UserPreference]: Icon },
    eventProperties: Partial<Record<keyof WoodstockEvent, Icon>>
}