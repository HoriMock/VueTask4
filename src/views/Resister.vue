<template>
  <div>
    <h2>新規登録画面</h2>
    <label for="userName">ユーザ名</label>
    <input
      id="userName"
      type="text"
      placeholder="userName"
      v-model="userName"
      @change="inputUserName"
    /><br />
    <label for="email">メールアドレス</label>
    <input
      id="email"
      type="email"
      v-model="email"
      placeholder="E-mail"
      @change="inputEmail"
    /><br />
    <label for="password">パスワード</label>
    <input
      id="password"
      type="password"
      v-model="password"
      placeholder="Password"
      @change="inputPassword"
    /><br /><br />
    <button @click="resister">新規登録</button><br />
    <router-link to="/login">ログインはコチラから</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["userName", "email", "password"]),
    userName: {
      get() {
        return this.$store.getters.userName;
      },
      set(value) {
        this.$store.dispatch("inputUserName", value);
      },
    },
    email: {
      get() {
        return this.$store.getters.email;
      },
      set(value) {
        this.$store.dispatch("inputEmail", value);
      },
    },
    password: {
      get() {
        return this.$store.getters.password;
      },
      set(value) {
        this.$store.dispatch("inputPassword", value);
      },
    },
  },
  methods: {
    inputUserName() {
      this.$store.dispatch("inputUserName", this.userName);
    },
    inputEmail() {
      this.$store.dispatch("inputEmail", this.email);
    },
    inputPassword() {
      this.$store.dispatch("inputPassword", this.password);
    },
    resister() {
      this.$store.dispatch("resister", {
        userName: this.userName,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
#userName {
  margin-left: 46px;
}
#password {
  margin-left: 30px;
}
</style>
