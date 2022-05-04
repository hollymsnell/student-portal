<script>
import axios from "axios";
export default {
  data: function () {
    return {
      capstone: {},
    };
  },
  created: function () {
    axios.get(`/students/${this.$route.params.id}`).then((response) => {
      this.post = response.data;
    });
  },
};
</script>

<template>
  <div class="home">
    <div class="capstone">
      <h1>Capstone Info</h1>
      <h2>Capstone Name: {{ student.capstone[0].name }}</h2>
      <p>Capstone Description: {{ student.capstone[0].description }}</p>
      <p>Capstone URL: {{ student.capstone[0].url }}</p>
      <img v-bind:src="student.capstone[0].screenshot" v-bind:alt="student.capstone[0].name" />
      <div>
        <router-link to="/students">Back to Main Page</router-link>
        <router-link v-bind:to="`/students/${student.id}./edit`">Edit Capstone</router-link>
      </div>
    </div>
  </div>
</template>

<style>
/* .capstone {
  border-style: inset;
  text-align: left;
} */
</style>
