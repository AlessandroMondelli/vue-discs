<template>
  <div class="music-cd">
    {{ cd.title }} - {{ cd.author }}
    <strong>{{ cd.year }}</strong>
    <img :src="cd.poster" />
  </div>
</template>

<script>
export default {
  props: ["cd"]
};
</script>

<style lang="scss">
.music-cd {
  background: lighten(#1d2d3b, 5%);
  width: 200px;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  color: white;
  transition: 0.3s;

  &:hover {
      transform: scale(0.95);
      cursor: pointer;
  }

  img {
    margin: 20px 0;
    border-radius: 10px;
    width: 100%;
  }
}
</style>
