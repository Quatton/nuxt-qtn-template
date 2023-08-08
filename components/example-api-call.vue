<script setup lang="ts">

  const { $trpc } = useNuxtApp();
  const { data, error, pending, refresh } = await $trpc.hello.useQuery({
    text: "client",
  });
</script>

<template>
  <UCard class="prose dark:prose-invert">
    <template #header>
      <span class="flex items-center gap-4">
        <p>
          This is an example of calling an API endpoint.<br />
          It has 50% chance of failing.
        </p>
        <UButton
          size="sm"
          color="primary"
          square
          icon="i-heroicons-arrow-path"
          variant="ghost"
          :loading="pending"
          class="ml-auto"
          @click="refresh"
        />
      </span>
    </template>
    <div v-if="error" class="text-red-500">
      {{ error.message }}
    </div>

    <div v-if="data" class="text-green-500">
      {{ data.greeting }}
    </div>
  </UCard>
</template>
