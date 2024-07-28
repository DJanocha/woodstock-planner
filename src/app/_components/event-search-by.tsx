"use client";
import { useAtom } from "jotai";
import { searchByAtom } from "~/atoms/search-by-atom";
import { Input } from "~/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { filteredEventsInputSearchByValidator } from "~/validators/filtered-events-input";
import { z } from "zod";
import { useCallback } from "react";
type FormValues = z.infer<typeof filteredEventsInputSearchByValidator>;
export const EventsSearchBy = () => {
  const [searchBy, setSearchBy] = useAtom(searchByAtom);
  const form = useForm<FormValues>({
    resolver: zodResolver(filteredEventsInputSearchByValidator),
    defaultValues: { ...searchBy },
  });
  const onSubmit = useCallback<SubmitHandler<FormValues>>((vals) => {
    setSearchBy(vals);
  }, []);
  return (
    <Form {...form}>
      <form onChange={form.handleSubmit(onSubmit)} className="flex flex-1">
        <div className="flex w-full flex-1 flex-col items-center gap-4">
          <FormField
            control={form.control}
            name={`searchBy`}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    {...field}
                    placeholder="what event are you interested in?"
                    onKeyDown={(e) => {
                      console.log(e.key);
                      if (e.key === "Enter") {
                        e.preventDefault();
                        if (document.activeElement instanceof HTMLElement) {
                          document.activeElement.blur();
                        }
                      }
                    }}
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
  );
};
