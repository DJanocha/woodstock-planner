import { z } from "zod";

export const paginatedInput = z.object({
    pageSize: z.number().default(10),
    pageIndex: z.number().default(0),
})