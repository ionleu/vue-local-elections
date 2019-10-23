<template>
  <div class="progress">
    <div class="determinate" :style="`width: ${width}%`"></div>
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
