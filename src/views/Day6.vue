<template>
  <div class="flex flex-col items-center justify-center gap-5">
    <h2 class="mb-10 text-4xl font-bold text-center">
      Select items to compare
    </h2>
    <p v-if="isLoading">Please wait...</p>
    <select v-else v-model="firstSelected" class="p-2 border-2 border-gray-900">
      <option disabled value="">Select an item</option>
      <option v-for="item in productLists" :key="item.id" :value="item">
        {{ `${item.title} - $${item.price}` }}
      </option>
    </select>
    <p v-if="isLoading">Please wait...</p>
    <select
      v-else
      v-model="secondSelected"
      class="p-2 border-2 border-gray-900"
    >
      <option disabled value="">Select an item</option>
      <option v-for="item in productLists" :key="item.id" :value="item">
        {{ `${item.title} - $${item.price}` }}
      </option>
    </select>
    <p v-if="compareProductList.length === 2" class="mx-5 text-center">
      <span v-if="isSameItem">These are the same items</span>
      <span v-else>
        You can get <strong>{{ calculateMultiple }}x </strong>
        <em>{{ compareProductList[0].title }}</em> for about the same price as a
        single
        <em>{{ compareProductList[1].title }}</em>
      </span>
    </p>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, reactive, onMounted, computed, watch } from 'vue';

const firstSelected = ref('');
const secondSelected = ref('');
const isLoading = ref(true);
const productLists = reactive([]);
const compareProductList = reactive([]);

const calculateMultiple = computed(() =>
  Math.floor(compareProductList[1].price / compareProductList[0].price)
);
const isSameItem = computed(
  () => firstSelected.value.id === secondSelected.value.id
);

watch(firstSelected, () => handleCompareProduct());
watch(secondSelected, () => handleCompareProduct());

onMounted(() => {
  fetchProducts();
});

const fetchProducts = () => {
  productLists.splice(0);
  isLoading.value = true;
  axios
    .get('https://dummyjson.com/products')
    .then((res) => {
      productLists.push(...res.data.products);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => (isLoading.value = false));
};

const handleCompareProduct = () => {
  if (!firstSelected.value || !secondSelected.value) return;
  compareProductList.splice(0);
  compareProductList.push(firstSelected.value, secondSelected.value);
  compareProductList.sort((a, b) => a.price - b.price);
};
</script>
