<template>
  <div>
    <div class="contents">
      <div style="width: 100%">
        <div style="float: right;margin-bottom: 20px;">
          <el-button class="exports" @click="handleDownload">导出表格zip</el-button>
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
  </div>
</template>

<script>
import JSZip from "jszip";
export default {
  name: "ExportZip",
  components: {},
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
      list: [],
      filename: "excel压缩包"
    };
  },
  mounted() {
    this.list = this.tableData;
  },
  methods: {
    handleDownload() {
      import("../export/Export2Zip").then(zip => {
        const tHeader = ["日期", "姓名", "地址"];
        const filterVal = ["date", "name", "address"];
        const list = this.list;
        const data = this.formatJson(filterVal, list);
        zip.export_txt_to_zip(tHeader, data, this.filename);
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    }
  }
};
</script>
<style lang="less" scoped>
.contents {
  padding: 30px 30px 30px 30px;
  // width: 95%;
}
.tables {
  margin-top: 20px;
}
</style>