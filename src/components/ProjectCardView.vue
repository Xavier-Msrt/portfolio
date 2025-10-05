<script setup xmlns="http://www.w3.org/1999/html">
  defineProps(['project'])

  const getImageUrl = (imageName) => {
    return new URL(`../assets/images/${imageName}.png`, import.meta.url).href;
  };

</script>

<template>
  <div class="bg-neutral-700 rounded-lg p-5 h-full flex justify-around flex-col" :class="{'opacity-70': project.wip}">
    <div>
      <img :src="getImageUrl(project.picture)" alt="Project picture" class="mb-4">
      <span class="text-xl font-bold mb-4">{{project.name}} {{project.wip ? '(Work in progress)' : ''}}</span>
      <p>{{project.description}}</p>
    </div>
    <div>
      <span class="flex flex-row gap-4">
        <span v-if="typeof project.github === 'object' && !Array.isArray(project.github)" class="flex flex-row gap-4">
          <span v-for="(link, key) in project.github" :key="key">
            <a :href="link" class="flex gap-2">
              <img src="@/assets/images/github-mark-white.svg" alt="github" class="w-6 h-6">
              <span class="hover:font-bold transition-all">{{ key }}</span>
            </a>
          </span>
        </span>
        <span v-else>
          <a :href="project.github" class="flex gap-2">
            <img src="@/assets/images/github-mark-white.svg" alt="github" class="w-6 h-6">
          </a>
        </span>
        <span v-if="project.link">
          <a :href="project.link" class="flex gap-2 hover:font-bold transition-all"
             :class="{ 'pointer-events-none cursor-default': project.wip }">↗ Demo</a>
        </span>
      </span>
    </div>
  </div>
</template>
