<template>
  <div>
    <template>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="维修" name="first">
          <el-button type="text" @click="addd()">添加</el-button>
          <el-dialog title="添加" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="评分" :label-width="formLabelWidth">
                <el-input v-model="form.score" autocomplete="off" type="number" max="10" min="0"></el-input>
              </el-form-item>
              <el-form-item label="类型" :label-width="formLabelWidth">
                <el-input v-model="form.type" autocomplete="off" ></el-input>
              </el-form-item>
              <el-form-item label="点赞数量" :label-width="formLabelWidth">
                <el-input v-model="form.likeNum" autocomplete="off" type="number" min="0"></el-input>
              </el-form-item>
              <el-form-item label="关注人数" :label-width="formLabelWidth">
                <el-input v-model="form.readNum" autocomplete="off" type="number" min="0"></el-input>
              </el-form-item>
              <el-form-item label="商家地址" :label-width="formLabelWidth">
                <el-input v-model="form.address" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="距离" :label-width="formLabelWidth">
                <el-input v-model="form.len" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="商家信息" :label-width="formLabelWidth">
                <el-input v-model="form.info" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="电话" :label-width="formLabelWidth">
                <el-input v-model="form.tel" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="quxiao()">取 消</el-button>
              <el-button type="primary" @click="add()" v-if="!isA">确 定</el-button>
              <el-button type="primary" @click="add2()" v-else>修改</el-button>
            </div>
          </el-dialog>

          <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" label="序号" width="180"></el-table-column>
            <el-table-column prop="name" label="维修名称" width="180"></el-table-column>
            <el-table-column prop="tel" label="电话" width="180"></el-table-column>
            <el-table-column prop="type" label="类型" width="180"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="find(scope.row.id)">查看</el-button>
                <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="维修评论" name="second">
         <el-select v-model="value" placeholder="请选择">
      <!-- label-用户看的 value-自己看的-->
      <el-option label="全部" value></el-option>
      <el-option v-for="item in repair" :key="item.value" :label="item.name" :value="item.id"></el-option>
    </el-select>
          <el-table :data="tableData1" style="width: 100%">
            <el-table-column type="index" label="序号" width="180"></el-table-column>
            <el-table-column prop="name" label="用户名称名称" width="180"></el-table-column>
            <el-table-column prop="content" label="评论内容" width="180"></el-table-column>
            <el-table-column prop="time" label="时间" width="180"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="deldel(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>
</div>
</template>
<script>
import API from "../common/js/API";
export default {
  data() {
    return {
      activeName: "first",
      tableData: [],
      tableData1: [],
      options:[],
      value: '',
       repair: [],
      dialogFormVisible: false,
      isA: false,
      form: {
        name: "",
        score: "",
        type: "",
        likeNum: "",
        readNum: "",
        address: "",
        score: "",
        len: "",
        tel: ""
      },
      id: "",
      formLabelWidth: "120px"
    };
  },
  methods: {
    getComment(params) {
      this.$axios({
        url: "/api/findRepairComment",
        method: "get",
        params: params
      }).then(res => {
        this.tableData1 = res.data.data;
      });
    },
    add2() {
      this.$axios({
        url: API.updateRepair,
        params: this.form
      }).then(res => {
        this.$message({
          message: res.data.info,
          type: "success"
        });
        this.in();
        this.dialogFormVisible = false;
        this.init();
      });
    },
    quxiao() {
      this.dialogFormVisible = false;
      this.in();
    },
    in() {
      this.form = {
        name: "",
        score: "",
        type: "",
        likeNum: "",
        readNum: "",
        address: "",
        score: "",
        len: "",
        tel: ""
      };
    },
    addd() {
      (this.dialogFormVisible = true), (this.isA = false);
    },
    init() {
      this.$axios({
        url: API.findRepair
      }).then(res => {
          this.app= res.data.data
        this.tableData = res.data.data;
      });
    },
    handleClick(tab, event) {
    },
    add() {
      this.dialogFormVisible = false;
      this.$axios({
        url: API.addRepair,
        params: this.form
      }).then(res => {
          console.log(res);
          
        if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
          this.init();
          this.form = "";
        } else {
          this.$message({
            message: res.data.info,
            type: "warning"
          });
        }
      });
    },
    del(id) {
      this.$axios({
        url: API.delRepair,
        method: "get",
        params: { id: id }
      });
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(rst => {
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.init();
      });
    },
    find(id) {
      this.dialogFormVisible = true;
      this.isA = true;

      this.$axios({
        url: API.findRepair,
        params: { id: id }
      }).then(res => {
        this.form = res.data.data[0];
      });
    },
    deldel(id) {
      this.$axios({
        url: API.delRepairComment,
        method: "get",
        params: { id: id }
      });
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(rst => {
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.init();
      });
    },
  },
  mounted() {
    this.init();
    this.$axios({
        url:API.findRepairComment,
    }).then(res=>{
        console.log(res);
        this.repair=res.data.data
    }),
     this.getComment({})
  },
  watch:{
    value(){
      this.getComment({
        repairId:this.value
      })
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.el-tabs {
  width: 90%;
  margin: auto;
}
.el-tabs .el-select{
    width 80%
    margin 0 10%
}
</style>