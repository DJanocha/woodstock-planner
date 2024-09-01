import { AllEvents } from "./_components/all-events";
import { EventFilters } from "./_components/event-filters";
import { EventsSearchBy } from "./_components/event-search-by";

export default async function Home() {
  return (
    <>
      <AllEvents />
      <div className="flex h-[10dvh] flex-row items-center gap-2">
        <EventsSearchBy />
        <EventFilters />
      </div>
    </>
  );
}
