import { NuxtTRPCClient } from "./client"

declare module 'nuxt/dist/app' {
  interface NuxtApp {
    $trpc: NuxtTRPCClient
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $trpc: NuxtTRPCClient
  }
}

export { }