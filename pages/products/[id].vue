<script setup lang="ts">

const route = useRoute();
const productId = route.params.id;  // idを取得

const price = ref(2000);

async function buy() {
  const {data} = await useFetch("/api/buy", {
    method: "POST",
    body: JSON.stringify({
      token: token.value,
      productId,
      price: price.value
    })
  })
  if (data.value?.success) {
    alert("購入完了！");
  } else {
    alert("購入失敗！");
  }
}

useHead({
  script: [
    {
      type: "text/javascript",
      src: "https://js.pay.jp/v2/pay.js"
    }
  ]
})

const payjp = ref<Payjp.PayjpInstance>()
const cardElement = ref<{mount:(arg:string) => void}>();
onMounted(() => {
  const config = useRuntimeConfig()
  payjp.value = Payjp(config.public.payjpPublicKey)
  // elementsを取得します。ページ内に複数フォームを用意する場合は複数取得してください
  const elements = payjp.value.elements()

  // element(入力フォームの単位)を生成します
  cardElement.value = elements.create('card')

  // elementをDOM上に配置します
  cardElement.value.mount('#v2-demo')
})

const token = ref("");
function onSubmit() {
  payjp.value!.createToken(cardElement.value).then(function(r) {
    console.log(`token result: ${r.id}`)
    token.value = r.id;
  })
}
</script>

<template>
  <div class="product-details">
    <div class="product-image">
      <img src="https://via.placeholder.com/400x300" alt="商品名 1">
    </div>
    <div class="product-info">
      <h2 class="product-title">商品名 1</h2>
      <p class="product-price"><input type="number" v-model="price">円</p>
      <p class="product-description">
        この商品は非常に便利で、日常生活に欠かせないものです。お早めにお買い求めください。
      </p>
      <div style="margin-bottom: 10px">
        <p>カード情報を登録</p>
        <div id="v2-demo" class="payjs-outer"></div>
        <button @click="onSubmit">トークン作成</button>
      </div>
      <a href="#" class="buy-now" @click.prevent="buy">今すぐ購入</a>
    </div>
  </div>
</template>

<style scoped>
.product-details {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: flex-start;
}
.product-image {
  flex: 1 1 300px;
}
.product-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.product-info {
  flex: 2 1 400px;
}
.product-title {
  font-size: 1.8rem;
  margin: 0 0 1rem;
  font-weight: bold;
}
.product-price {
  font-size: 1.5rem;
  color: #e63946;
  margin: 0 0 1rem;
}
.product-description {
  font-size: 1rem;
  color: #555;
  margin: 0 0 1rem;
}
.buy-now {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1rem;
  transition: background-color 0.2s ease;
}
.buy-now:hover {
  background-color: #0056b3;
}
</style>