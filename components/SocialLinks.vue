<script setup lang="ts">
defineProps({
  iconSize: {type: String, default: 'lg'},
});
</script>

<template>
  <nav class="social-menu">
    <ul class="flex items-center gap-3">
      <li><font-awesome-icon :size="iconSize" class="base-hovered cursor-pointer" icon="fa-brands fa-twitter" /></li>
      <li><font-awesome-icon :size="iconSize" class="base-hovered cursor-pointer" icon="fa-brands fa-reddit" /></li>
      <li><font-awesome-icon :size="iconSize" class="base-hovered cursor-pointer" icon="fa-brands fa-discord" /></li>
      <li><font-awesome-icon :size="iconSize" class="base-hovered cursor-pointer" icon="fa-brands fa-vk" /></li>
      <li><font-awesome-icon :size="iconSize" class="base-hovered cursor-pointer" icon="fa-brands fa-youtube" /></li>
    </ul>
  </nav>
</template>

<style scoped>

</style>