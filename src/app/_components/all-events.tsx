"use client";

import { useAtom } from "jotai";
import { last } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import { filtersAtom } from "~/atoms/filters-atom";
import { searchByAtom } from "~/atoms/search-by-atom";
import {
  dislikedEventsIdsAtom,
  likedEventsIdsAtom,
} from "~/atoms/user-preferences-atom";
import { Deck, type DeckProps } from "~/components/deck";
import { SingleWoodstockEvent } from "~/components/single-woodstock-event";
import { api, type RouterOutputs } from "~/trpc/react";
import { type PaginatedInput } from "~/validators/paginated-input";
type Row = RouterOutputs["events"]["getFiltered"][number];

export function AllEvents() {
  const pageSize = useMemo(() => 10, []);
  const [filters] = useAtom(filtersAtom);
  const [, setDislikedEventsIds] = useAtom(dislikedEventsIdsAtom);
  const [, setLikedEventsIds] = useAtom(likedEventsIdsAtom);
  const [searchBy] = useAtom(searchByAtom);
  const { data: { pages = [] } = {}, fetchNextPage } =
    api.events.getFiltered.useInfiniteQuery(
      {
        ...filters,
        ...searchBy,
        pageSize,
      },
      {
        getNextPageParam: (_lastPage, allPages) => {
          const nextPageParam: PaginatedInput["cursor"] = {
            pageIndex: allPages.length + 1,
          };
          if (_lastPage.length < pageSize) {
            return undefined;
          }
          return nextPageParam;
        },
      },
    );

  const lastRow = useMemo(() => last(pages) ?? [], [pages]);
  //   console.log({ lastRow });
  //   const rows = useMemo(() => pages.flatMap((page) => page), [pages]);

  const handleDragged = useCallback<NonNullable<DeckProps<Row>["onDragged"]>>(
    ({ dir, item }) => {
      console.log("bbbb handle drag:", { dir, item });
      if (dir === "left") {
        return setDislikedEventsIds((prev) => [...prev, item.id]);
      }
      return setLikedEventsIds((prev) => [...prev, item.id]);
    },
    [setDislikedEventsIds, setLikedEventsIds],
  );

  const renderItem = useCallback<DeckProps<Row>["renderItem"]>(
    ({ item: event }) => (
      <SingleWoodstockEvent
        woodstockEvent={event}
        key={event.id}
        shouldHideActionButtons={true}
      />
    ),
    [],
  );

  return (
    <div className="w-full flex-1 py-2">
      <Deck
        items={lastRow}
        renderItem={renderItem}
        onDragged={handleDragged}
        onAllCardsSwiped={fetchNextPage}
      />
      {/* <div className="flex flex-col items-center py-4">
        {isFetchingNextPage ? (
          <LoadingSpinner className="h-10 w-10" />
        ) : hasNextPage ? (
          <Button className="w-full" size="lg" onClick={() => fetchNextPage()}>
            Load more
          </Button>
        ) : null}
      </div> */}
    </div>
  );
}
