<template>
  <div class="container flex flex-auto gap-[30px] p-5">
    <!-- filters container -->
    <div class="flex flex-col gap-3">
      <h2>filters</h2>
    </div>
    <!-- catalog container -->
    <div class="grid">
      <div v-for="(product, index) in catalogState" :key="index">
        <div>
          {{ product.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useStore } from '@/store/store.ts'
  const store = useStore()
  const { catalogState } = storeToRefs(store)
</script>

<style scoped></style>
