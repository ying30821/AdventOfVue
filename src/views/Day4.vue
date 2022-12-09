<template>
  <section class="flex flex-col justify-center items-center">
    <h2 class="mb-20 text-4xl font-bold text-center">Christmas Tree</h2>
    <div class="flex items-center justify-center w-full">
      <ChristmasTree :size="7" />
    </div>
  </section>
</template>

<script setup>
import ChristmasTree from '@/components/ChristmasTree.vue';
</script>
