import { LoaderCircleIcon } from "lucide-react";
import { type ComponentProps } from "react";
import { cn } from "~/lib/utils";
export const LoadingSpinner = (
  props: Pick<ComponentProps<"div">, "className">,
) => {
  return <LoaderCircleIcon className={cn("animate-spin", props.className)} />;
};
