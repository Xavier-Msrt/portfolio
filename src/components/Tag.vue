<script setup lang="ts">
import {TagInterface} from "@/types/TagInterface.ts";
import {computed} from "vue";

const props = defineProps<TagInterface>()

const colorClasses = {
  'red': 'bg-red-500',
  'blue': 'bg-blue-500',
  'green': 'bg-green-500',
  'yellow': 'bg-yellow-500',
  'purple': 'bg-purple-500',
  'pink': 'bg-pink-500',
  'indigo': 'bg-indigo-500',
  'orange': 'bg-orange-500'
}

const color = computed(() => colorClasses[props.color] || 'bg-gray-500')
</script>

<template>
  <span :class="color" class="px-2 py-1 rounded-xl font-bold">{{props.name}}</span>
</template>
