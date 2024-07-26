import { z } from "zod";

const woodstockEventKindValidator = z.enum([
  "Warsztat",
  "Kabaret",
  "Film",
  "Inne",
  "Spotkanie",
  "Bieg",
  "Koncert",
]);
const woodstockEventPlaceValidador = z.enum([
  "Strefa Warsztatów ASP",
  "Namiot Warsztatowy ASP",
  "Strefa Działań Twórczych ASP",
  "Duży Namiot ASP",
  "Pomorze Zachodnie",
  "Inne",
  "Duża Scena",
  "Mała Scena",
]);
const myDateValidator = z.union([z.string(), z.date()]).refine((val) => {
  if (typeof val === "string") {
    return !!Date.parse(val);
  }
  return true;
});
export const woodstockEventValidator = z.object({
  instances: z.array(
    z.object({
      id: z.string(),
      dateStart: myDateValidator,
      dateEnd: myDateValidator,
    }),
  ),
  event: z.string(),
  place: woodstockEventPlaceValidador,
  kind: woodstockEventKindValidator,
  description: z.string(),
  id: z.string(),
});
