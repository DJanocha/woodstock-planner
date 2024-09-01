import { HydrateClient } from "~/trpc/server";
import { AllEvents } from "./_components/all-events";
import { EventFilters } from "./_components/event-filters";
import { EventsSearchBy } from "./_components/event-search-by";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Navbar } from "./_components/navbar";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex h-[100dvh] flex-col items-stretch justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c] px-4 py-4 text-white">
        <div className="container flex h-[10dvw] flex-col items-center justify-center gap-12 py-16">
          <h1 className="flex flex-row flex-wrap items-center gap-2 text-center text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Woodstock
            <span className="text-[hsl(280,100%,70%)]"> Planner </span>
            App
          </h1>
        </div>
        <AllEvents />
        <div className="flex h-[10dvh] flex-row items-center gap-2">
          <EventsSearchBy />
          <EventFilters />
        </div>
        <Navbar />
      </main>
    </HydrateClient>
  );
}
