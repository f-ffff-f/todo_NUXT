<template>
  <div>
    <MemoTitle v-bind:propsdata="param" />
    <MemoContent v-bind:propsdata="param" />
  </div>
</template>

<script>
import MemoTitle from "~/components/MemoTitle.vue";
import MemoContent from "~/components/MemoContent.vue";

export default {
  components: {
    MemoTitle,
    MemoContent,
  },
  data() {
    return { param: "" };
  },
  mounted() {
    this.param = this.$route.params.id;
  },
};
</script>
