<template>
  <div>
    <MemoTitle />
    <MemoContent />
    <MemoSubmitBtn />
  </div>
</template>

<script>
import MemoTitle from "~/components/MemoTitle.vue";
import MemoContent from "~/components/MemoContent.vue";
import MemoSubmitBtn from "~/components/MemoSubmitBtn.vue";

export default {
  components: {
    MemoTitle,
    MemoContent,
    MemoSubmitBtn,
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  margin: 10px;
}
</style>
