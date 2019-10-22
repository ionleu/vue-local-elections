<template>
  <div id="app">
    <navbar />
    <router-view />
    <footer-comp />
  </div>
</template>

<script>
import { Navbar, FooterComp } from "@/components";

export default {
  name: "app",
  components: {
    Navbar,
    FooterComp
  }
};
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/css/main.css";
</style>
