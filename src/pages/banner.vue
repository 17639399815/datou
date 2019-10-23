<template>
  <div>
    <el-button type="text" @click="add()">添加banner</el-button>

<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="图片" :label-width="formLabelWidth">
      <el-input v-model="form.img" autocomplete="off" placeholder="图片"></el-input>
    </el-form-item>
    <el-form-item label="描述" :label-width="formLabelWidth">
      <el-input v-model="form.des" autocomplete="off" placeholder="描述"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="addto()">确 定</el-button>
  </div>
</el-dialog>

    <el-table :data="tableData" height="250" border>
      <el-table-column type="index" label="序号" width="180"></el-table-column>
    <el-table-column prop="img" label="图片路径" sortable width="180">
<!--插入图片链接的代码-->
<template slot-scope="scope">
<img :src="scope.row.img" alt style="width: 50px;height: 50px" />
</template>
</el-table-column>
      <el-table-column prop="des" label="描述" width="180"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import API from "../common/js/API";
export default {
    data() {
        return {
            tableData: [],
        dialogFormVisible: false,
        form: {
          img:'',
          des: '',
        },
        formLabelWidth: '120px'
        }
    },
     methods: {
         init(){
               this.$axios({
             url:API.banner,
             method:'get'
         }).then(res=>{
             console.log(res);
             if(res.data.isok){
                 this.tableData = res.data.data;
             }
             
         })
         },

         del(id) {
      this.$axios({
        url: API.delBanner,
        params: {id:id}
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
    },
    add(){
      this.dialogFormVisible = true
    },
    addto(){
      this.dialogFormVisible = false
      this.$axios({
        url:API.addBanner,
        params:this.form
      }).then(res=>{
         if (res.data.isok) {
          this.$message({
            message:res.data.info,
            type: "success",
          });
          this.init()
        } else {
          this.$message({
            message:res.data.info,
            type: "warning"
          });
        }
      })
    }

     },
     mounted(){
       this.init()
     }
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