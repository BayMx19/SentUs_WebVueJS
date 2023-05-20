import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      items: []
    }
  },
  mounted() {
    axios.get('/loginApi', {
      headers: {
        Authorization: `Bearer ${this.$route.params.token}`
      }
    })
    .then(response => {
      this.username = response.data.user.name;
      this.items = response.data.items;
    })
    .catch(error => {
      console.error(error);
    });
  }
}