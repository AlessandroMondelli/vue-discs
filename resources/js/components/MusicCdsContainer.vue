<template>
  <div class="container">
    <div class="music-cds-container">
      <music-cd v-for="(cd, index) in cds" :key="index" :cd="cd"></music-cd>
    </div>
  </div>
</template>

<script>
import MusicCd from "./MusicCd";

export default {
  components: {
    MusicCd
  },
  data() {
    return {
      cds: []
    };
  },
  mounted() {
    let self = this;

    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then(function(response) {
        self.cds = response.data.response;
      });
  }
};
</script>

<style lang="scss">
.music-container {
     overflow-y: auto;

     .music-cds-container {
       display: flex;
       justify-content: center;
       align-items: center;
       flex-wrap: wrap;
     }
}

</style>
