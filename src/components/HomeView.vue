<template>
  <div class="container mx-auto md:w-4/6 my-10">
    <div class="mt-10 radius-lg">
      <ProfileView />
    </div>
    <div class="mt-14 mx-5 md:mx-20">
      <ProjectsView />
    </div>
  </div>
</template>
<script setup lang="ts">
import ProfileView from "@/components/ProfileView.vue";
import ProjectsView from "@/components/ProjectsView.vue";
</script>