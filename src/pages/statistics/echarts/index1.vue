<template>
  <el-row>
    <el-col :span="8" class="echarts">
      <div class="grid-content">
        <div class="echart1" ref="echart1"></div>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content">
        <div class="echart2" ref="echart2"></div>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content">
        <div class="echart3" ref="echart3"></div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Data from "./data";
export default {
  components: {},
  props: {},
  data() {
    return {
      option: {}
    };
  },
  mounted() {
    this.option = Data;
    let myechart = this.$echarts.init(this.$refs.echart1);
    myechart.setOption(this.option);
    window.onresize = myechart.resize;
    let myechart1 = this.$echarts.init(this.$refs.echart2);
    let option = {
      angleAxis: {},
      color: ["#007EC5", "#0EA6B2", "#4C7CF7", "#53A4ED"],
      radiusAxis: {
        type: "category",
        data: ["周一", "周二", "周三", "周四"],
        z: 10
      },
      polar: {},
      series: [
        {
          type: "bar",
          data: [1, 2, 3, 4],
          coordinateSystem: "polar",
          name: "A",
          stack: "a"
        },
        {
          type: "bar",
          data: [2, 4, 6, 8],
          coordinateSystem: "polar",
          name: "B",
          stack: "a"
        },
        {
          type: "bar",
          data: [1, 2, 3, 4],
          coordinateSystem: "polar",
          name: "C",
          stack: "a"
        }
      ],
      legend: {
        show: true,
        data: ["A", "B", "C"]
      }
    };
    myechart1.setOption(option);
    let myechart2 = this.$echarts.init(this.$refs.echart3);
    window.onresize = myechart1.resize;
    let option1 = {
      legend: {},
      tooltip: {},
      color: ["#007EC5", "#0EA6B2", "#4C7CF7", "#53A4ED"],
      dataset: {
        dimensions: ["product", "2015", "2016", "2017"],
        source: [
          { product: "Matcha Latte", "2015": 43.3, "2016": 85.8, "2017": 93.7 },
          { product: "Milk Tea", "2015": 83.1, "2016": 73.4, "2017": 55.1 },
          { product: "Cheese Cocoa", "2015": 86.4, "2016": 65.2, "2017": 82.5 },
          {
            product: "Walnut Brownie",
            "2015": 72.4,
            "2016": 53.9,
            "2017": 39.1
          }
        ]
      },
      xAxis: { type: "category" },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
    };
    myechart2.setOption(option1);
    window.onresize = myechart2.resize;
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.echarts {
  height: 5rem;
}
.grid-content {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #fff;
}
.echart1 {
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 0.3rem;
}
.echart2 {
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 0.3rem;
}
.echart3 {
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 0.3rem;
}
</style>