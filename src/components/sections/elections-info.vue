<template>
  <section class="bb">
    <div class="container">
      <div class="row">
        <div class="col m4 s12 offset-m4">
          <div class="sub-title center">
            <h2>RATA DE PARTICIPARE</h2>
            <strong>{{ presenceRate }}%</strong>
            <div>
              <small>
                Din {{ presence.TotalVoters }} de mereneni, cu dreptul la vot,
                până acum, au votat {{ presence.TotalVoted }},
                {{ presence.TotalVoted - presence.ValideVotes }} voturi fiind
                nevalide.
              </small>
            </div>
            <progress-bar :width="presenceRate" />
          </div>
        </div>
      </div>
      <div class="row sub-title">
        <div class="col m8 s12 offset-m2">
          <div class="sub-title center">
            <h2>PREZENȚA LA VOT PER VÂRSTĂ ȘI GEN</h2>
            <small
              >Au votat {{ presence.F }} femei și
              {{ presence.M }} bărbați</small
            >
            <canvas ref="canvas"></canvas>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Pie } from "vue-chartjs";
import "chartjs-plugin-labels";
import { ProgressBar } from "@/components";

export default {
  name: "elections-info",
  extends: Pie,
  props: {
    presence: {
      type: Object,
    },
  },
  components: {
    ProgressBar,
  },
  data: () => ({
    categories: ["18-25 ani", "26-40 ani", "41-55 ani", "56-70 ani", "71+ ani"],
    data: {
      labels: this.categories,
      datasets: [
        {
          label: "Voturi",
          data: [
            this.presence.C1,
            this.presence.C2,
            this.presence.C3,
            this.presence.C4,
            this.presence.C5,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        labels: [
          {
            render: "percentage",
            position: "outside",
            precision: 2,
          },
          {
            render: "value",
          },
        ],
      },
      responsive: true,
      maintainAspectRatio: false,
      pieceLabel: {
        render: "value",
        precision: 1,
      },
      showAllTooltips: true,
    },
  }),
  computed: {
    presenceRate() {
      return this.toPercentage(
        this.presence.TotalVoted,
        this.presence.TotalVoters,
      );
    },
  },
  mounted() {
    this.renderChart(this.data, this.options);
  },
  methods: {
    toPercentage(f1, f2) {
      return +((100 * f1) / f2).toFixed(2);
    },
  },
};
</script>
