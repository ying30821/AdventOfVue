<template>
  <div>
    <ChristmasTree v-if="size > 1" :size="size - 1" />
    <div class="flex flex-row justify-center">
      <div
        v-for="i in size"
        :key="i"
        class="relative flex items-center justify-center w-16 h-16 -m-2 bg-green-500 rounded-full"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  size: {
    type: Number,
    default: 1,
  },
});
</script>
