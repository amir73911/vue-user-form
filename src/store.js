import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      login: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      country: "",
      city: "",
      dateOfBirth: "",
      zipCode: ""
    }
  },
  mutations: {
    updateUserLogin(state, value) {
      state.user.login = value;
    },
    updateUserEmail(state, value) {
      state.user.email = value;
    },
    updateUserPassword(state, value) {
      state.user.password = value;
    },
    updateUserFirstName(state, value) {
      state.user.firstName = value;
    },
    updateUserLastName(state, value) {
      state.user.lastName = value;
    },
    updateUserCountry(state, value) {
      state.user.country = value;
    },
    updateUserCity(state, value) {
      state.user.city = value;
    },
    updateUserDateOfBirth(state, value) {
      state.user.dateOfBirth = value;
    },
    updateUserZipCode(state, value) {
      state.user.zipCode = value;
    }
  },
  actions: {}
});
