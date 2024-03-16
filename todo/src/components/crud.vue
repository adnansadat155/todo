<script>
export default {
  data() {
    return {
      items: [],
      newItem: '',
      editingIndex: null
    };
  },
  methods: {
    addItem() {
      if (this.editingIndex !== null) {
        this.items.splice(this.editingIndex, 1, this.newItem);
        this.editingIndex = null;
      } else {
        this.items.push(this.newItem);
      }
      this.newItem = '';
    },
    editItem(index) {
      this.newItem = this.items[index];
      this.editingIndex = index;
    },
    deleteItem(index) {
      this.items.splice(index, 1);
    }
  }
};
</script>

<template>
  <div>
    <h2>CRUD Example</h2>
    <form @submit.prevent="addItem">
      <input type="text" v-model="newItem" placeholder="Add Item" required>
      <button type="submit" class = "btn btn-success" style="margin-left: 10px;">Add</button>
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
            <td> <button @click="editItem(index)" class="btn btn-warning" >Edit</button> <button @click="deleteItem(index)" class="btn btn-danger" >Delete</button></td>
           
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

