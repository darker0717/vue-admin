<template>
  <div class="echoot">
    <el-row style="margin-bottom:20px;">
      <el-col :span="6">
        <div class="grid-content">
          <el-card class="box-card">
            <div class="card">
              <div class="card1">
                <span class="el-icon-view" style="font-size:0.48rem;color:#40c9c6"></span>
              </div>
              <div class="card2">
                <div class="title">New Look</div>
                <div class="title1">102,400</div>
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
              <div class="card2">
                <div class="title">New Music</div>
                <div class="title1">81,212</div>
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
              <div class="card2">
                <div class="title">New Game</div>
                <div class="title1">9,280</div>
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
              <div class="card2">
                <div class="title">New Movie</div>
                <div class="title1">13,600</div>
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
    <!-- 表格 -->
    <div style="margin-left:20px;margin-top:20px">
      <el-table :data="list" style="width: 100%;padding-top: 15px;">
        <el-table-column label="Order_No" min-width="200">
          <template slot-scope="scope">{{ scope.row.order_no}}</template>
        </el-table-column>
        <el-table-column label="Price" width="195" align="center">
          <template slot-scope="scope">¥{{ scope.row.price }}</template>
        </el-table-column>
        <el-table-column label="Status" width="100" align="center">
          <template slot-scope="{row}">
            <el-tag :type="row.status">{{ row.status }}</el-tag>
          </template>
        </el-table-column>
      </el-table>
      <div></div>
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
      list: [
        {
          order_no: "8eAAe33f-CC1E-cBd9-B3c4-3A8Eea",
          price: "¥14,630.2",
          status: "success"
        },
        {
          order_no: "FAedBb2E-deD4-981b-c5b7-faE72b",
          price: "¥14,159.4",
          status: "success"
        },
        {
          order_no: "ed9c8F4e-bB53-Bed6-6a8A-b0Bd3E",
          price: "¥2,067.8",
          status: "pending"
        },
        {
          order_no: "fDea9eED-4722-eE8e-Ec7F-f338Af",
          price: "¥6,977.17",
          status: "pending"
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
  margin-left: 20px;
  background: #fff;
}
.card {
  width: 100%;
  height: 100px;
  display: flex;
}
.card1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card2 {
  width: 50%;
  margin-left: 0.3rem;
  line-height: 30px;
  text-align: center;
}
.title {
  color: rgba(0, 0, 0, 0.45);
  font-size: 0.16rem;
  margin-top: 0.1rem;
  margin-bottom: 0.12rem;
}
.title1 {
  font-size: 0.2rem;
  font-weight: bold;
  margin-top: 0.2rem;
}
.el-main {
  line-height: 36px;
}
</style>