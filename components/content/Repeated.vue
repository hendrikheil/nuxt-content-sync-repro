<script setup lang="ts">
defineProps<{
  elements: {
    prefix: string;
    content: string;
  }[];
}>();
</script>

<template>
    <ul>
        <li v-for="element in elements">
            {{ element.prefix }}: {{ element.content }}
        </li>
    </ul>
</template>
