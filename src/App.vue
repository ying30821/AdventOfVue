<template>
  <div class="w-full h-screen">
    <nav class="space-x-2 space-y-2 p-4">
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
    <router-view class="h-[calc(100vh-80px)]" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const totalDay = ref(24);
</script>
