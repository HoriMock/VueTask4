<template>
  <div>
    <h2>新規登録画面</h2>
    <label for="userName">ユーザ名</label>
    <input
      id="userName"
      type="text"
      placeholder="userName"
      v-model="userName"
    /><br />
    <label for="email">メールアドレス</label>
    <input id="email" type="email" v-model="email" placeholder="E-mail" /><br />
    <label for="password">パスワード</label>
    <input
      id="password"
      type="password"
      v-model="password"
      placeholder="Password"
    /><br /><br />
    <button @click="resister">新規登録</button><br />
    <router-link to="/login">ログインはコチラから</router-link>
  </div>
</template>

<script>
import axios from "../axios-auth";

export default {
  data() {
    return {
      userName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    resister() {
      axios
        .post("accounts:signUp?key=AIzaSyD5xHB5xjDX8-t5p5M-mHFBOptlcezgf_M", {
          displayName: this.userName,
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        })
        .then(() => {
          console.log("ユーザ登録完了");
          this.userName = "";
          this.email = "";
          this.password = "";
        })
        .catch((error) => {
          console.log(error);
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
