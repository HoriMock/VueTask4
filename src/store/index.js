import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: "",
    email: "",
    password: "",
    user: null,
    loginUserData: [],
  },
  getters: {
    userName: (state) => state.userName,
    email: (state) => state.email,
    password: (state) => state.password,
    data: (state) => state.loginUserData,
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
    setData(state, documentData) {
      state.loginUserData = documentData;
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
          router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getLoginUserData({ commit }) {
      try {
        const db = getFirestore();
        const auth = getAuth();
        const q = query(
          collection(db, "users"),
          where("uid", "==", auth.currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        const array = querySnapshot.map((doc) => {
          return array.push(doc.data());
        });
        commit("setData", array);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
