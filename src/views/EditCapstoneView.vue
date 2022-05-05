<script>
import axios from "axios";
export default {
  data: function () {
    return {
      capstone: {},
      errors:[],
    };
  },
  created: function () {
    axios.get(`students/${this.$route.params.id}`).then((response)=>{
      this.student = response.data;
    });
  },\methods: {
    editCapstone() {
      axios.patch(`students/${this.$route.params.id}`,this.student)
      .then ((resonse)=>{
        console.log(response);
        this.$router.push("/students");
      })
      .catch((error)=>{
        this.errors = reeor.response.data.errors;
        console.log(this.errors);
      });
    },
  },
};
</script>
