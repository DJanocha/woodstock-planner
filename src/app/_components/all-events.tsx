"use client";

import { useAtom } from "jotai";
import { useMemo } from "react";
import { filtersAtom } from "~/atoms/filters-atom";
import { searchByAtom } from "~/atoms/search-by-atom";
import {
  dislikedEventsIdsAtom,
  likedEventsIdsAtom,
} from "~/atoms/user-preferences-atom";
import { Deck } from "~/components/deck";
import { SingleWoodstockEvent } from "~/components/single-woodstock-event";
import { Button } from "~/components/ui/button";
import { LoadingSpinner } from "~/components/ui/loading-spinner";
import { api } from "~/trpc/react";
import { type PaginatedInput } from "~/validators/paginated-input";

export function AllEvents() {
  const pageSize = useMemo(() => 10, []);
  const [filters] = useAtom(filtersAtom);
  const [dislikedEventsIds, setDislikedEventsIds] = useAtom(
    dislikedEventsIdsAtom,
  );
  const [likedEventsIds, setLikedEventsIds] = useAtom(likedEventsIdsAtom);
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
      pageSize,
    },
    {
      getNextPageParam: (_lastPage, allPages) => {
        const nextPageParam: PaginatedInput["cursor"] = {
          pageIndex: allPages.length,
        };
        if (_lastPage.length < pageSize) {
          return undefined;
        }
        return nextPageParam;
      },
    },
  );

  const rows = useMemo(() => pages.flatMap((page) => page), [pages]);
  console.log({ rows });

  return (
    <div className="w-full flex-1 py-2">
      <Deck
        items={rows}
        renderItem={({ item: event, isOnTop }) => (
          <SingleWoodstockEvent
            woodstockEvent={event}
            key={event.id}
            shouldHideActionButtons={true}
            shouldHideContent={!isOnTop}
          />
        )}
        onDragged={({ dir, item }) => {
          if (dir === "left") {
            return setDislikedEventsIds([...dislikedEventsIds, item.id]);
          }
          return setLikedEventsIds([...likedEventsIds, item.id]);
        }}
      />
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
