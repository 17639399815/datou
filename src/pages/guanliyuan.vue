<template>
  <div>
    <v-tan ref="add1" @tiaozhuan="init"></v-tan>
    <el-table :data="tableData" height="250" border>
      <el-table-column type="index" label="序号" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="time" label="时间" width="180"></el-table-column>
      <el-table-column prop="des" label="属性" width="180"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="on(scope.row.id)">查看</el-button>
          <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  
  </div>
</template>

<script>

import API from "../common/js/API";
import vTan from "../views/tan";
export default {
  components: {
    vTan
  },
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    init() {
      this.$axios({
        url: API.findManage,
        method: "post"
      }).then(res => {
        console.log(res);
        if (res.data.isok) {
          this.tableData = res.data.data;
        }
      });
    },
    del(id) {
      this.$axios({
        url: API.delManage,
        method: "post",
        data: { id: id }
      });
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(rst => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.init();
        })
        // .catch(err => {
        //   this.$message({
        //     type: "info",
        //     message: "已取消删除"
        //   });
        // });
    },
    on(id){
        this.$store.dispatch("changA",this.dialogFormVisible=true)
       this.$refs.add1.find(id)

    }
  },
  mounted() {
    this.init();

    
  },


};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.el-button {
  margin-left: 10px;
}

.el-table {
  width: 80%;
  margin: auto;
}
</style>