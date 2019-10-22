<template>
  <div>
    <intro />
    <elections-info />
    <preloader v-if="loading" />
    <candidates v-else :candidates="candidatesArray" />
  </div>
</template>

<script>
import { Intro, ElectionsInfo, Candidates, Preloader } from "@/components";

export default {
  name: "home",
  data() {
    return {
      loading: false,
      candidatesArray: [
        { name: "JALBA INA", thumbnail: "jalba", party: "usb", vote: 90 },
        { name: "VIERU VALENTIN", thumbnail: "vieru", party: "acum", vote: 40 }
      ]
    };
  },
  components: {
    Intro,
    ElectionsInfo,
    Candidates,
    Preloader
  }
};
</script>
