<script>
import axios from "axios";
export default {
  data: function () {
    return {
      resume: {},
    };
  },
  created: function () {
    axios.get(`/students/${this.$route.params.id}`).then((response) => {
      this.resume = response.data;
    });
  },
  methods: {
    destroyResume() {
      axios.delete(`/resumes/${this.resume.id}`).then((response) => {
        console.log(response);
        this.$router.push("/resumes");
      });
    },
  },
};
</script>
<template>
  <div class="home">
    <div class="resume">
      <h1>Education Info</h1>
      <p>{{ student.educations.start_date }}</p>
      <p>{{ student.educations.end_date }}</p>
      <p>{{ student.educations.degree }}</p>
      <p>{{ student.educations.university_name }}</p>
      <p>{{ student.educations.details }}</p>
      <h1>Experience Info</h1>
      <p>{{ student.experiences.start_date }}</p>
      <p>{{ student.experiences.end_date }}</p>
      <p>{{ student.experiences.job_title }}</p>
      <p>{{ student.experiences.details }}</p>
      <h1>Skills</h1>
      <p>{{ student.skills.skill_name }}</p>
    </div>
  </div>
</template>
