<template>
  <section class="bb">
    <div class="container">
      <div class="row">
        <div class="sub-title center">
          <h2>REZULTATELE PRELIMINARE</h2>
        </div>
        <div
          v-for="(c, idx) of candidates"
          :key="idx"
          class="col m4 s12"
          :class="{ 'offset-m2': idx === 0 }"
        >
          <div class="candidate center">
            <div class="profile">
              <img
                :src="require(`../../assets/img/${c.thumbnail}.png`)"
                :alt="c.name"
              />
              <img
                :src="require(`../../assets/img/${c.party}.png`)"
                class="party"
                :alt="c.party"
              />
            </div>
            <strong style="font-size: 1.2rem;">{{ c.vote }}%</strong>
            <strong>{{ c.totalBallots }} voturi</strong>
            <span>{{ c.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "candidates",
  props: {
    candidates: {
      type: Array,
    },
  },
};
</script>
