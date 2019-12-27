<template>
  <div class="diagram">
    <div class="echarts" ref="echarts"></div>
  </div>
</template>

<script>
// import Data from "./data";
export default {
  components: {},
  props: {},
  data() {
    return {
      option: {}
    };
  },
  mounted() {
    this.handleEchart();
  },
  methods: {
    handleEchart() {
      let option = {
        title: {
          text: "堆叠区域图"
        },
        color: ["#007EC5", "#0EA6B2", "#4C7CF7", "#53A4ED"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["网购血拼", "联盟竞技", "视频观看", "刻苦学习", "愉快玩耍"]
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "网购血拼",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟竞技",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频观看",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "刻苦学习",
            type: "line",
            stack: "总量",
            areaStyle: { normal: {} },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "愉快玩耍",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            areaStyle: { normal: {} },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
      let myechart = this.$echarts.init(this.$refs.echarts); //初始化一个echarts
      myechart.setOption(option);
      window.onresize = myechart.resize;
    }
  }
};
</script>
<style lang="less" scoped>
.diagram {
  background-color: #fff;
  padding: 0.16rem 0.16rem 0px;
  margin-left: 0.2rem;
  margin-bottom: 0.32rem;
  height: 3.7rem;
}
.echarts {
  width: 100%;
  height: 3.5rem;
  margin: 0 auto;
  background-color: #f0f2f5;
}
</style>