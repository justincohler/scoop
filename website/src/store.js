import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: {
      username: null,
      password: null,
      companyName: null,
      address: null,
      city: null,
      zipCode: null,
      industry: null,
      businessDescription: null,
      customerDescription: null,
      link1: null,
      link2: null,
      ads: {"1": null, "2": null, "3": null}
    }

  },
  mutations: {
    updateForm(state, payload) {
        state.form[payload.field] = payload.input
    },
    updateAds(state, payload) {
        state.form.ads[payload.adNum] = payload.file
    }
  },
  actions: {}
});
