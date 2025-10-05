<script setup>
  const age = new Date().getFullYear() - 2003;
</script>

<template>
  <div class="md:flex md:justify-center ">
    <div class="flex justify-center mb-10 md:w-1/3 md:mb-0">
      <img
          src="../assets/images/profils.png"
          alt="Profile"
          class="w-46 h-46 rounded-full border-4 border-gray-300 object-cover"
      >
    </div>
    <div class="text-center md:text-left md:w-2/3 p-2 break-normal">
      <h1 class="text-2xl font-bold mb-4">Junior Software Developer</h1>
      <p>Hi, I’m Xavier Massart (~{{age}} years old). I’m passionate about technology, curious about the world, and always eager to learn something new. I enjoy building meaningful projects, experimenting with new ideas, and turning challenges into opportunities to grow.</p>
      <div class="mt-6 flex justify-center gap-4 md:justify-start">
        <a href="https://github.com/Xavier-Msrt" class="flex items-center gap-2">
          <img
              src="@/assets/images/github-mark-white.svg"
              alt="github logo"
              class="w-6 h-6"
          /> Github
        </a>
        <a href="https://www.linkedin.com/in/xaviermassart/" class="flex items-center gap-2">
          <img
              src="@/assets/images/linkedin-mark-white.svg"
              alt="github logo"
              class="w-6 h-6"
          /> Linkedin
        </a>
      </div>
    </div>
  </div>
</template>
