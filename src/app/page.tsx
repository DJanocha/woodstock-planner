import { HydrateClient } from "~/trpc/server";
import { AllEvents } from "./_components/all-events";
import { EventFilters } from "./_components/event-filters";
import { EventsSearchBy } from "./_components/event-search-by";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Navbar } from "./_components/navbar";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex h-screen flex-col items-stretch justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c] px-8 text-white md:items-center">
        <div className="container flex h-[10dvh] flex-col items-stretch justify-center gap-12 py-16 md:items-center">
          <h1 className="flex flex-col items-center text-5xl font-extrabold tracking-tight sm:text-[5rem] md:flex-row">
            <span>Woodstock</span>
            <div className="flex flex-row justify-between">
              <span className="text-[hsl(280,100%,70%)]"> Planner </span>
              <span>App</span>
            </div>
          </h1>
        </div>
        <AllEvents />
        <nav className="flex h-[10dvh] flex-row items-center gap-2">
          <EventsSearchBy />
          <EventFilters />
        </nav>
        <Navbar />
      </main>
    </HydrateClient>
  );
}
