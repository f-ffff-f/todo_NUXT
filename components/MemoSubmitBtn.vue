<template>
  <button @click="goBack">저장</button>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
button {
  width: 60%;
}
</style>
