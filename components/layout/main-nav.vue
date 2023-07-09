<script setup>
const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
</script>

<template>
  <nav class="flex gap-2">
    <NuxtLink
      v-for="link in links"
      :key="link.name"
      :to="link.path"
      class="text-gray-300 hover:text-gray-100 rounded-md dark:hover:bg-gray-800 transition-colors px-4 py-2"
    >
      {{ link.name }}
    </NuxtLink>
  </nav>
</template>
<style></style>
