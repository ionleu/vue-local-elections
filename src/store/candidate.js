import { CandidateAPI } from "@/services";
const citizensWithVotingRights = 5000;
const cecUrlAddress =
  "https://pv.cec.md/app1/api/localreports/GetTopElectionResults?electionType=3&circumscriptionId=1554";
const candidateAPI = new CandidateAPI(cecUrlAddress);

export default {
  state: {
    candidates: [],
    participationRate: null,
  },
  getters: {
    candidates: s => s.candidates,
    participationRate: s => s.participationRate,
  },
  actions: {
    async fetchCandidates({ commit }) {
      try {
        const candidates = [];
        let participationRate = 0;
        const data = await candidateAPI.fetchCandidates();

        data
          .filter(c => c.ElectionCompetitorMemberId !== 26697)
          .map(c => {
            let el = {};
            if (c.ElectionCompetitorMemberId === 26936) {
              el.name = "JALBA INA";
              el.totalBallots = c.BallotCount;
              el.totalBallotsValid = c.BallotsValidVotes;
              el.vote = ((100 * c.BallotCount) / c.BallotsValidVotes).toFixed(
                2,
              );
              el.thumbnail = "jalba";
              el.party = "usb";
            } else {
              el.name = "VIERU VALENTIN";
              el.totalBallots = c.BallotCount;
              el.totalBallotsValid = c.BallotsValidVotes;
              el.vote = ((100 * c.BallotCount) / c.BallotsValidVotes).toFixed(
                2,
              );
              el.thumbnail = "vieru";
              el.party = "acum";
            }

            candidates.push(el);
          });

        participationRate =
          (100 * candidates[0].totalBallotsValid) / citizensWithVotingRights;

        commit("setCandidates", candidates);
        commit("setInfo", participationRate);
      } catch (e) {
        throw e;
      }
    },
  },
  mutations: {
    setCandidates(s, candidates) {
      s.candidates = candidates;
    },
    setInfo(s, participationRate) {
      s.participationRate = participationRate;
    },
  },
};
