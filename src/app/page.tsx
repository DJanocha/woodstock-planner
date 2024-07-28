
import { HydrateClient } from "~/trpc/server";
import { AllEvents } from "./_components/all-events";
import { EventFilters } from "./_components/event-filters";
import { EventsSearchBy } from "./_components/event-search-by";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white h-screen">
        <div className="container flex flex-col md:items-center justify-center gap-12 px-4 py-16 items-stretch">
          <h1 className="flex flex-col items-center text-5xl font-extrabold tracking-tight sm:text-[5rem] md:flex-row ">
            <span>Woodstock</span>
            <div className="flex flex-row justify-between">
              <span className="text-[hsl(280,100%,70%)]"> Planner</span>
              <span>App</span>
            </div>
          </h1>
        </div>
        <nav className="flex flex-row items-center gap-2">
          <EventsSearchBy />
          <EventFilters />
        </nav>
        <AllEvents />
      </main>
    </HydrateClient>
  );
}
