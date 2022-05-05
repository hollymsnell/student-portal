<script>
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      editResumeParams: {},
      resumes: [],
      currentResume: {},
    };
  },
  created: function () {
    this.indexResumes();
  },
  methods: {
    showResume(resume) {
      this.currentResume = resume;
      this.editResumeParams = resume;
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>All Resumes</h1>
  </div>
  <div v-for="resume in resumes" v-bind:key="resume.id">
    <button v-on:click="showResume(resume)">Show Resume</button>
  </div>
</template>

<style></style>
