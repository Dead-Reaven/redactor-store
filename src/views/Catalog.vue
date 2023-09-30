<template>
	<div class="flex-auto"></div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/store.ts'
const state = useStore()
state.showState()
</script>

<style scoped></style>
