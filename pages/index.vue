<template>
  <div>
    <!-- url 파라미터는 memos의 마지막 index -->
    <NuxtLink
      :to="{ name: 'memo-id', params: { id: idNewMemo } }"
      @click.native="addMemo"
      >새로운 메모</NuxtLink
    >

    <ul>
      <li v-for="(memo, index) in $store.state.memos" v-bind:key="index">
        <NuxtLink :to="{ name: 'memo-id', params: { id: index } }">{{
          memo.title
        }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  computed: {
    idNewMemo() {
      return this.$store.getters.memosLength;
    },
  },
  methods: {
    addMemo() {
      console.log("addmemo");
      this.$store.commit("addMemo");
    },
  },
};
</script>
