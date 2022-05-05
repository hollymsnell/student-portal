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
