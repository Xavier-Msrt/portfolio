<script setup>
  import ProjectCardView from "@/components/ProjectCardView.vue";

  const projects = [
    {
      name: 'Social Network',
      wip: true,
      description: 'Project for learning Angular and practice Spring boot',
      link: 'https://example.com/project1',
      picture: 'social-network',
      github: {
        frontend: 'https://github.com/Xavier-Msrt/social-network-frontend',
        backend: 'https://github.com/Xavier-Msrt/social-network-backend',
      },
    },
    {
      name: 'Portfolio',
      wip: false,
      description: 'This website made with VueJS 3',
      link: '/',
      picture: 'portfolio',
      github: 'https://github.com/Xavier-Msrt/portfolio',
    }
  ]
</script>

<template>
  <h2 class="text-2xl font-bold mb-4">Projects</h2>
    <div class="grid md:grid-cols-2 gap-10">
      <div v-for="project in projects" :key="project.name" class="h-120">
        <ProjectCardView :project="project" />
      </div>
    </div>
</template>

