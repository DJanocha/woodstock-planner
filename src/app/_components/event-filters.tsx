'use client'
import {
    FilterIcon,
    ShieldQuestionIcon,
    HeartIcon,
    ThumbsDownIcon,
} from "lucide-react";
import * as React from "react";
import { isEmpty } from "lodash";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
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
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import {
    filteredEventsInputFiltersDayValidator,
    filteredEventsInputFiltersPreferenceValidator,
    filteredEventsInputFiltersValidator,
} from "~/validators/filtered-events-input";
import {
    woodstockEventKindValidator,
    woodstockEventPlaceValidador,
} from "~/validators/woodstock-event";
import { useAtom } from "jotai";
import { filtersAtom } from "~/atoms/filters-atom";

export function EventFilters() {
    const [filters, setFilters] = useAtom(filtersAtom);
    const form = useForm<z.input<typeof filteredEventsInputFiltersValidator>>({
        resolver: zodResolver(filteredEventsInputFiltersValidator),
        defaultValues: filters,
    });
    const onSubmit = React.useCallback<
        SubmitHandler<z.input<typeof filteredEventsInputFiltersValidator>>
    >((vals) => {
        setFilters(filteredEventsInputFiltersValidator.parse(vals));
    }, []);
    const errors = form.formState.errors;

    return (
        <Drawer>
            <DrawerTrigger>
                <FilterIcon />
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1">
                            <DrawerHeader>
                                <DrawerTitle>Preferences</DrawerTitle>
                                <DrawerDescription>
                                    Which kind of events are you looking for?
                                </DrawerDescription>
                            </DrawerHeader>
                            <div className="p-4 pb-0">
                                <div className="flex flex-col items-center gap-4">
                                    <FormField
                                        control={form.control}
                                        name={`days`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel> days:</FormLabel>
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
                                                <FormControl>
                                                    <ToggleGroup
                                                        variant="outline"
                                                        type="multiple"
                                                        {...field}
                                                        onValueChange={field.onChange}
                                                        className="flex flex-wrap"
                                                    >
                                                        {woodstockEventPlaceValidador.options.map(
                                                            (place) => (
                                                                <ToggleGroupItem
                                                                    value={place}
                                                                    aria-label={`Toggle place named ${place}`}
                                                                    key={place}
                                                                >
                                                                    {place}
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
                                        name={`preferences`}
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel> preferences:</FormLabel>
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
                                                                filteredEventsInputFiltersPreferenceValidator
                                                                    .enum.liked
                                                            }
                                                            aria-label={`Toggle place named ${filteredEventsInputFiltersPreferenceValidator.enum.liked}`}
                                                            key={
                                                                filteredEventsInputFiltersPreferenceValidator
                                                                    .enum.liked
                                                            }
                                                        >
                                                            <HeartIcon />
                                                        </ToggleGroupItem>
                                                        <ToggleGroupItem
                                                            value={
                                                                filteredEventsInputFiltersPreferenceValidator
                                                                    .enum.disliked
                                                            }
                                                            aria-label={`Toggle place named ${filteredEventsInputFiltersPreferenceValidator.enum.disliked}`}
                                                            key={
                                                                filteredEventsInputFiltersPreferenceValidator
                                                                    .enum.disliked
                                                            }
                                                        >
                                                            <ThumbsDownIcon />
                                                        </ToggleGroupItem>
                                                        <ToggleGroupItem
                                                            value={
                                                                filteredEventsInputFiltersPreferenceValidator
                                                                    .enum.undecided
                                                            }
                                                            aria-label={`Toggle place named ${filteredEventsInputFiltersPreferenceValidator.enum.undecided}`}
                                                            key={
                                                                filteredEventsInputFiltersPreferenceValidator
                                                                    .enum.undecided
                                                            }
                                                        >
                                                            <ShieldQuestionIcon />
                                                        </ToggleGroupItem>
                                                    </ToggleGroup>
                                                </FormControl>
                                                <FormDescription />
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <DrawerFooter>
                                <DrawerClose asChild>
                                    <Button type="submit">Save</Button>
                                </DrawerClose>
                                <DrawerClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </form>
                    </Form>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
