<template>
  <div class="pages">
    <!-- <img src="../../../static/ting.jpg" alt /> -->
    <div class="login">
      <el-form
        :model="ruleForm2"
        status-icon
        ref="ruleForm2"
        label-position="left"
        label-width="0px"
        class="demo-ruleForm login-page"
      >
        <h3 class="title">系统登录</h3>
        <el-form-item>
          <el-input
            type="text"
            name="username"
            auto-complete="off"
            placeholder="用户名"
            style="width:90%"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="password"
            name="password"
            auto-complete="off"
            placeholder="密码"
            style="width:90%"
          ></el-input>
        </el-form-item>
        <el-checkbox
          v-model="checked"
          class="rememberme"
          style="float: left;margin-left:30px;margin-bottom:10px"
        >记住密码</el-checkbox>
        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:90%;" @click="handleSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      ruleForm2: {},
      aglint: "right",
      checked: ""
    };
  },
  mounted() {},
  methods: {
    handleSubmit() {
      this.$router.push({ path: "/home" });
    }
  }
};
</script>
<style>
.pages {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;
}
.login {
  position: relative;
  float: right;
  margin-right: 200px;
  top: 20%;
  width: 400px;
  background-color: #ffffff;
  border-radius: 10px;
}
</style>