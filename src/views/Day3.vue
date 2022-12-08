<template>
  <section class="mt-[300px] flex justify-center">
    <div
      class="flex flex-col items-center p-4 space-y-5 bg-white rounded-md shadow-lg"
    >
      <p class="p-1 font-bold bg-gray-200 rounded-sm text-emerald-500">
        Advent of Vue
      </p>
      <h2 class="text-4xl">Christmas Countdown</h2>
      <div class="flex">
        <CountdownSegment label="days" :number="daysRounded" />
        <CountdownSegment label="hours" :number="hoursRounded" />
        <CountdownSegment label="minutes" :number="minutesRounded" />
        <CountdownSegment label="seconds" :number="secondsRounded" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useNow } from '@vueuse/core';
import CountdownSegment from '@/components/CountdownSegment.vue';

const now = useNow();
const christmas = new Date('12/25/2022 00:00:00');

const days = computed(() => {
  const one_day = 1000 * 60 * 60 * 24;
  return (christmas.getTime() - now.value.getTime()) / one_day;
});
const daysRounded = computed(() => {
  return Math.floor(days.value);
});
const hours = computed(() => {
  return 24 * (days.value - daysRounded.value);
});
const hoursRounded = computed(() => {
  return Math.floor(hours.value);
});
const minutes = computed(() => {
  return 60 * (hours.value - hoursRounded.value);
});
const minutesRounded = computed(() => {
  return Math.floor(minutes.value);
});
const seconds = computed(() => {
  return 60 * (minutes.value - minutesRounded.value);
});
const secondsRounded = computed(() => {
  return Math.floor(seconds.value);
});
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.v-enter-from {
  transform: translateY(-100%);
}
.v-leave-to {
  transform: translateY(100%);
}
.v-enter-to,
.v-leave-from {
  transform: translateY(0px);
}
</style>
