<template>
  <div
    :class="['account-card', account.selected ? 'selected' : '']"
    @click="selectAccount(index)"
  >
    <div class="title">
      <span
        class="text"
        :title="`${account.first_name} ${account.last_name}`"
        >{{ `${account.first_name} ${account.last_name}` }}</span
      >
      <span :class="['status', String(account.account_status).toLowerCase()]">{{
        account.account_status
      }}</span>
    </div>
    <div class="account-id">Account ID: {{ account.account_id }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AccountCard",
  props: {
    index: Number,
    account: Object,
  },
  methods: {
    ...mapActions("accounts", ["selectAccount"]),
  },
};
</script>

<style lang="scss" scoped>
.account-card {
  padding: 15px 20px;
  background-color: #fff;
  border: 1px solid var(--borderColor);
  border-radius: 7px;
  width: 250px;
  box-shadow: var(--shadow);
  cursor: pointer;

  .title {
    font-size: 18px;
    font-weight: 500;
    color: var(--blue);
    margin-bottom: 7px;
    display: flex;
    align-items: center;
  }

  .text {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .status {
    max-width: 87px;
    font-size: 12px;
    margin-left: 12px;
    border-radius: 15px;
    padding: 2px 13px;
    min-width: 55px;
    text-transform: capitalize;
    text-align: center;

    &.live {
      color: var(--green);
      background-color: var(--lightGreen);
      border: 1px solid #dcf5f1;
    }

    &.suspended {
      color: #da3f46;
      background-color: #f7d2d4;
      border: 1px solid #fac8cb;
    }

    &.cancelled {
      color: #b92aff;
      background-color: #edd9f7;
      border: 1px solid #eac5fb;
    }
  }

  &.selected {
    background-color: var(--lightBlue);
    border: 1px solid var(--blue);

    .status {
      &.live,
      &.suspended,
      &.cancelled {
        background-color: #fff;
        border-color: #fff;
      }
    }
  }

  .account-id {
    font-size: 16px;
    font-weight: 400;
    color: #353535;
  }
}
</style>
