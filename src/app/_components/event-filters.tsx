"use client";
import { FilterIcon } from "lucide-react";
import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useAtom } from "jotai";
import { type SubmitHandler, useForm } from "react-hook-form";
import { type z } from "zod";
import { filtersAtom } from "~/atoms/filters-atom";
import { Button } from "~/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Separator } from "~/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import { iconsConfig } from "~/configs/icons";
import {
  filteredEventsInputFiltersDayValidator,
  filteredEventsInputFiltersPreferenceValidator,
  filteredEventsInputFiltersValidator,
} from "~/validators/filtered-events-input";
import {
  woodstockEventKindValidator,
  woodstockEventPlaceValidador,
} from "~/validators/woodstock-event";

export function EventFilters() {
  const [filters, setFilters] = useAtom(filtersAtom);
  const form = useForm<z.input<typeof filteredEventsInputFiltersValidator>>({
    resolver: zodResolver(filteredEventsInputFiltersValidator),
    defaultValues: filters,
  });
  const onSubmit = React.useCallback<
    SubmitHandler<z.input<typeof filteredEventsInputFiltersValidator>>
  >(
    (vals) => {
      setFilters(filteredEventsInputFiltersValidator.parse(vals));
    },
    [setFilters],
  );

  return (
    <Drawer onClose={form.handleSubmit(onSubmit)}>
      <DrawerTrigger>
        <FilterIcon />
      </DrawerTrigger>
      <DrawerContent className="h-[90vh] max-h-[90vh]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto w-full max-w-sm flex-1"
          >
            <DrawerHeader>
              <DrawerTitle>Preferences</DrawerTitle>
              <DrawerDescription>
                Which kind of events are you looking for?
              </DrawerDescription>
            </DrawerHeader>
            <Separator />
            <ScrollArea className="flex h-[60vh] max-h-[60vh] flex-col items-center gap-4 overflow-auto p-4 pb-0">
              <FormField
                control={form.control}
                name={`days`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> days:</FormLabel>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        form.setValue(
                          "days",
                          filteredEventsInputFiltersDayValidator.options,
                        )
                      }
                    >
                      all
                    </Button>
                    <Button
                      variant={"ghost"}
                      onClick={() => form.setValue("days", [])}
                    >
                      none
                    </Button>
                    <FormControl>
                      <ToggleGroup
                        variant="outline"
                        type="multiple"
                        {...field}
                        onValueChange={field.onChange}
                      >
                        {filteredEventsInputFiltersDayValidator.options.map(
                          (day) => (
                            <ToggleGroupItem
                              value={day}
                              aria-label={`Toggle day named ${day}`}
                              key={day}
                            >
                              {day}
                            </ToggleGroupItem>
                          ),
                        )}
                      </ToggleGroup>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`kinds`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> kinds:</FormLabel>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        form.setValue(
                          "kinds",
                          woodstockEventKindValidator.options,
                        )
                      }
                    >
                      all
                    </Button>
                    <Button
                      variant={"ghost"}
                      onClick={() => form.setValue("kinds", [])}
                    >
                      none
                    </Button>
                    <FormControl>
                      <ToggleGroup
                        variant="outline"
                        type="multiple"
                        {...field}
                        onValueChange={field.onChange}
                        className="flex flex-wrap"
                      >
                        {woodstockEventKindValidator.options.map((kind) => (
                          <ToggleGroupItem
                            value={kind}
                            aria-label={`Toggle kind named ${kind}`}
                            key={kind}
                          >
                            {kind}
                          </ToggleGroupItem>
                        ))}
                      </ToggleGroup>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`places`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> places:</FormLabel>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        form.setValue(
                          "places",
                          woodstockEventPlaceValidador.options,
                        )
                      }
                    >
                      all
                    </Button>
                    <Button
                      variant={"ghost"}
                      onClick={() => form.setValue("places", [])}
                    >
                      none
                    </Button>
                    <FormControl>
                      <ToggleGroup
                        variant="outline"
                        type="multiple"
                        {...field}
                        onValueChange={field.onChange}
                        className="flex flex-wrap"
                      >
                        {woodstockEventPlaceValidador.options.map((place) => (
                          <ToggleGroupItem
                            value={place}
                            aria-label={`Toggle place named ${place}`}
                            key={place}
                          >
                            {place}
                          </ToggleGroupItem>
                        ))}
                      </ToggleGroup>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`preferences`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel> preferences:</FormLabel>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        form.setValue(
                          "preferences",
                          filteredEventsInputFiltersPreferenceValidator.options,
                        )
                      }
                    >
                      all
                    </Button>
                    <Button
                      variant={"ghost"}
                      onClick={() => form.setValue("preferences", [])}
                    >
                      none
                    </Button>
                    <FormControl>
                      <ToggleGroup
                        variant="outline"
                        type="multiple"
                        {...field}
                        onValueChange={field.onChange}
                        className="flex flex-wrap"
                      >
                        <ToggleGroupItem
                          value={
                            filteredEventsInputFiltersPreferenceValidator.enum
                              .liked
                          }
                          aria-label={`Toggle place named ${filteredEventsInputFiltersPreferenceValidator.enum.liked}`}
                          key={
                            filteredEventsInputFiltersPreferenceValidator.enum
                              .liked
                          }
                        >
                          {<iconsConfig.preferences.liked />}
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value={
                            filteredEventsInputFiltersPreferenceValidator.enum
                              .disliked
                          }
                          aria-label={`Toggle place named ${filteredEventsInputFiltersPreferenceValidator.enum.disliked}`}
                          key={
                            filteredEventsInputFiltersPreferenceValidator.enum
                              .disliked
                          }
                        >
                          {<iconsConfig.preferences.disliked />}
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value={
                            filteredEventsInputFiltersPreferenceValidator.enum
                              .undecided
                          }
                          aria-label={`Toggle place named ${filteredEventsInputFiltersPreferenceValidator.enum.undecided}`}
                          key={
                            filteredEventsInputFiltersPreferenceValidator.enum
                              .undecided
                          }
                        >
                          {<iconsConfig.preferences.undecided />}
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </ScrollArea>

            {/* <Separator />
                        <DrawerFooter className="flex flex-row gap-4">
                            <DrawerClose asChild>
                                <Button type="submit" className="w-full">Save</Button>
                            </DrawerClose>
                            <DrawerClose asChild>
                                <Button variant="outline" className="w-full">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter> */}
          </form>
        </Form>
      </DrawerContent>
    </Drawer>
  );
}
