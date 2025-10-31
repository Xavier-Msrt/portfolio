<script setup lang="ts">
  import Tag from "@/components/Tag.vue";

  defineProps(['project'])

  const getImageUrl = (imageName) => {
    return new URL(`../../assets/images/${imageName}.png`, import.meta.url).href;
  };

</script>

<template>
  <div class="bg-neutral-700 rounded-lg p-8 mx-4 md:mx-0 h-full flex justify-around flex-col" :class="{'opacity-70': project.wip}">
    <div>
      <img :src="getImageUrl(project.picture)" alt="ProjectInterface picture" class="mb-4">
      <span class="text-xl font-bold mb-4">{{project.name}} {{project.wip ? '(Work in progress)' : ''}}</span>
      <p class="mt-4">{{project.description}}</p>
    </div>
    <div>
      <span class="flex justify-between mt-4 pt-4">
        <div class="flex flex-row gap-4">
          <a :href="project.github" class="flex gap-2">
            <img src="../../assets/images/github-mark-white.svg" alt="github" class="w-6 h-6">
          </a>
          <span v-if="project.link">
            <a :href="project.link" class="flex gap-2 hover:font-bold transition-all"
               :class="{ 'pointer-events-none cursor-default': project.wip }">↗ Demo</a>
          </span>
        </div>
        <div class="flex gap-2">
          <Tag v-for="tag in project.tags" :key="tag.name" :name="tag.name" :color="tag.color"/>
        </div>
      </span>
    </div>
  </div>
</template>
