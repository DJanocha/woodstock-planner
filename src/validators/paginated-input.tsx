import { z } from "zod";

export const paginatedInput = z.object({
  pageSize: z.number().default(10),
  pageIndex: z.number().default(0),
  cursor: z
    .object({
      pageIndex: z.coerce.number().default(0),
    })
    .optional()
    .nullable()
    .transform((val) => {
      if (val) {
        return val;
      }
      return {
        pageIndex: 0,
      };
    }), // NEEDED FOR INFINITE QUERIES
});

export type PaginatedInput = z.infer<typeof paginatedInput>;
