import { nullable, object, string } from "valibot";
import { TRPCError } from "@trpc/server";
import { publicProcedure, router } from "../trpc";

export const appRouter = router({
  hello: publicProcedure
    .input(
      object({
        text: nullable(string()),
      })
    )
    .query(async ({ input }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const willError = Math.random() > 0.5;

      if (willError) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
        });
      }

      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
