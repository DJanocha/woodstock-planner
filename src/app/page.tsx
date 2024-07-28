
import { HydrateClient } from "~/trpc/server";
import { AllEvents } from "./_components/all-events";
import { EventFilters } from "./_components/event-filters";
import { EventsSearchBy } from "./_components/event-search-by";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex flex-col  items-stretch md:items-center justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white h-screen px-8">
        <div className="container flex flex-col md:items-center justify-center gap-12 py-16 items-stretch h-[10dvh]">
          <h1 className="flex flex-col items-center text-5xl font-extrabold tracking-tight sm:text-[5rem] md:flex-row ">
            <span>Woodstock</span>
            <div className="flex flex-row justify-between">
              <span className="text-[hsl(280,100%,70%)]"> Planner </span>
              <span>App</span>
            </div>
          </h1>
        </div>
        <ScrollArea className="h-[60dvh] overflow-auto">
          <AllEvents />

        </ScrollArea>
        <nav className="flex flex-row items-center gap-2 h-[15dvh]">
          <EventsSearchBy />
          <EventFilters />
        </nav>
      </main>
    </HydrateClient>
  );
}
