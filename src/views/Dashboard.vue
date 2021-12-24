<template>
  <div>
    <p class="user-name">{{ user.displayName }}さんようこそ！！</p>
    <p class="wallet" v-for="data in loginUserData" :key="data.id">
      残高：{{ data.wallet }}
    </p>
    <!-- <button @click="getUserData">データの中確認</button> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch("getLoginUserData");
  },
  computed: {
    ...mapState(["user", "loginUserData"]),
  },
  methods: {
    setUser() {
      this.$store.dispatch("setUser", this.user);
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
</style>
