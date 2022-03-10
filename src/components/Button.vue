<template>
  <button :type="type" @click="$emit('onClick', event)">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Button",
  props: {
    type: {
      type: String,
      default: "button",
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: var(--blue);
  color: #fff;
  border: 1px solid #1d87e2;
  border-radius: 5px;
  padding: 8px 20px;
  font-size: 14px;
  min-width: 105px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #1f85de;
  }
}
</style>
