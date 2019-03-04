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
      links: [{
        "title": "Yelp",
        "url": "https://www.yelp.com"
      },
      {
        "title": "Homepage",
        "url": "https://google.com"
      }
      ],
      priorities: null,
      budget: 200.00,
      ads: []
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
