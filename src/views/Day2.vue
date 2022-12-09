<template>
  <section class="flex flex-col justify-center items-center">
    <h2 class="text-4xl font-bold text-center mb-20">Xmas Joke Generator</h2>
    <div
      :class="[isShowDialog ? '' : 'opacity-0']"
      class="max-w-sm mx-auto space-y-4"
    >
      <div class="grid grid-cols-5 gap-4">
        <p class="col-span-4 p-4 text-white bg-emerald-900 rounded-xl">
          {{ question }}
        </p>
        <p
          v-if="isShowAnswer"
          class="col-span-4 col-start-2 p-4 text-white bg-red-700 rounded-xl"
        >
          {{ answer }}
        </p>
      </div>
      <button
        v-if="!isShowAnswer"
        @click="isShowAnswer = true"
        type="button"
        class="block w-full p-2 rounded-lg bg-emerald-500"
      >
        Tell Me!
      </button>
      <button
        v-else
        @click="handleSearch"
        type="button"
        class="block w-full p-2 rounded-lg bg-emerald-500"
      >
        Another
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const question = ref(null);
const answer = ref(null);
const isShowDialog = ref(false);
const isShowAnswer = ref(false);

onMounted(() => {
  handleSearch();
});
const handleSearch = () => {
  isShowDialog.value = false;
  isShowAnswer.value = false;
  question.value = null;
  answer.value = null;
  axios
    .get(`https://v2.jokeapi.dev/joke/christmas`)
    .then((res) => {
      question.value = res.data.setup;
      answer.value = res.data.delivery;
      isShowDialog.value = true;
    })
    .catch((err) => {});
};
</script>
