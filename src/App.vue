<template>
  <div class="p-4">
    <nav>
      <router-link v-for="i in 2" :key="i" :to="`/day${i}`" class="text-blue-500 mr-3 last:mr-0">{{ `Day${i}` }}</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
</script>
