<template>
  <div class="wrapper">
    <div class="wrapper-conter">
      <div class="wrapper-table">
        <el-table :data="tableData" stripe style="width:100%;height:5rem">
          <el-table-column prop="id" label="ID" width="80" align="center"></el-table-column>
          <el-table-column prop="img" label="照片" width="80" align="center">
            <template slot-scope="scope">
              <el-popover placement="top-start" width="570" trigger="hover">
                <!-- 大图 -->
                <img :src="scope.row.img" style="height:360px;width:570px" />
                <img :src="scope.row.img" style="width:50px;height:50px" slot="reference" />
                <!-- 小图 -->
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="姓名" align="center"></el-table-column>
          <el-table-column prop="sex" label="性别" align="center"></el-table-column>
          <el-table-column prop="age" label="年龄" align="center"></el-table-column>
          <el-table-column prop="phone" label="手机号" align="center"></el-table-column>
          <el-table-column prop="dateTime" label="日期时间" align="center"></el-table-column>
          <el-table-column prop="price" label="价格" width="180" align="center"></el-table-column>
          <el-table-column prop="turnover" label="成交率" width="80" align="center"></el-table-column>
          <el-table-column prop="address" label="地址" width="220" align="center"></el-table-column>
        </el-table>
      </div>
      <div class="wrapper-paging" :class="total>0?'':'wrapper-none'">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="1"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Mock from "@/mock/table/table.js";
export default {
  components: {},
  props: {},
  data() {
    return {
      params: {
        page: 1,
        limit: 10
      },
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
      total: 0
    };
  },
  mounted() {
    console.log(Mock, "Mock");
    this.getTableData();
  },
  methods: {
    getTableData() {
      this.tableData = Mock.list;
      this.total = Mock.total;
    },
    handleSizeChange(val) {
      //页码分页
      this.params.page = val;
      this.getTableData();
    },
    handleCurrentChange(val) {
      //数组条数分页
      this.params.limit = val;
      this.getTableData();
    }
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 15.4rem;
  height: 6rem;
  margin: 0.3rem 0.3rem 0.3rem 0.3rem;
  background: #fff;
}
.wrapper-conter {
  position: relative;
  padding: 0.3rem 0.3rem 0.3rem 0.3rem;
}
.wrapper-table {
  //   width: 100%;
  //   height: 100%;
}
.wrapper-paging {
  text-align: left;
}
.wrapper-none {
  display: none;
}
</style>