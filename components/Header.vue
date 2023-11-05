<script setup lang="ts">
import PageNavigation from "~/components/PageNavigation.vue";
import SocialLinks from "~/components/SocialLinks.vue";
</script>

<template>
  <header class="fixed h-28 top-0 left-0 w-full z-40">
    <div class="flex relative items-center gap-10 h-full">
      <a href="#main" class="logo absolute z-1 w-24 h-32 top-0 left-8 p-4 bg-gray-800"/>
      <div class="main-menu flex items-center py-4 pl-44 pr-12 hidden lg:flex">
        <PageNavigation/>
        <SocialLinks/>
      </div>
      <div class="header-button absolute cursor-pointer py-4 right-0 bg-gray-800">
        <a href="#" class="flex gap-2">
          <span class="flex items-center">
            <font-awesome-icon size="lg" icon="fa-brands fa-steam" />
          </span>
          <span class="base-hovered text-xl uppercase">Wishlist us</span>
        </a>
      </div>
    </div>
  </header>
</template>