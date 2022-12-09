<template>
  <section class="flex flex-col justify-center items-center">
    <div class="max-w-xl">
      <h2 class="mb-20 text-4xl font-bold text-center">Gift Labels</h2>
      <div class="p-4 mb-5 bg-red-400 rounded-md">
        <div class="p-4 border-2 border-white rounded-md">
          <div class="flex items-center justify-between">
            <img
              src="@/assets/santa.svg"
              alt="santa"
              class="w-[190px] h-auto"
            />
            <div class="space-y-3">
              <h3 class="font-serif text-4xl text-white">Happy Holidays!</h3>
              <p class="p-2 bg-white rounded-md">
                TO: <span class="ml-1">{{ to }}</span>
              </p>
              <p class="p-2 bg-white rounded-md">
                FROM: <span class="ml-1">{{ from }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <label>
        To:
        <input
          v-model="to"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5"
        />
      </label>
      <label>
        From:
        <input
          v-model="from"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </label>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const to = ref(null);
const from = ref(null);
</script>
