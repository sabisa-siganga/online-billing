<template>
  <div class="card">
    <CardHeader
      title="My products"
      description="All your products at a glance"
    />

    <div class="product-list">
      <div v-for="(product, index) of products" :key="index">
        <div class="icon">
          <template v-if="product.product_kind === 'TELCO'">
            <PhoneOutlined />
          </template>
          <template v-else-if="product.product_kind === 'WEBSITE'">
            <LaptopOutlined />
          </template>
          <template v-else-if="product.product_kind === 'VOIP'">
            <BranchesOutlined />
          </template>
        </div>
        <div class="detail">
          {{ product.product_kind }} - {{ product.product_detail }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  PhoneOutlined,
  LaptopOutlined,
  BranchesOutlined,
} from "@ant-design/icons-vue";
import CardHeader from "./CardHeader.vue";

export default {
  name: "MyProducts",
  components: {
    CardHeader,
    PhoneOutlined,
    LaptopOutlined,
    BranchesOutlined,
  },
  computed: {
    ...mapState("details", ["products"]),
  },
};
</script>

<style lang="scss">
.product-list {
  padding: 0px 25px 25px;
  margin-top: -7px;
  min-height: 353px;

  > div {
    font-weight: 500;
    display: flex;
    align-items: center;
    padding: 22px 0;
    border-bottom: 1px solid #e6e6e6;
  }

  .icon {
    color: var(--darkGrey);
    width: 30px;
    text-align: center;
    margin-right: 13px;
    display: flex;

    svg {
      width: 23px;
      height: auto;
    }
  }

  .detail {
    color: var(--darkGrey);
    font-size: 16px;
  }
}
</style>
