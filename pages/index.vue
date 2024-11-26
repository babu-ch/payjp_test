<script setup lang="ts">
const products = [
  {
    id: 1,
    title: "商品名 1",
    price: 2000,
    description: "短い説明がここに入ります。",
    image: "https://via.placeholder.com/250x200"
  },
  {
    id: 2,
    title: "商品名 2",
    price: 3500,
    description: "短い説明がここに入ります。",
    image: "https://via.placeholder.com/250x200"
  },
  {
    id: 3,
    title: "商品名 3",
    price: 1200,
    description: "短い説明がここに入ります。",
    image: "https://via.placeholder.com/250x200"
  },
  {
    id: 4,
    title: "商品名 4",
    price: 1000,
    description: "短い説明がここに入ります。",
    image: "https://via.placeholder.com/250x200"
  }
];
</script>

<template>
    <div class="product-list">
      <div class="product" v-for="product in products" :key="product.id">
        <img :src="product.image" alt="Product">
        <div class="product-info">
          <p class="product-title">{{product.title}}</p>
          <p class="product-price">¥{{product.price.toLocaleString()}}</p>
          <p class="product-description">{{product.description}}</p>
        </div>
      </div>
    </div>
</template>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
.product {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  transition: box-shadow 0.2s ease;
}
.product:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.product img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.product-info {
  padding: 0.5rem 1rem;
}
.product-title {
  font-size: 1.1rem;
  margin: 0 0 0.5rem;
  font-weight: bold;
}
.product-price {
  color: #e63946;
  font-size: 1.2rem;
  margin: 0;
}
.product-description {
  color: #555;
  font-size: 0.9rem;
  margin: 0.5rem 0;
}
</style>