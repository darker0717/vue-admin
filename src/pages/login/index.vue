<template>
  <div id="login">
    <el-form :model="loginForm">
      <h2>Ray商城登录</h2>
      <el-form-item>
        <el-input name="username" placeholder="请输入用户名/手机号" auto-complete="on"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input name="password" placeholder="请输入密码" auto-complete="on"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.wrapper {
}
</style>