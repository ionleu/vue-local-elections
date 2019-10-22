<template>
  <section class="bb">
    <div class="container">
      <div class="row">
        <div class="col m4 s12 offset-m4">
          <div class="sub-title center">
            <h2>RATA DE PARTICIPARE</h2>
            <strong>{{ participationRate }}%</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "elections-info",
  props: {
    participationRate: {
      type: Number,
      default: 80
    }
  }
};
</script>
