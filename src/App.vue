<template>
  <NavHeader />
  <LeftNav />
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import NavHeader from "./components/NavHeader.vue";
import LeftNav from "./components/LeftNav.vue";

export default {
  name: "App",
  components: {
    NavHeader,
    LeftNav,
  },
  created() {
    document.title = "bOnline Billing";
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap");

:root {
  --lightBlue: #d1eaff;
  --skyBlue: #4ca5ef;
  --blue: #1f8ceb;
  --black: #1e1b2d;
  --lightGreen: #e7fbf8;
  --green: #18c09f;
  --smokedWhite: #f8f7fc;
  --lightGrey: #f7f8fa;
  --grey: #9c9fb6;
  --darkGrey: #76767c;
  --borderColor: #dbd9d9;
  --shadow: 1px 2px 5px rgba(0, 0, 0, 0.11);
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--black);
  font-weight: 400;
  background-color: var(--lightGrey);

  > main {
    padding-left: 266px;
    padding-top: 70px;
    min-width: 680px;
    padding-bottom: 80px;

    @media (max-width: 1055px) {
      padding-left: 65px;
    }
  }
}

button {
  cursor: pointer;
}

.card {
  box-shadow: var(--shadow);
  border-radius: 7px;
  background-color: #fff;
  border: 1px solid var(--borderColor);
}
</style>
