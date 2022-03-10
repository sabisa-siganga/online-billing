<template>
  <div class="accounts">
    <div v-for="(account, index) of allAccounts" :key="index">
      <AccountCard :account="account" :index="index" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AccountCard from "./AccountCard.vue";

export default {
  name: "AccountCards",
  components: {
    AccountCard,
  },
  computed: {
    ...mapGetters("accounts", {
      allAccounts: "allAccounts",
    }),
  },
  created() {
    this.$store.dispatch("accounts/pickSelectedAccount");
  },
};
</script>

<style lang="scss" scoped>
.accounts {
  padding: 15px 30px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--borderColor);

  > div {
    padding: 6px 8px;
  }
}
</style>
