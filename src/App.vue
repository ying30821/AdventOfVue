<template>
  <div class="p-4">
    <nav class="space-x-2 space-y-2">
      <router-link
        v-for="i in totalDay"
        :key="i"
        :to="`/day${i}`"
        class="text-blue-500"
      >
        {{ `Day${i}` }}
        <span v-if="i !== totalDay">|</span>
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const totalDay = ref(10);
</script>
