<script setup>
  const colormode = useColorMode();

  const toggleColormode = () => {
    colormode.preference = colormode.preference === "light" ? "dark" : "light";
  };
</script>

<template>
  <UButton
    size="sm"
    color="primary"
    square
    :icon="colormode.value === 'light' ? 'i-heroicons-moon' : 'i-heroicons-sun'"
    variant="ghost"
    @click="toggleColormode"
  />
</template>
