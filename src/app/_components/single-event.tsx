import { z } from "zod";
import { woodstockEventValidator } from "~/validators/woodstock-event";

export const SingleEvent = ({ event }: { event: z.infer<typeof woodstockEventValidator> }) => {
    return (
        <div className="flex flex-col gap-2 bg-gradient-to-tr from-purple-600 to-violet-600 shadow-sm ring-2 ring-indigo-600 rounded-md">
            <span className="text-xl">
                {event.event}
            </span>
            <span className="text-xl">
                {event.place}
            </span>

            <div className="flex gap-2 items-center">
                <span className="text-xs">
                    {event.description}
                </span>
            </div>
        </div>
    )
}