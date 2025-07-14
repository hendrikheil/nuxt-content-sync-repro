<script setup lang="ts">
defineProps<{
  items: {
    image: string;
    alt?: string;
    title: string;
    description: string;
  }[];
}>();
</script>

<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <img :src="item.image" :alt="item.alt || item.title" />
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>
