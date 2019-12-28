<template>
  <div class="content1">
    <el-tabs type="border-card" style="font-size: 0.3rem;">
      <el-tab-pane label="导出">
        <div class="contents">
          <div style="width: 100%">
            <div style="float: right;margin-bottom: 20px;">
              <el-button class="exports" @click="exportsTable">导出表格</el-button>
            </div>
          </div>
          <div class="tables">
            <el-table :data="tableData" border style="width: 100%" align="center">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="导入">
        <Channel />
      </el-tab-pane>
      <el-tab-pane label="压缩包">
        <Compress />
      </el-tab-pane>
      <el-tab-pane label="PDF">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Channel from "./channel/index";
import Compress from "./compress/index";
export default {
  components: {
    Channel,
    Compress
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
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      list: []
    };
  },
  mounted() {
    this.list = this.tableData; //导出数据源
  },
  methods: {
    //需要赋值export文件夹中的export2Excel.js
    exportsTable() {
      //导出
      import("./export/Export2Excel").then(excel => {
        const tHeader = ["日期", "姓名", "地址"]; //excel表头
        const filterVal = ["date", "name", "address"]; //表格中的字段
        const list = this.list;
        const data = this.formatJson(filterVal, list);
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: "导出excel" //导出excel文件名字，可以动态生成
          // autoWidth: this.autoWidth,
          // bookType: this.bookType
        });
      });
    },
    formatJson(filterVal, jsonData) {
      //导出
      return jsonData.map(v =>
        filterVal.map(j => {
          if (j === "timestamp") {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        })
      );
    }
  }
};
</script>
<style lang="less" scoped>
.content1 {
  padding: 30px 30px 30px 30px;
  // width: 95%;
}
.tables {
  margin-top: 20px;
}
</style>