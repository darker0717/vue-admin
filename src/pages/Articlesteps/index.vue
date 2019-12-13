<template>
  <div>
    <div class="content1">
      <div>
        <el-button type="button" @click="handleClick">按钮</el-button>
      </div>
      <el-steps :active="sum" align-center>
        <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
      </el-steps>
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
      sum: 0
    };
  },
  mounted() {},
  methods: {
    handleClick() {
      this.sum += 1;
    }
  }
};
</script>
<style lang="less" scoped>
.content1 {
  padding: 30px 30px 30px 30px;
  width: 100%;
  background: #fff;
}
.tables {
  margin-top: 20px;
}
</style>