<script>
import axios from axios
export default {
  data:function () {
    return {
      capstone: {},
    };
  },
  created: function() {
    axios.get(`/students/${this.$route.params.id}`).then((response)=>{
      this.capstone = response.data;
    });
  },

  };
</script>

<template>
  <div class="home">
    <div class="capstone">
       <h1>Capstone Info</h1>
       <h2>Capstone Name: {{ student.capstone.name }}</h2>
       <p>Capstone Description: {{ student.capstone.description }}</p>
       <p>Capstone URL: {{ student.capstone.url }}</p>
       <img v-bind:src="student.capstone.screenshot" v-bind:alt="student.capstone.name" />
    </div>

    <div>
      <router-link to="/students">Back to Main Page</router-link>
      <router-link v-bind:to="`/students/${student.id}./edit`">Edit Capstone</router-link>
    </div>
  </div>
</template>

<style>
.capstone {
  border-style: inset;
  color: #000E1B;
  padding: 30px;
  background-color: lightgray;
  font-family: 'Quicksand', sans-serif;
}
</style>
