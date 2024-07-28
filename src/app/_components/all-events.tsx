"use client";

import { useAtom } from "jotai";
import { filtersAtom } from "~/atoms/filters-atom";
import { searchByAtom } from "~/atoms/search-by-atom";
import { SingleWoodstockEvent } from "~/components/single-woodstock-event";
import { api } from "~/trpc/react";

export function AllEvents() {
  const [filters] = useAtom(filtersAtom);
  const [searchBy] = useAtom(searchByAtom);
  const { data: filteredEvents = [] } = api.events.getFiltered.useQuery({
    ...filters,
    ...searchBy,
  });

  return (
    <div className="w-full px-4 py-2 lg:px-[8rem]">
      <span>Events:</span>
      <div className="flex flex-col gap-4">
        {filteredEvents.slice(0, 5).map((event) => (
          <SingleWoodstockEvent woodstockEvent={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}
