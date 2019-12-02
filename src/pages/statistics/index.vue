<template>
  <div class="content">
    <div class="box">
      <el-card class="box-card">
        <div class="card">
          <div class="card1">
            <span class="el-icon-view" style="font-size:48px;color:#40c9c6"></span>
          </div>
          <div class="card1">
            <div class="title">New Look</div>
            <span class="title1">102,400</span>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="card">
          <div class="card1">
            <span class="el-icon-lollipop" style="font-size:48px;color:#36a3f7"></span>
          </div>
          <div class="card1">
            <div class="title">New Music</div>
            <span class="title1">81,212</span>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="card">
          <div class="card1">
            <span class="el-icon-set-up" style="font-size:48px; color:#f4516c"></span>
          </div>
          <div class="card1">
            <div class="title">New Game</div>
            <span class="title1">9,280</span>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="card">
          <div class="card1">
            <span class="el-icon-film" style="font-size:48px;color:#34bfa3"></span>
          </div>
          <div class="card1">
            <div class="title">New Movie</div>
            <span class="title1">13,600</span>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.content {
}
.box {
  display: inline-flex;
  width: 1140px;
  margin-top: 18px;
  overflow: hidden;
}
.box-card {
  width: 250px;
  height: 110px;
  margin-left: 20px;
  background: #fff;
}
.card1 {
  float: left;
  margin: -7px 0 0;
  padding: 16px;
  -webkit-transition: all 0.38s ease-out;
  transition: all 0.38s ease-out;
  border-radius: 6px;
}
.card2 {
  float: right;
  font-weight: bold;
  margin: 26px;
  margin-left: 0px;
}
.title {
  line-height: 18px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  margin-bottom: 12px;
}
.title1 {
  font-size: 20px;
  font-weight: bold;
}
</style>