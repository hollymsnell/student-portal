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
