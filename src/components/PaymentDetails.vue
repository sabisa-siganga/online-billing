<template>
  <div class="card">
    <CardHeader
      title="Payment details"
      description="View details of your next invoice and payment method"
    />

    <div class="payment-details-container">
      <div class="next-invoice">
        Next invoice: {{ formatDate(nextInvoiceDate) }}
      </div>
      <div class="row">
        <div>
          <div class="balance">
            <div class="title">Current balance</div>
            <div class="price">£{{ balance }}</div>
            <div class="guide">
              <div class="icon lock"><LockFilled /></div>
              <div class="text">
                This is a secure 256-bit SSL encrypted payment. You're safe.
              </div>
            </div>
            <div class="action">
              <Button @onClick="payNow">Pay Now</Button>

              <Modal
                :show="showModal"
                @onCancel="onCancel"
                @onOk="onOk"
                :billingAddress="billingAddress"
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="title">
              Payment method

              <span>Annual</span>
            </div>
            <div class="guide">
              <div class="icon idea"><BulbFilled /></div>
              <div class="text">
                <template v-if="paymentMethod !== 'DD'">
                  <span>Guide:</span> To manage your payment more easily, we
                  recommend switching to Direct Debit.
                </template>
                <template v-else>
                  Managing your payment easily with Direct Debit
                </template>
              </div>
            </div>
            <div class="action">
              <Button
                @onClick="switchPaymentMethod({ paymentMethod, accountId })"
              >
                <template v-if="paymentMethod !== 'DD'">
                  Switch to Direct Debit
                </template>
                <template v-else>Switch to Monthly Payment</template>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import dayjs from "dayjs";
import CardHeader from "./CardHeader.vue";
import Button from "./Button.vue";
import Modal from "./Modal.vue";
import { BulbFilled, LockFilled } from "@ant-design/icons-vue";

export default {
  name: "PaymentDetails",
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    CardHeader,
    Button,
    LockFilled,
    BulbFilled,
    Modal,
  },
  computed: {
    ...mapState("details", [
      "paymentMethod",
      "nextInvoiceDate",
      "balance",
      "accountId",
      "billingAddress",
    ]),
  },
  methods: {
    ...mapActions("accounts", ["switchPaymentMethod"]),
    formatDate: (date) => {
      return dayjs(date).format("DD MMM YYYY");
    },
    payNow() {
      this.showModal = true;
    },
    onCancel() {
      this.showModal = false;
    },
    onOk() {
      this.showModal = false;
    },
  },
};
</script>

<style lang="scss">
.payment-details-container {
  padding: 7px 25px 60px;

  .row {
    display: flex;

    > div {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;

      > div {
        background-color: var(--smokedWhite);
        padding: 20px 25px 30px;
        border-radius: 3px;
      }

      &:first-child {
        padding-right: 15px;
      }

      &:last-child {
        padding-left: 15px;
      }
    }

    .title {
      font-size: 15px;
      font-weight: 500;

      > span {
        background-color: #fff;
        font-size: 12px;
        padding: 5px 19px;
        border-radius: 15px;
        margin-left: 15px;
      }
    }

    .price {
      font-size: 32px;
      font-weight: 700;
      color: var(--darkGrey);
    }

    .guide {
      padding-top: 30px;
      font-size: 14px;
      color: #676767;
      font-weight: 400;
      display: flex;
      margin-bottom: 20px;

      > div:first-child {
        width: 25px;
        text-align: center;
        margin-right: 10px;
        padding-top: 3px;
      }

      .text {
        font-size: 15px;
        font-weight: 400;
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;

        > span {
          color: var(--green);
          font-weight: 500;
        }
      }

      .icon {
        svg {
          width: 23px;
          height: auto;
        }

        &.lock svg {
          fill: #3f3f3f;
        }

        &.idea svg {
          fill: var(--green);
        }
      }
    }

    .balance {
      .guide {
        padding-top: 4px;
      }
    }
  }

  .next-invoice {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
  }
}
</style>
