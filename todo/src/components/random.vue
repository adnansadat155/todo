<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const fact = ref('');
const data = ref([]);
const error = ref(null);

const fetchCatFact = async () => {
  try {
    const response = await axios.get('https://catfact.ninja/fact');
    fact.value = response.data.fact;
  } catch (error) {
    error.value = 'Error fetching cat fact: ' + error.message;
    console.error(error.value);
  }
};

const fetchProductData = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    data.value = response.data.products;
    //console.log(data)
  } catch (error) {
    error.value = 'Error fetching data: ' + error.message;
    console.error(error.value);
  }
};

onMounted(() => {
  fetchProductData();
});
</script>

<template>
    <div>
      <h1>Random Cat Fact</h1>
      <p>{{ fact }}</p>
      <button @click="fetchCatFact" class="btn btn-secondary">Fetch Fact</button>
    </div>
    <div style="padding-top: 20px;">
      <h1>Products</h1>
      <p v-if="error" class="error">{{ error }}</p> <!-- Display error message if error occurs -->
      <table class="table" v-else> <!-- Render table only if there are no errors -->
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data.slice(0,5)" :key="item.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.title }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>
      </table>
    </div> 
</template>

<style>
/* Add your component-specific styles here */
.error {
  color: red;
}

div {
  margin-left: 5px; 
  margin-top: 5px; 
}
</style>
