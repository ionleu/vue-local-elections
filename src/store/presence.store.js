import { CecAPI } from "@/services";
const cecPresenceUrl =
  "https://pv.cec.md/app1/api/localreports/GetLocalElectionPresence?circumscriptionId=1554&electionType=3";
const presenceAPI = new CecAPI(cecPresenceUrl);

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
        const data = await presenceAPI.get();

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
