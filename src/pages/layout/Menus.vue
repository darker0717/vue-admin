<template>
  <div>
    <el-menu
      :class="collapse?'el-menu-vertical-demo1':'el-menu-vertical-demo'"
      :collapse="collapse"
      background-color="#2d3a4b"
      text-color="#fff"
    >
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Menus",
  components: {},
  props: {
    collapse: Boolean
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.el-menu-item {
  padding: 0 50px;
}
.el-menu-vertical-demo {
  width: 200px;
  //   min-height: 100%;
}
.el-menu-vertical-demo1 {
  width: 70px;
  //   min-height: 100%;
}
</style>