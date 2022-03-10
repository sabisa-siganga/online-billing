<template>
  <div class="title-banner">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "TitleBanner",
  props: {
    title: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
.title-banner {
  padding: 15px 25px;
  background-color: #fff;
  border-bottom: 1px solid var(--borderColor);

  h1 {
    margin-bottom: 2px;
    color: var(--black);
    font-size: 32px;
    font-weight: 600;
  }

  p {
    margin-bottom: 8px;
    font-size: 16px;
    color: #3a3b41;
    font-weight: 400;
  }
}
</style>
