"use client";

import { atom, useAtom } from "jotai";
import { useMemo } from "react";
import { filtersAtom } from "~/atoms/filters-atom";
import { searchByAtom } from "~/atoms/search-by-atom";
import { SingleWoodstockEvent } from "~/components/single-woodstock-event";
import { Button } from "~/components/ui/button";
import { LoadingSpinner } from "~/components/ui/loading-spinner";
import { api } from "~/trpc/react";
import { type PaginatedInput } from "~/validators/paginated-input";

export function AllEvents() {
  const [filters] = useAtom(filtersAtom);
  const [searchBy] = useAtom(searchByAtom);
  const {
    data: { pages = [] } = {},
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = api.events.getFiltered.useInfiniteQuery(
    {
      ...filters,
      ...searchBy,
    },
    {
      getNextPageParam: (_lastPage, allPages) => {
        const nextPageParam: PaginatedInput["cursor"] = {
          pageIndex: allPages.length,
        };
        return nextPageParam;
      },
    },
  );

  const rows = useMemo(() => pages.flatMap((page) => page), [pages]);

  return (
    <div className="w-full py-2">
      <div className="flex flex-col gap-4">
        {rows.map((event) => (
          <SingleWoodstockEvent woodstockEvent={event} key={event.id} />
        ))}
      </div>
      <div className="flex flex-col items-center py-4">
        {isFetchingNextPage ? (
          <LoadingSpinner className="h-10 w-10" />
        ) : hasNextPage ? (
          <Button className="w-full" size="lg" onClick={() => fetchNextPage()}>
            Load more
          </Button>
        ) : null}
      </div>
    </div>
  );
}
