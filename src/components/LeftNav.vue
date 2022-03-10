<template>
  <nav>
    <router-link class="nav-item" to="/">
      <div class="icon"><HomeOutlined /></div>
      <div class="text">Home</div>
    </router-link>
    <router-link class="nav-item" to="/billing">
      <div class="icon"><CreditCardOutlined /></div>
      <div class="text">Billing</div>
    </router-link>
  </nav>
</template>

<script>
import { CreditCardOutlined, HomeOutlined } from "@ant-design/icons-vue";

export default {
  name: "LeftNav",
  components: {
    CreditCardOutlined,
    HomeOutlined,
  },
};
</script>

<style lang="scss">
nav {
  background-color: #fff;
  left: 0;
  top: 0;
  position: fixed;
  width: 266px;
  border-right: 1px solid var(--borderColor);
  height: 100%;
  padding: 15px 18px;
  padding-left: 31px;
  padding-top: 94px;
  z-index: 4;

  .nav-item {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #fff;
    transition: background-color 0.2s ease-in-out;
    margin-bottom: 2px;

    .text {
      color: var(--darkGrey);
      font-size: 16px;
    }

    .icon {
      display: flex;
      align-items: center;
      color: var(--darkGrey);
      width: 30px;
      text-align: center;
      margin-right: 13px;

      .anticon svg {
        height: 100%;
        width: 100%;
      }

      > span {
        height: 22px;
        width: 30px;
      }
    }

    &.router-link-active {
      background-color: var(--blue);

      .text,
      .icon {
        color: #fff;
      }
    }
  }

  @media (max-width: 1055px) {
    padding-left: 0;
    padding-right: 0;
    width: 65px;

    .nav-item {
      border-radius: 0;
      width: 100%;
      justify-content: center;
      padding: 12px 0;

      .text {
        display: none;
      }

      .icon {
        margin-right: 0;
      }
    }
  }
}
</style>
