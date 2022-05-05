<script>
import axios from "axios";
export default {
  data: function () {
    return {
      capstone: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/students/${this.$route.params.id}`).then((response) => {
      this.student = response.data;
    });
  },
  methods: {
    editCapstone() {
      axios
        .patch(`students/${this.$route.params.id}`, this.student)
        .then((response) => {
          console.log(response);
          this.$router.push("/students");
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
    <h1>Edit Capstone</h1>
    <form v-on:submit.prevent="editCapstone()">
      <ul>
        <li v-for="error in errors" v-bind:key="error" style="color: red">
          {{ error }}
        </li>
      </ul>
      <p>
        Experience Info:
        <input type="text" v-model="student.capstone.name" />
      </p>
      <p>
        <input type="text" v-model="student.capstone.description" />
      </p>
      <p>
        <input type="text" v-model="student.capstone.url" />
      </p>
      <input type="submit" value="Edit" />
    </form>
  </div>
</template>
