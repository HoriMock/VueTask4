import Vue from "vue";
import Vuex from "vuex";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: "",
    email: "",
    password: "",
    user: null,
  },
  getters: {
    userName: (state) => state.userName,
    email: (state) => state.email,
    password: (state) => state.password,
  },
  mutations: {
    inputUserName(state, userName) {
      state.userName = userName;
    },
    inputEmail(state, email) {
      state.email = email;
    },
    inputPassword(state, password) {
      state.password = password;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    clearInputForm(state, empty) {
      state.userName = empty;
      state.email = empty;
      state.password = empty;
    },
  },
  actions: {
    inputUserName({ commit }, userName) {
      commit("inputUserName", userName);
    },
    inputEmail({ commit }, email) {
      commit("inputEmail", email);
    },
    inputPassword({ commit }, password) {
      commit("inputPassword", password);
    },
    resister({ commit }, { email, password, userName }) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredencial) => {
          updateProfile(auth.currentUser, {
            displayName: userName,
          });
          console.log("ユーザ登録完了");
          commit("setUser", userCredencial.user);
          commit("clearInputForm", "");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    login({ commit }, { email, password }) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredencial) => {
          console.log("ログイン成功");
          commit("setUser", userCredencial.user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
