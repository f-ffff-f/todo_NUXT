<template>
  <div>
    <label for="content">content</label>
    <textarea id="content" type="text" v-model="content" />
  </div>
</template>

<script>
export default {
  data() {
    return { content: this.$store.state.memos[0].content };
  },
  props: ["propsdata"],
  watch: {
    content: function () {
      this.$store.commit("updateContent", {
        content: this.content,
        id: this.propsdata,
      });
    },
  },
};
</script>
