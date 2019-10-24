<template>
  <section class="bb">
    <div class="container">
      <div class="row">
        <div class="col m6 s12 offset-m3">
          <h1 class="title">{{ title }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "intro",
  props: {
    title: {
      type: String,
      default:
        "Rezultatele preliminare a alegerilor locale din turul II, 3 noiembrie 2019",
    },
  },
};
</script>
