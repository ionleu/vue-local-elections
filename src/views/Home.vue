<template>
  <div>
    <intro />
    <elections-info v-if="!loading" :presence="info" />
    <preloader v-if="loading" />
    <candidates v-else :candidates="candidates" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Intro, ElectionsInfo, Candidates, Preloader } from "@/components";

export default {
  name: "home",
  data: () => ({
    loading: true,
  }),
  components: {
    Intro,
    ElectionsInfo,
    Candidates,
    Preloader,
  },
  async mounted() {
    await this.fetchCandidates();
    await this.fetchPresenceInfo();
    this.info.ValideVotes = this.valideVotes;
    this.loading = false;
  },
  computed: {
    ...mapGetters(["candidates", "info", "valideVotes"]),
  },
  methods: {
    ...mapActions(["fetchCandidates", "fetchPresenceInfo"]),
  },
};
</script>
