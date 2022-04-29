<template>
  <div>
    <label for="title">title</label>
    <input id="title" type="text" v-model="title" placeholder="제목없음" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title:
        this.$store.state.folders[this.$route.params.folderName][
          this.$route.params.id
        ]?.title,
    };
  },
  watch: {
    title: function () {
      this.$store.commit("updateTitle", {
        folderName: this.$route.params.folderName,
        title: this.title,
        id: this.$route.params.id,
      });
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
}
</style>
