<template>
  <div class="card-header">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "CardHeader",
  props: {
    title: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
.card-header {
  padding: 15px 25px;
  padding-bottom: 5px;
  margin-bottom: 12px;
  background-color: #fff;
  border-bottom: 0.15em solid var(--borderColor);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;

  h3 {
    margin-bottom: 2px;
    color: var(--black);
    font-size: 19px;
    font-weight: 500;
  }

  p {
    margin-bottom: 8px;
    font-size: 15px;
    color: var(--darkGrey);
    font-weight: 400;
  }
}
</style>
