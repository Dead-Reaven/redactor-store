<template>
  <div class="flex min-h-screen flex-col bg-blue-300">
    <header class="h-[90px] bg-slate-300">
      <nav class="flex h-full items-center justify-center gap-3">
        <RouterLink
          v-for="link in [
            { title: 'Home', href: '/' },
            { title: 'Catalog', href: '/catalog' },
          ]"
          :to="link.href"
          class=""
          active-class="text-red-300"
          >{{ link.title }}</RouterLink
        >
      </nav>
    </header>
    <slot></slot>
    <footer class="h-[90px] bg-green-300"></footer>
  </div>
</template>

<script setup></script>
