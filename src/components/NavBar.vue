<script setup>
import { router } from '@/router'
import { useRouter } from 'vue-router'

const { push, params } = useRouter()

const goToHome = () => {
  router.push({ name: 'home' })
}
</script>
<template>
  <div class="navbar bg-base-100">
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li>
          <h1 @click="goToHome()">Furniture catalog</h1>
          <RouterLink active-class="btn-active" to="/">Home</RouterLink>
          <RouterLink active-class="btn-active" to="/about">About</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
