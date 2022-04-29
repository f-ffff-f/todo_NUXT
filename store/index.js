export const state = () => ({
  folders: {},
});

export const mutations = {
  addFolder(state, folderName) {
    state.folders = { ...state.folders, [folderName]: [] };
  },
  addMemo(state, folderName) {
    state.folders[folderName].push({ title: "", content: "" });
  },
  deleteMemo(state, { folderName, index }) {
    state.folders[folderName].splice(index, 1);
  },
  updateTitle(state, { folderName, title, id }) {
    state.folders[folderName][id].title = title;
  },
  updateContent(state, { folderName, content, id }) {
    state.folders[folderName][id].content = content;
  },
};

export const actions = {};

export const getters = {
  folders: (state) => {
    return state.folders;
  },
};
