<template>
  <div>
    <div class="content1">
      <div style="float: right;margin-bottom: 20px;">
        <el-upload
          class="upload-demo"
          action
          :multiple="false"
          :show-file-list="false"
          accept="csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          :http-request="httpRequest"
        >
          <el-button class="exports">导入表格</el-button>
        </el-upload>
      </div>
      <div class="tables">
        <el-table :data="tableData" border style="width: 100%" align="center">
          <el-table-column prop="日期" label="日期" width="180"></el-table-column>
          <el-table-column prop="姓名" label="姓名" width="180"></el-table-column>
          <el-table-column prop="地址" label="地址"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import XLSX from "xlsx";
export default {
  components: {},
  props: {},
  data() {
    return {
      tableData: []
    };
  },
  mounted() {},
  methods: {
    //需要引用XLSX插件
    httpRequest(e) {
      let file = e.file; // 文件信息
      console.log("e: ", e);
      console.log("file: ", e.file);

      if (!file) {
        // 没有文件
        return false;
      } else if (!/\.(xls|xlsx)$/.test(file.name.toLowerCase())) {
        // 格式根据自己需求定义
        this.$message.error("上传格式不正确，请上传xls或者xlsx格式");
        return false;
      }

      const fileReader = new FileReader();
      fileReader.onload = ev => {
        try {
          const data = ev.target.result;
          const workbook = XLSX.read(data, {
            type: "binary" // 以字符编码的方式解析
          });
          const exlname = workbook.SheetNames[0]; // 取第一张表
          const exl = XLSX.utils.sheet_to_json(workbook.Sheets[exlname]); // 生成json表格内容
          console.log(exl);
          // 将 JSON 数据挂到 data 里
          this.tableData = exl;
          // document.getElementsByName('file')[0].value = '' // 根据自己需求，可重置上传value为空，允许重复上传同一文件
        } catch (e) {
          console.log("出错了：：");
          return false;
        }
      };
      fileReader.readAsBinaryString(file);
    }
  }
};
</script>
<style lang="less" scoped>
.content1 {
  padding: 30px 30px 30px 30px;
}
.tables {
  margin-top: 20px;
}
</style>