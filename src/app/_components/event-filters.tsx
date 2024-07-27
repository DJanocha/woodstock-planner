import {
    FilterIcon,
    ShieldQuestionIcon,
    HeartIcon,
    ThumbsDownIcon,
} from "lucide-react";
import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

const data = [
    {
        goal: 400,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 239,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 349,
    },
];

export function EventFilters() {
    const [goal, setGoal] = React.useState(350);

    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)));
    }
    const form = useForm<z.input<typeof filteredEventsInputFiltersValidator>>({
        resolver: zodResolver(filteredEventsInputFiltersValidator),
        defaultValues: filteredEventsInputFiltersValidator.parse({}),
    });
    const days = form.watch("days");
    const toggleArrEl = React.useCallback(
        <T,>({
            elem,
            allItems,
            currentlySelectedItem,
        }: {
            elem: T;
            currentlySelectedItem: T[];
            allItems: T[];
        }) => {
            const newSelected = currentlySelectedItem.includes(elem)
                ? currentlySelectedItem.filter((item) => item !== elem)
                : [...currentlySelectedItem, elem];
            const sorted = allItems.filter((sortedEl) =>
                newSelected.includes(sortedEl),
            );
            return sorted;
        },
        [],
    );
    console.log({ days });

    return (
        <Drawer>
            <DrawerTrigger>
                <FilterIcon />
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Preferences</DrawerTitle>
                        <DrawerDescription>
                            Which kind of events are you looking for?
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(() => 0)} className="flex-1">
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
                            </form>
                        </Form>
                    </div>
                    <DrawerFooter>
                        <Button>Save</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
