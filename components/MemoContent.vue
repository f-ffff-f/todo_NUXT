<template>
  <div>
    <label for="content">content</label>
    <textarea
      id="content"
      type="text"
      v-model="content"
      placeholder="내용없음"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content:
        this.$store.state.folders[this.$route.params.folderName][
          this.$route.params.id
        ]?.content,
    };
  },
  props: ["propsdata"],
  watch: {
    content: function () {
      this.$store.commit("updateContent", {
        folderName: this.$route.params.folderName,
        content: this.content,
        id: this.$route.params.id,
      });
    },
  },
};
</script>

<style scoped>
textarea {
  width: 100%;
}
</style>
