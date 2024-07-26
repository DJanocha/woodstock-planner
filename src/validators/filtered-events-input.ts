import { z } from "zod";

export const filteredEventsInputValidator = z.object({
    days: z.enum(['wednesday', 'thursday', 'friday', 'saturday']).array().default(['friday','thursday','saturday','wednesday']),
    pageSize: z.number().default(10),
    pageIndex: z.number().default(0),
    filterBy: z.string().default('')
  })