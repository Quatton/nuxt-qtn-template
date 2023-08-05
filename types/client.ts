import { createTRPCNuxtClient } from "trpc-nuxt/client";
import type { AppRouter } from "../server/trpc/routers";

export type NuxtTRPCClient = ReturnType<typeof createTRPCNuxtClient<AppRouter>>;
