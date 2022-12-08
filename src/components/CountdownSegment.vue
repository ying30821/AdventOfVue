<template>
  <div class="w-20 text-center">
    <p class="relative pt-10 overflow-hidden">
      <transition>
        <span
          :key="number"
          class="-translate-x-1/2 text-3xl text-emerald-500 absolute top-0 left-[50%]"
        >
          {{ number }}
        </span>
      </transition>
    </p>
    <p class="pt-2">{{ label }}</p>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  number: Number,
});
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.v-enter-from {
  transform: translateY(-100%) translateX(-50%);
}
.v-leave-to {
  transform: translateY(100%) translateX(-50%);
}
.v-enter-to,
.v-leave-from {
  transform: translateY(0px) translateX(-50%);
}
</style>
