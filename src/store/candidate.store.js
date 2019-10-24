import { CecAPI } from "@/services";
const candidateReport = new CecAPI("GetTopElectionResults");
const incomeStatementUrl = "https://api.alegeri.tv8.md/uploads/candidates";

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
              el.incomeStatement = `${incomeStatementUrl}/Ina%20Jalb%C4%83.pdf`;
            } else {
              el.name = "VIERU VALENTIN";
              el.thumbnail = "vieru";
              el.party = "acum";
              el.incomeStatement = `${incomeStatementUrl}/Valentin%20Vieru.pdf`;
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
