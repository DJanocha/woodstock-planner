/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/4ZAfb8CCaAG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { format } from "date-fns";
import { useAtom } from "jotai";
import { XIcon, type MapPinIcon } from "lucide-react";
import { useCallback, useMemo } from "react";
import { type z } from "zod";
import { CollapsibleLargeText } from "~/app/_components/collapsible-large-text";
import { filtersAtom } from "~/atoms/filters-atom";
import {
  generateEventFriendshipAtom,
  savedEventInstancesIdsAtom,
  userPreferenceDetailsAtom,
} from "~/atoms/user-preferences-atom";
import { iconsConfig } from "~/configs/icons";
import { cn } from "~/lib/utils";
import {
  eventFriendshipVariants,
  type EventFriendship,
} from "~/validators/events-friendship";
import { type woodstockEventValidator } from "~/validators/woodstock-event";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function SingleWoodstockEvent({
  woodstockEvent,
}: {
  woodstockEvent: z.input<typeof woodstockEventValidator>;
}) {
  const { place, description, instances, kind } = woodstockEvent;
  const [userFilters] = useAtom(filtersAtom);
  //   const [] = useAtom(saveatom);
  const eventFriendshipAtom = useMemo(
    () => generateEventFriendshipAtom({ eventId: woodstockEvent.id }),
    [woodstockEvent.id],
  );
  const [currentFriendship, setFriendship] = useAtom(eventFriendshipAtom);
  const [savedEventsInstancesIds, setSavedEventsInstancesIds] = useAtom(
    savedEventInstancesIdsAtom,
  );
  const toggleSaveInstanceId = useCallback(
    ({ instanceId }: { instanceId: string }) => {
      const updatedInstancesIds = savedEventsInstancesIds.includes(instanceId)
        ? savedEventsInstancesIds.filter((id) => id !== instanceId)
        : [...savedEventsInstancesIds, instanceId];
      setSavedEventsInstancesIds(updatedInstancesIds);
    },
    [savedEventsInstancesIds, setSavedEventsInstancesIds],
  );

  const configItems = useMemo((): {
    Icon: typeof MapPinIcon;
    text: string;
    isCollapsible: boolean;
  }[] => {
    return [
      {
        Icon: iconsConfig.eventProperties.kind,
        text: kind,
        isCollapsible: false,
      },
      {
        Icon: iconsConfig.eventProperties.place,
        text: place,
        isCollapsible: false,
      },
      {
        Icon: iconsConfig.eventProperties.description,
        text: description,
        isCollapsible: true,
      },
    ];
  }, [description, kind, place]);
  if (
    eventFriendshipVariants.some(
      (pref) =>
        currentFriendship === pref &&
        !(userFilters.friendships ?? []).includes(currentFriendship),
    )
  ) {
    return null;
  }
  return (
    <div className="h-30 rounded-lg border bg-background p-4 sm:p-6">
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-col items-stretch gap-1">
          <div className="flex w-full flex-row items-start justify-between">
            <h3 className="w-11/12 overflow-ellipsis text-lg font-semibold text-black">
              {woodstockEvent.event}
            </h3>
            <div className="flex flex-row gap-2">
              {eventFriendshipVariants.map((friendship) => {
                const Icon = iconsConfig.preferences[friendship];
                const isActive = currentFriendship === friendship;
                return (
                  <Button
                    className="w-1/12 p-0"
                    size="icon"
                    asChild
                    variant={"link"}
                    key={friendship}
                    onClick={() =>
                      setFriendship({
                        newStatus: friendship,
                      })
                    }
                  >
                    {
                      <Icon
                        className={cn(
                          "h-6 w-6",
                          isActive ? "" : "text-gray-400",
                        )}
                      />
                    }
                  </Button>
                );
              })}
            </div>
          </div>
          {configItems.map(({ Icon, text, isCollapsible }) => (
            <div
              className="flex items-start gap-2 text-sm text-muted-foreground"
              key={text}
            >
              <Icon className={"size-6"} />
              {isCollapsible && text.length > 0 ? (
                <CollapsibleLargeText text={text} />
              ) : (
                <span className="flex-1 overflow-ellipsis">{text}</span>
              )}
            </div>
          ))}
        </div>
        <XIcon />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {instances.map((instance) => {
          const isSaved = savedEventsInstancesIds.includes(instance.id);
          return (
            <Badge
              key={instance.id}
              variant={"secondary"}
              onClick={() => toggleSaveInstanceId({ instanceId: instance.id })}
              className={cn(
                isSaved
                  ? "to bg-gradient-to-br from-green-700 to-green-900 text-white ring-2 ring-green-900"
                  : "",
              )}
            >
              {format(instance.dateStart, "EEE HH:mm")} -{" "}
              {format(instance.dateEnd, "HH:mm")}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
