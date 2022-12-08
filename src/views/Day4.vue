<template>
  <section class="mt-[300px] flex flex-col justify-center">
    <h2 class="mb-20 text-4xl font-bold text-center">Christmas Tree</h2>
    <div class="flex items-center justify-center w-full h-full">
      <ChristmasTree :size="7" />
    </div>
  </section>
</template>

<script setup>
import ChristmasTree from '@/components/ChristmasTree.vue';
</script>
