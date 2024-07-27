"use client";

import { useState } from "react";

import { api } from "~/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { woodstockEventValidator } from "~/validators/woodstock-event";
import { z } from "zod";
import { filteredEventsInputValidator } from "~/validators/filtered-events-input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { SingleWoodstockEvent } from "~/components/single-woodstock-event";

export function AllEvents() {
  const form = useForm<z.infer<typeof filteredEventsInputValidator>>({
    resolver: zodResolver(filteredEventsInputValidator),
    defaultValues: {},
  });
  const values = form.watch();
  const { data: filteredEvents = [] } = api.events.getFiltered.useQuery(values);

  return (
    <div className="w-full lg:px-[8rem] px-4 py-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => 0)}>
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name={`filterBy`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel> filter by:</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="enter text here..." />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
      <span>Events:</span>
      <div className="flex flex-col gap-4">
        {filteredEvents.slice(0, 5).map((event) => (
          <SingleWoodstockEvent woodstockEvent={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}
