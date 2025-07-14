<script setup lang="ts">
defineProps<{
  image: {
    src: string;
    alt?: string;
  };
  image_url: string;
  img: string;
}>();
</script>

<template>
    <img :src="image.src" :alt="image.alt || ''" />
    <img :src="image_url" />
    <img :src="img" />
</template>
