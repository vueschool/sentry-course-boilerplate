<template>
  <div>
    <nav class="flex mb-10 gap-4 bg-gray-500 p-5 text-white">
      <router-link :to="{ name: 'Home' }"> Home </router-link>
      <router-link :to="{ name: 'About' }"> About </router-link>
    </nav>
  </div>
</template>
