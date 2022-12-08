<template>
  <div class="flex flex-col items-center justify-center pt-20">
    <h2 class="mb-5 text-4xl font-bold">Gift Search App</h2>
    <input
      v-model="searchbar"
      :disabled="isLoading"
      @keyup.enter="handleSearch"
      type="text"
      placeholder="Start typing..."
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 mb-5 disabled:opacity-70"
    />
    <p v-if="isLoading">Please wait...</p>
    <ul v-else-if="productList.length > 0" class="list-disc">
      <li v-for="item in productList" :key="item.id">
        {{ item.title }} - ${{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';
import { debounce } from 'debounce';

const searchbar = ref(null);
const isLoading = ref(false);
const productList = reactive([]);

const handleSearch = debounce(() => {
  isLoading.value = true;
  productList.splice(0);
  axios
    .get(`https://dummyjson.com/products/search?q=${searchbar.value}&limit=5`)
    .then((res) => {
      productList.push(...res.data.products);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isLoading.value = false;
    });
}, 300);
</script>
