<template>
  <div>
    <el-menu
      :class="collapse?'el-menu-vertical-demo1':'el-menu-vertical-demo'"
      :collapse="collapse"
      background-color="#2d3a4b"
      text-color="#fff"
    >
      <el-submenu :index="item.id" v-for="(item,i) in list" :key="i">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group v-for="(items,j) in item.children" :key="j">
          <el-menu-item :index="items.id" @click="handleClick(items.path)">{{items.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import Mock from "@/mock/information.js";
export default {
  name: "Menus",
  components: {},
  props: {
    collapse: Boolean
  },
  data() {
    return {
      list: []
    };
  },
  mounted() {
    var that = this;
    that.list = Mock;
  },
  methods: {
    handleClick(path) {
      this.$router.push({
        path: path
      });
    }
  }
};
</script>
<style lang="less" scoped>
.el-menu {
  border: none;
}
.el-submenu {
  text-align: left;
}
.el-menu-item {
  text-align: left;
  margin-top: -15px;
  margin-left: 12px;
  min-width: 187px;
}
.el-menu-vertical-demo {
  width: 200px;
}
.el-menu-vertical-demo1 {
  width: 70px;
}
</style>