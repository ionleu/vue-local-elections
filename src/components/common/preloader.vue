<template>
  <div class="center">
    <div class="preloader-wrapper small active">
      <div class="spinner-layer spinner-blue-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
    <div style="margin-top: 10px;">
      <small>
        Se procesează datele,
        <br />
        durează câteva secunde...
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: "preloader",
};
</script>
