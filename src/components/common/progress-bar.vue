<template>
  <div class="progress grey lighten-2">
    <div
      class="determinate"
      style="background: #0D3360"
      :style="`width: ${width}%`"
    ></div>
  </div>
</template>

<script>
export default {
  name: "progress-bar",
  props: {
    width: {
      type: Number,
      default: 0,
    },
  },
};
</script>
