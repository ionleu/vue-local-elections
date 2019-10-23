<template>
  <div>
    <intro />
    <elections-info v-if="!loading" :participationRate="participationRate" />
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
    this.loading = false;
  },
  computed: {
    ...mapGetters(["candidates", "participationRate"]),
  },
  methods: {
    ...mapActions(["fetchCandidates"]),
  },
};
</script>
