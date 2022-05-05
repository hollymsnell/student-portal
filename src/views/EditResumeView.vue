<script>
import axios from "axios";
export default {
  data: function () {
    return {
      resume: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/students/${this.$route.params.id}`).then((response) => {
      this.student = response.data;
    });
  },
  methods: {
    editResume() {
      axios
        .patch(`/resumes/${this.resume.id}`, this.resume)
        .then((response) => {
          console.log(response);
          this.$router.push("/resumes");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>Edit Resume</h1>
    <form v-on:submit.prevent="editResume()">
      <ul>
        <li v-for="error in errors" v-bind:key="error" style="color: red">
          {{ error }}
        </li>
      </ul>
      <p>
        Experience Info:
        <input type="text" v-model="student.experience.job_title" />
      </p>
      <p>
        <input type="text" v-model="student.experience.start_date" />
      </p>
      <p>
        <input type="text" v-model="student.experience.end_date" />
      </p>
      <p>
        <input type="text" v-model="student.experience.details" />
      </p>
      <p>
        <input type="text" v-model="student.skills.skill_name" />
      </p>
      <p>
        Education Info:
        <input type="text" v-model="student.education.degree" />
      </p>

      <p>
        <input type="text" v-model="student.education.university_name" />
      </p>
      <p>
        <input type="text" v-model="student.education.details" />
      </p>
      <p>
        <input type="text" v-model="student.education.start_date" />
      </p>
      <p>
        <input type="text" v-model="student.education.end_date" />
      </p>
      <input type="submit" value="Edit" />
    </form>
  </div>
</template>
