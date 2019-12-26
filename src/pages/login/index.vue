<template>
  <div class="pages">
    <!-- <img src="../../../static/ting.jpg" alt /> -->
    <div class="login">
      <h3 class="title">系统登录</h3>
      <el-form ref="ruleForm2" label-position="left" label-width="0px" class="formList">
        <el-form-item>
          <el-input
            type="text"
            v-model="username"
            name="username"
            placeholder="用户名"
            style="width:90%"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="password"
            v-model="password"
            name="password"
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
          <el-button type="primary" style="width:90%;" @click="handleSubmit('ruleForm2')">登录</el-button>
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
      aglint: "right",
      checked: "",
      username: "",
      password: ""
    };
  },
  mounted() {
    this.handleAvoid();
  },
  methods: {
    //登录
    handleSubmit() {
      var userinfo = {
        username: this.username,
        password: this.password
      };
      this.$post("/login", userinfo).then(res => {
        if (res.msg == "登录成功") {
          this.handleChang(this.ruleForm2); //将用户信息保存到cookie中
          this.$message({
            message: res.msg,
            type: "success"
          });
          this.$router.push({ path: "/home" });
        } else {
          this.$message({
            message: res.msg,
            type: "warning"
          });
        }
      });
    },
    //设置cookie
    setCookie(cname, cvalue, exdays) {
      //cname cookie名称  cvalue cookie内容 exdays cookies结束时间
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toGMTString();
      document.cookie = cname + "=" + cvalue + "; " + expires;
    },
    //读取cookie
    getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    handleChang(value) {
      if (this.checked) {
        this.setCookie("login", JSON.stringify(value), 3);
      }
    },
    handleAvoid() {
      var value = JSON.parse(this.getCookie("login"));
      if (value.username && value.password) {
        this.username = value.username;
        this.password = value.password;
      }
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
  display: inline;
  float: right;
  margin-right: 200px;
  top: 20%;
  width: 400px;
  background-color: #ffffff;
  border-radius: 10px;
}
.formList {
  padding-left: 40px;
}
.title {
  font-size: 0.3rem;
  text-align: center;
}
</style>