import Vue from "vue";
import Vuex from "vuex";
import candidate from "./candidate.store";
import presence from "./presence.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { candidate, presence },
});
