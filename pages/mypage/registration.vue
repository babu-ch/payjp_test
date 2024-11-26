<script setup lang="ts">
import type {RegistrationBody} from "~/server/api/registration";

const form = reactive<RegistrationBody>({
  name: "テスト　タロウ",
  mail:"test@example.com",
  phone:"08000000000",
  bankName:"楽々銀行",
  branchName:"A支店",
  accountNumber:"1234567",
  accountType:"普通",
})

async function submit() {
  await useFetch("/api/registration", {
    method: "POST",
    body: JSON.stringify(form)
  })
  alert("登録完了！")
}
</script>

<template>
  <h2>基本情報</h2>
  <form @submit.prevent="submit">
    <!-- 出品者名 -->
    <label for="seller-name">出品者名</label>
    <input type="text" id="seller-name" name="seller_name" placeholder="例: 山田 太郎" required v-model="form.name">

    <!-- メールアドレス -->
    <label for="email">メールアドレス</label>
    <input type="email" id="email" name="email" placeholder="例: example@example.com" required v-model="form.mail">

    <!-- 電話番号 -->
    <label for="phone">電話番号</label>
    <input type="tel" id="phone" name="phone" placeholder="例: 090-1234-5678" required v-model="form.phone">

    <h2>口座情報</h2>
    <!-- 銀行名 -->
    <label for="bank-name">銀行名</label>
    <input type="text" id="bank-name" name="bank_name" placeholder="例: 三菱UFJ銀行" required v-model="form.bankName">

    <!-- 支店名 -->
    <label for="branch-name">支店名</label>
    <input type="text" id="branch-name" name="branch_name" placeholder="例: 新宿支店" required v-model="form.branchName">

    <!-- 口座番号 -->
    <label for="account-number">口座番号</label>
    <input type="text" id="account-number" name="account_number" placeholder="例: 12345678" required v-model="form.accountNumber">

    <!-- 口座種類 -->
    <label for="account-type">口座種類</label>
    <select id="account-type" name="account_type" required v-model="form.accountType">
      <option value="普通">普通</option>
      <option value="当座">当座</option>
    </select>

    <!-- 送信ボタン -->
    <button type="submit">登録する</button>
  </form>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
  color: #333;
  font-size: 1.5rem;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
}
input, select, button {
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
}
input:focus, select:focus {
  border-color: #007bff;
  outline: none;
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
button:hover {
  background-color: #0056b3;
}
.note {
  font-size: 0.9rem;
  color: #888;
}
</style>