export const state = () => ({
  memos: [],
});

export const mutations = {
  addMemo(state) {
    state.memos.push({ title: "제목없음", content: "내용없음" });
  },
  updateTitle(state, { title, id }) {
    state.memos[id].title = title;
  },
  updateContent(state, { content, id }) {
    state.memos[id].content = content;
  },
};

export const actions = {};

export const getters = {
  memosLength: (state) => {
    return state.memos.length;
  },
};
