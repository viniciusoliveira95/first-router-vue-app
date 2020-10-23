export default {
  data() {
    return {
      data: null,
      loading: true,
    };
  },
  methods: {
    fetchData(url) {
      this.loading = true;
      this.data = null;

      setTimeout(() => {
        fetch(`http://localhost:3000${url}`)
          .then((r) => r.json())
          .then((r) => (this.data = r))
          .finally(() => this.loading = false);
      }, 1500);
    },
  }
}