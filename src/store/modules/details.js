const state = () => ({
  products: [],
  billingAddress: {
    city: "",
    country: "",
    addressLineOne: "",
    addressLineTwo: "",
    postCode: "",
    businessName: "",
    emailAddress: "",
    fullName: "",
    phoneNumber: "",
  },
  paymentMethod: "",
  nextInvoiceDate: "",
  balance: 0,
  accountId: 0,
});

const getters = {
  getProducts: (state) => state.products,
};

const actions = {};

const mutations = {
  updateDetails(state, account) {
    // Set products
    state.products = account.products;

    // Set Billing Address
    state.billingAddress = {
      city: account.address_city,
      country: account.address_country,
      addressLineOne: account.address_line_one,
      addressLineTwo: account.address_line_two,
      postCode: account.address_post_code,
      businessName: account.business_name,
      emailAddress: account.email_address,
      fullName: `${account.first_name} ${account.last_name}`,
      phoneNumber: account.phone_number,
    };

    // Set payment method, next invoice date, balance and account ID
    state.balance = account.balance;
    state.nextInvoiceDate = account.next_invoice_date;
    state.accountId = account.account_id;
    state.paymentMethod = account.payment_method;
  },
  switchPaymentMethod(state, paymentMethod) {
    state.paymentMethod = paymentMethod;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
