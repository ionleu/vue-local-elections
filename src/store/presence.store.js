import { CecAPI } from "@/services";
const presenceReport = new CecAPI("GetLocalElectionPresence");

export default {
  state: {
    info: {},
  },
  getters: {
    info: s => s.info,
  },
  actions: {
    async fetchPresenceInfo({ commit }) {
      try {
        const data = await presenceReport.get();

        commit("setInfo", data[0]);
      } catch (e) {
        throw e;
      }
    },
  },
  mutations: {
    setInfo(s, info) {
      s.info = info;
    },
  },
};
