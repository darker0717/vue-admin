<template>
  <div class="content">
    <div class="left">
      <Menus :collapse="collapse" />
    </div>
    <div class="right">
      <div class="header">
        <Header @handleCollapse="handleCollapse" />
      </div>
      <div class="nav"></div>
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
  width: 100%;
  height: 100%;
  background: yellow;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: green;
}
// .left {
//   display: flex;
//   width: 100%;
//   height: 100%;
// }
// .meun {
//   position: fixed;
//   height: 100%;
//   background-color: #2d3a4b;
// }
// .right {
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   background-color: red;
// }
// .header {
//   position: fixed;
//   float: right;
//   width: 100%;
//   height: 60px;
//   line-height: 60px;
//   margin-left: 250px;
//   background-color: #fff;
// }
// .footer {
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   height: 60px;
//   line-height: 60px;
//   margin-left: 250px;
//   background-color: #fff;
// }
// .nav {
//   position: fixed;
//   top: 60px;
//   width: 100%;
//   height: 100%;
//   margin-left: 250px;
//   background-color: yellow;
//   z-index: -1;
// }
</style>