<template>
  <div class="music-container">
    <music-header></music-header>

    <music-info></music-info>
  </div>
</template>

<script>
import MusicHeader from "../components/MusicHeader";
import MusicInfo from "../components/MusicInfo";

export default {
  components: {
    MusicHeader,
    MusicInfo
  },
  data() {
    return {};
  }
};
</script>
