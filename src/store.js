import Vue from "vue";
import Vuex from "vuex";
import Form from './components/Form.vue'
import ThankYou from "./components/ThankYou.vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    componentLoaded: Form,
    componentChanged: false
  },
  mutations: {
    changeComponent(state) {
      state.componentLoaded = ThankYou
    }
  },
  actions: {
    changeQuestionnaireComponent({ commit }) {
      commit('changeComponent')
    }
  }
});
