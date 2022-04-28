<template>
  <div>
    <label for="title">title</label>
    <input id="title" type="text" v-model="title" />
  </div>
</template>

<script>
export default {
  data() {
    return { title: "" };
  },
  mounted() {
    // 여기 고쳐야 돼
    const param = this.$route.params.id;
    // console.log(this.$store.state.memos[param].title);
    const title = this.$store.state.memos[param].title;
    console.log(title);
  },
  watch: {
    title: function () {
      this.$store.commit("updateTitle", {
        title: this.title,
        id: this.param,
      });
    },
  },
};
</script>
