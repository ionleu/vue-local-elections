<template>
  <div>
    <intro />
    <elections-info v-if="!loading" :participationRate="participationRate" />
    <preloader v-if="loading" />
    <candidates v-else :candidates="candidates" :lider="lider" />
  </div>
</template>

<script>
import { Intro, ElectionsInfo, Candidates, Preloader } from "@/components";
import { CandidateAPI } from "@/services";
const cecUrlAddress =
  "https://pv.cec.md/app1/api/localreports/GetTopElectionResults?electionType=3&circumscriptionId=1554";
const candidateAPI = new CandidateAPI(cecUrlAddress);

export default {
  name: "home",
  data() {
    return {
      loading: true,
      candidates: [],
      participationRate: null
    };
  },
  components: {
    Intro,
    ElectionsInfo,
    Candidates,
    Preloader
  },
  async mounted() {
    const data = await candidateAPI.fetchCandidates();
    data
      .filter(c => c.ElectionCompetitorMemberId !== 26697)
      .map(c => {
        let el = {};
        if (c.ElectionCompetitorMemberId === 26936) {
          el.name = "JALBA INA";
          el.totalBallots = c.BallotCount;
          el.totalBallotsValid = c.BallotsValidVotes;
          el.vote = ((100 * c.BallotCount) / c.BallotsValidVotes).toFixed(2);
          el.thumbnail = "jalba";
          el.party = "usb";
        } else {
          el.name = "VIERU VALENTIN";
          el.totalBallots = c.BallotCount;
          el.totalBallotsValid = c.BallotsValidVotes;
          el.vote = ((100 * c.BallotCount) / c.BallotsValidVotes).toFixed(2);
          el.thumbnail = "vieru";
          el.party = "acum";
        }
        this.candidates.push(el);
      });

    this.loading = false;
    this.participationRate =
      (100 * this.candidates[0].totalBallotsValid) / 5000;
  }
};
</script>
