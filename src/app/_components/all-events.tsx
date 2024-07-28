"use client";


import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { filtersAtom } from "~/atoms/filters-atom";
import { SingleWoodstockEvent } from "~/components/single-woodstock-event";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { api } from "~/trpc/react";
import { filteredEventsInputValidator } from "~/validators/filtered-events-input";
import { EventFilters } from "./event-filters";

export function AllEvents() {
  const [filters, setFilters] = useAtom(filtersAtom);
  const form = useForm<z.infer<typeof filteredEventsInputValidator>>({
    resolver: zodResolver(filteredEventsInputValidator),
    defaultValues: { ...filters, searchBy: "" },
  });
  const values = form.watch();
  const { data: filteredEvents = [] } = api.events.getFiltered.useQuery(values);

  return (
    <div className="w-full px-4 py-2 lg:px-[8rem]">
      <div className="flex gap-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(() => 0)} className="flex-1">
            <div className="flex flex-col items-center gap-4">
              <FormField
                control={form.control}
                name={`searchBy`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="what event are you interested in?"
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
        <Button
          variant="link"
          size="icon"
          onClick={form.handleSubmit(() => 0)}
          asChild
        >
          <EventFilters />
        </Button>
      </div>
      <span>Events:</span>
      <div className="flex flex-col gap-4">
        {filteredEvents.slice(0, 5).map((event) => (
          <SingleWoodstockEvent woodstockEvent={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}
