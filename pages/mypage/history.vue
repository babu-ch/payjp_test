<script setup lang="ts">
const {data} = await useFetch("/api/history")
</script>

<template>
  <h1>取引履歴</h1>
  <div class="table-container">
    <table>
      <thead>
      <tr>
        <th>取引日</th>
        <th>金額</th>
      </tr>
      </thead>
      <tbody v-if="data?.data">
      <tr v-for="history in data.data">
        <td>{{(new Date(history.created_at*1000)).toLocaleDateString()}}</td>
        <td class="amount positive">¥{{history.amount}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}

.table-container {
  overflow-x: auto;
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f5f5f5;
}

.amount {
  color: #e74c3c;
}

.amount.positive {
  color: #2ecc71;
}
</style>