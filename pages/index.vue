<template>
  <div class="flex-container">
    <div
      v-for="(value, folderName) in folders"
      :key="folderName"
      class="folder"
    >
      <h3>{{ folderName }}</h3>
      <ul>
        <li
          v-for="(memo, index) in $store.state.folders[folderName]"
          v-bind:key="index"
        >
          <NuxtLink
            :to="{
              name: 'memo-id',
              params: { folderName: folderName, id: index },
            }"
            >{{ memo.title ? memo.title : "제목없음" }}</NuxtLink
          >
          <button @click="deleteMemo(folderName, index)">x</button>
        </li>
      </ul>
      <button class="memo-btn">
        <NuxtLink
          :to="{
            name: 'memo-id',
            params: {
              folderName: folderName,
              id: $store.state.folders[folderName].length,
            },
          }"
          @click.native="addMemo(folderName)"
          >새로운 메모</NuxtLink
        >
      </button>
    </div>
    <form v-on:submit.prevent="addFolder">
      <div>
        <input
          id="foldername"
          v-model="form.folderName"
          type="text"
          ref="foldername"
        />
        <button type="submit">새 폴더 추가</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      form: {
        folderName: "",
      },
    };
  },
  computed: {
    folders() {
      return this.$store.getters.folders;
    },
  },
  methods: {
    addFolder() {
      if (!this.form.folderName === "") {
        //   if (!this.$refs.foldername.value) {
        window.alert("폴더 이름을 입력하세요");
        return;
      }
      this.$store.commit("addFolder", this.$refs.foldername.value);
      this.$refs.foldername.value = "";
    },
    addMemo(folderName) {
      this.$store.commit("addMemo", folderName);
    },
    deleteMemo(folderName, index) {
      console.log("cliocke");
      this.$store.commit("deleteMemo", { folderName, index });
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
  margin-top: 20px;
}
ul li {
  margin-top: 10px;
}
a {
  text-decoration: none;
  color: inherit;
}
h3 {
  margin: 0;
}
.memo-btn {
  margin-top: 30px;
}
.flex-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 100px;
}
.folder {
  margin-right: 100px;
  margin-bottom: 50px;
}
</style>
