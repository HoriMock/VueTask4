<template>
  <div>
    <p class="user-name" v-if="user">{{ user.displayName }}さんようこそ！！</p>
    <p class="wallet" v-for="data in loginUserData" :key="data.id">
      残高：{{ data.wallet }}
    </p>
    <button @click="logout">ログアウト</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch("getLoginUserData");
    this.$store.dispatch("onAuth");
  },
  computed: {
    ...mapState(["user", "loginUserData", "uid"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
p {
  display: inline-block;
}
.user-name {
  margin-right: 200px;
}
.wallet {
  margin-right: 10px;
}
</style>
