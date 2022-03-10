<template>
  <TitleBanner title="Billing" description="Overview of your accounts" />

  <AccountCards />

  <div class="row">
    <div class="payment-details">
      <PaymentDetails />
    </div>
    <div class="my-products">
      <MyProducts />
    </div>
  </div>

  <div class="row">
    <BillingHistory />
  </div>
</template>

<script>
import TitleBanner from "../components/TitleBanner.vue";
import AccountCards from "../components/AccountCards.vue";
import PaymentDetails from "../components/PaymentDetails.vue";
import MyProducts from "../components/MyProducts.vue";
import BillingHistory from "../components/BillingHistory.vue";

export default {
  name: "BillingPage",
  components: {
    TitleBanner,
    AccountCards,
    PaymentDetails,
    MyProducts,
    BillingHistory,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}

.row {
  display: flex;
  padding: 15px 40px;

  @media (max-width: 1290px) {
    flex-direction: column;

    .payment-details {
      margin-bottom: 35px;
      padding-right: 0;
    }

    > div {
      width: 100%;
    }
  }
}

.payment-details {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-right: 30px;
}

.my-products {
  width: 385px;
}
</style>
