<template>
  <div class="content">
    <div class="left">
      <Menus :collapse="collapse" />
    </div>
    <div class="right">
      <div class="header">
        <Header @handleCollapse="handleCollapse" />
      </div>
      <div class="nav">
        <router-view></router-view>
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Menus from "./Menus";
import Header from "./Header";
import Footer from "./Footer";
export default {
  components: {
    Menus,
    Header,
    Footer
  },
  props: {},
  data() {
    return {
      collapse: false
    };
  },
  mounted() {},
  methods: {
    handleSubmit() {
      this.$router.push({ path: "/home" });
    },
    handleCollapse() {
      this.collapse = !this.collapse;
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
}
.left {
  height: 100%;
  background: #2d3a4b;
  z-index: 1;
}
.right {
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 60px;
  line-height: 60px;
}
.nav {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: #f0f2f5;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #fff;
  z-index: 0;
}
</style>