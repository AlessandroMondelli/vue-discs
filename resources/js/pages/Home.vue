<template>
  <div class="music-container">
    <music-header></music-header>

    <music-cds-container></music-cds-container>
  </div>
</template>

<script>
import MusicHeader from "../components/MusicHeader";
import MusicCdsContainer from "../components/MusicCdsContainer";

export default {
  components: {
    MusicHeader,
    MusicCdsContainer
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.music-container {
  height: 100vh;
  background: #1d2d3b;
}
</style>

