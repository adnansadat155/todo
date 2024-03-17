<script setup>
import { ref } from 'vue';

const items = ref([]);
const newItem = ref('');
const editingIndex = ref(null);

const addItem = () => {
  if (editingIndex.value !== null) {
    items.value.splice(editingIndex.value, 1, newItem.value);
    editingIndex.value = null;
  } else {
    items.value.push(newItem.value);
  }
  newItem.value = '';
};

const editItem = (index) => {
  newItem.value = items.value[index];
  editingIndex.value = index;
};

const deleteItem = (index) => {
  items.value.splice(index, 1);
};
</script>

<template>
  <div>
    <h2>CRUD Example</h2>
    <form @submit.prevent="addItem">
      <input type="text" v-model="newItem" placeholder="Add Item" required>
      <button type="submit" class="btn btn-success" style="margin-left: 10px;">Add</button>
    </form>
  </div>
  <div style="padding-top: 20px;">
    <h1>Items</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Item</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item }}</td>
          <td>
            <button @click="editItem(index)" class="btn btn-warning" style ="margin-left: 5px;">Edit</button>
            <button @click="deleteItem(index)" class="btn btn-danger" style="margin-left: 5px;">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



<style>
  div {
    margin-left: 5px;
    margin-top: 5px;
  }

 
</style>


