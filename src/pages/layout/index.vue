<template>
  <div>
    <el-container class="content">
      <el-aside :width="collapse?'60px':'200px'">
        <Menus :collapse="collapse" />
      </el-aside>
      <el-container>
        <el-header>
          <Header @handleCollapse="handleCollapse" />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
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
<style scoped>
.content {
  position: fixed;
  width: 100%;
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #fff;
  color: #000;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: rgb(45, 58, 75);
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}
</style>