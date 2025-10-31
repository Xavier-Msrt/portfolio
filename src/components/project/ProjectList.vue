<script setup lang="ts">
  import ProjectCard from "@/components/project/ProjectCard.vue";
  import projects from "@/assets/data.json";
</script>

<template>
  <h2 class="text-2xl font-bold mt-14 mb-4 ml-2 md:ml-0">Projects</h2>
    <div class="grid md:grid-cols-2 gap-10">
      <div v-for="project in projects" :key="project.name">
        <ProjectCard :project="project" />
      </div>
    </div>
</template>

