<template>
  <div>
    <a-modal
      :visible="show"
      :title="`Secure payment: ${billingAddress.fullName}`"
      ok-text="Pay now"
      @cancel="$emit('onCancel')"
      @ok="handleOk"
      wrapClassName="secure-payment"
      :confirm-loading="confirmLoading"
    >
      <div class="payment-container">
        <div class="title">General</div>
        <div class="details">
          <div>
            <span>Business name:</span>
            {{ billingAddress.businessName }}
          </div>
          <div>
            <span>Email address:</span>
            {{ billingAddress.emailAddress }}
          </div>
          <div>
            <span>Phone number:</span>
            {{ billingAddress.phoneNumber }}
          </div>
        </div>
      </div>
      <div class="payment-container">
        <div class="title">Address</div>
        <div class="details">
          <div>
            <span>Address:</span>
            {{ billingAddress.addressLineOne }}
          </div>
          <div>
            <span>Address Two:</span>
            {{ billingAddress.addressLineTwo }}
          </div>
          <div>
            <span>City:</span>
            {{ billingAddress.city }}
          </div>
          <div>
            <span>Country:</span>
            {{ billingAddress.country }}
          </div>
          <div>
            <span>Post Code:</span>
            {{ billingAddress.postCode }}
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: "CustomModal",
  props: {
    show: Boolean,
    billingAddress: Object,
  },
  data() {
    return {
      confirmLoading: false,
    };
  },
  methods: {
    handleOk() {
      this.confirmLoading = true;

      setTimeout(() => {
        this.$emit("onOk");
        this.confirmLoading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
.secure-payment {
  .ant-modal-body {
    .payment-container:first-child {
      margin-bottom: 28px;
    }
  }

  .payment-container {
    .title {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 7px;
      border-bottom: 1px solid var(--borderColor);
      padding-bottom: 2px;
    }

    .details {
      font-size: 15px;
      font-weight: 400;

      span {
        font-weight: 500;
      }
    }
  }
}
</style>
