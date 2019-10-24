import { CecAPI } from "@/services";
const candidateReport = new CecAPI("GetTopElectionResults");

export default {
  state: {
    candidates: [],
    valideVotes: null,
  },
  getters: {
    candidates: s => s.candidates,
    valideVotes: s => s.valideVotes,
  },
  actions: {
    async fetchCandidates({ commit }) {
      try {
        const candidates = [];
        const data = await candidateReport.get();

        data
          .filter(c => c.ElectionCompetitorMemberId !== 26697)
          .map(c => {
            let el = {};
            el.totalBallots = c.BallotCount;
            el.vote = ((100 * c.BallotCount) / c.BallotsValidVotes).toFixed(2);

            if (c.ElectionCompetitorMemberId === 26936) {
              el.name = "JALBĂ INA";
              el.thumbnail = "jalba";
              el.party = "usb";
            } else {
              el.name = "VIERU VALENTIN";
              el.thumbnail = "vieru";
              el.party = "acum";
            }

            candidates.push(el);
          });

        commit("setCandidates", candidates);
        commit("setValideVotes", data[0].BallotsValidVotes);
      } catch (e) {
        throw e;
      }
    },
  },
  mutations: {
    setCandidates(s, candidates) {
      s.candidates = candidates;
    },
    setValideVotes(s, valideVotes) {
      s.valideVotes = valideVotes;
    },
  },
};
