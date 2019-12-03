<template>
  <div class="echoot">
    <el-row style="margin-bottom:20px;">
      <el-col :span="6">
        <div class="grid-content">
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
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
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
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
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
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
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
      </el-col>
    </el-row>
    <div>
      <Echarts />
    </div>
    <div style="background-color:#f0f2f5;margin-left: 20px;">
      <Echarts1 />
    </div>
    <div style="margin-left:20px;margin-top:20px">
      <el-row>
        <el-col :span="9">
          <div class="grid-content">
            <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
              <el-table-column prop="date" label="order_No" width="150"></el-table-column>
              <el-table-column prop="name" label="Price" width="100"></el-table-column>
              <el-table-column prop="address" label="Stutas"></el-table-column>
            </el-table>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content"></div>
        </el-col>
      </el-row>
    </div>
    <div style="width:100%;height:100px"></div>
  </div>
</template>

<script>
import Echarts from "./echarts";
import Echarts1 from "./echarts/index1.vue";
export default {
  components: {
    Echarts,
    Echarts1
  },
  props: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.echoot {
  padding: 30px 30px 30px 30px;
}
.box-card {
  width: 90%;
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
// .grid-content {
//   width: 100%;
// }
</style>