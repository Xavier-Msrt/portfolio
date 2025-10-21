<script setup>
  import ProjectCardView from "@/components/ProjectCardView.vue";

  const projects = [
    {
      name: 'Social Network',
      wip: true,
      description: 'Project for learning Angular and practice Spring boot',
      link: 'https://example.com/project1',
      picture: 'social-network',
      github: 'https://github.com/Xavier-Msrt/social-network'
    },
    {
      name: 'Ticky',
      wip: false,
      description: 'Small, lightweight Discord bot that helps you create and manage support tickets easily.',
      picture: 'discord-bot',
      github: 'https://github.com/Xavier-Msrt/ticky'
    },
    {
      name: 'Portfolio',
      wip: false,
      description: 'This website made with VueJS 3',
      link: '/',
      picture: 'portfolio',
      github: 'https://github.com/Xavier-Msrt/portfolio',
    },
  ]
</script>

<template>
  <h2 class="text-2xl font-bold mt-14 mb-4">Projects</h2>
    <div class="grid md:grid-cols-2 gap-10">
      <div v-for="project in projects" :key="project.name">
        <ProjectCardView :project="project" />
      </div>
    </div>
</template>

