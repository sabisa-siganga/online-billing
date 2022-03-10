import Data from "../../assets/Data.json";

const state = () => ({
  accounts: Data.map((item, index) => {
    return {
      ...item,
      selected: index === 0,
    };
  }),
});

const getters = {
  allAccounts: (state) => state.accounts,
};

const actions = {
  selectAccount({ commit, state }, accountIndex) {
    const update = [];
    let selectedAccount = {};

    state.accounts.forEach((account, index) => {
      let selected = accountIndex === index;

      if (selected) {
        selectedAccount = account;
      }

      update.push({
        ...account,
        selected,
      });
    });

    commit("accountSelect", update);

    commit("details/updateDetails", selectedAccount, { root: true });
  },
  pickSelectedAccount: ({ commit, state }) => {
    const item = state.accounts.find((account) => {
      return account.selected;
    });

    if (item) {
      commit("details/updateDetails", item, { root: true });
    }
  },
  switchPaymentMethod({ commit, state }, info) {
    const newPaymentMethod = info.paymentMethod === "MP" ? "DD" : "MP";

    const results = state.accounts.map((account) => {
      let paymentMethod = account.payment_method;

      if (info.accountId === account.account_id) {
        paymentMethod = newPaymentMethod;
      }

      return {
        ...account,
        payment_method: paymentMethod,
      };
    });

    commit("accountSelect", results);
    commit("details/switchPaymentMethod", newPaymentMethod, { root: true });
  },
};

const mutations = {
  accountSelect(state, accounts) {
    state.accounts = accounts;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
