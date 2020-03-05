<template>
  <div class="music-header">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <img src="https://www.boolean.careers/images/common/logo.png" />
        </div>
        <div class="col-sm-6">
          <ul>
            <li v-for="(item, index) in items" :key="index">
              <router-link :to="item.href">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { href: "/", title: "Home" },
        { href: "info", title: "Info" }
    ],
    };
  }
};
</script>

<style lang="scss" scoped>
$headerHeight: 70px;

.music-header {
  background: lighten(#1d2d3b, 5%);
  height: $headerHeight;
  line-height: $headerHeight;
  img {
    height: 50px;
  }
  ul {
    list-style: none;
    text-align: right;
    li {
      display: inline-block;
      color: white;
      margin: 0 10px;
      font-size: 20px;

      a {
        color: white;
        text-decoration: none;
        transition: 0.2s;

        &:hover {
            color: rgba(255,255,255,0.6);
        }
      }
    }
  }
}
</style>
