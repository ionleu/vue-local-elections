<template>
  <section class="bb">
    <div class="container">
      <div class="row">
        <div class="col m4 s12 offset-m2">
          <div class="sub-title center">
            <h2 class="sub-title">BULETINE PROCESATE</h2>
            <preloader v-if="loading" />
            <strong v-else>{{ totalBallots }}%</strong>
          </div>
        </div>
        <div class="col m4 s12">
          <div class="sub-title center">
            <h2>RATA DE PARTICIPARE</h2>
            <preloader v-if="loading" />
            <strong v-else>{{ participationRate }}%</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Preloader } from "@/components";

export default {
  name: "elections-info",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    totalBallots: {
      type: Number,
      default: 99
    },
    participationRate: {
      type: Number,
      default: 80
    }
  },
  components: {
    Preloader
  }
};
</script>
