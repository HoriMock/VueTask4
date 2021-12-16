<template>
  <div>
    <h2>ログイン画面</h2>
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
    <button @click="login">ログイン</button><br />
    <router-link to="/resister">新規登録はコチラから</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["email", "password"]),
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
    inputEmail() {
      this.$store.dispatch("inputEmail", this.email);
    },
    inputPassword() {
      this.$store.dispatch("inputPassword", this.password);
    },
    login() {
      this.$store.dispatch("login", {
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
