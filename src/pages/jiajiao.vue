<template>
  <div>
    <template>
      <el-tabs v-model="name" @tab-click="handleClick">
        <el-tab-pane label="家教banner" name="first"></el-tab-pane>
        <el-tab-pane label="家教类型" name="second"></el-tab-pane>
        <el-tab-pane label="家教排行" name="third"></el-tab-pane>
      </el-tabs>
     <template>
  <el-button  type="primary" @click="open">点击打开 Message Box</el-button>
</template>



      <el-table :data="tableData1" height="250" border v-show="isshow==0">
          
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
          <el-button size="mini" type="danger" @click="del1(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table> 
<el-button size="mini" v-show="isshow==1">添加</el-button>
    <el-table :data="tableData2" height="250" border v-show="isshow==1">
        
      <el-table-column type="index" label="序号" width="180"></el-table-column>
    <el-table-column prop="img" label="图片路径" sortable width="180">
<!--插入图片链接的代码-->
<template slot-scope="scope">
<img :src="scope.row.img" alt style="width: 50px;height: 50px" />
</template>
</el-table-column>
      <el-table-column prop="type" label="类型" width="180"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="del2(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

<el-button size="mini" v-show="isshow==2">添加</el-button>
<el-table :data="tableData3" height="250" border v-show="isshow==2">
    
      <el-table-column type="index" label="序号" width="180"></el-table-column>
    <el-table-column prop="img" label="图片路径" sortable width="180">
<!--插入图片链接的代码-->
<template slot-scope="scope">
<img :src="scope.row.img" alt style="width: 50px;height: 50px" />
</template>
</el-table-column>
      <el-table-column prop="num" label="人数" width="180"></el-table-column>
 <el-table-column prop="img" label="图片路径" sortable width="180">
<!--插入图片链接的代码-->
<template slot-scope="scope">
<img :src="scope.row.img" alt style="width: 50px;height: 50px" />
</template>
</el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="del3(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    
    </template>
  </div>
</template>
<script>
import API from "../common/js/API";
export default {
  data() {
    return {
        
      name: "first",
       tableData1: [],
       tableData2: [],
       tableData3: [],
       isshow:'0',
       dialogFormVisible: false,
        form: {
          img:'',
          des: '',
        },
        formLabelWidth: '120px'
        }
  },
  methods: {
    handleClick() {
      switch (this.name) {
          case "first":
             this.isshow=0
             this.init1()
              break;
              case "second":
             this.isshow=1
             this.init2()
              break;
              case "third":
             this.isshow=2
             this.init3()
              break; 
      }
    },
    init1(){
        this.$axios({
          url:API.teacherBanner,
      }).then(res=>{
          this.tableData1=res.data.data
      })
    },
    init2(){
        this.$axios({
          url:API.teacherType,
      }).then(res=>{
          this.tableData2=res.data.data
      })
    },
    init3(){
        this.$axios({
          url:API.teacherTop,
      }).then(res=>{
          this.tableData3=res.data.data
      })
    },
       del1(id) {
      this.$axios({
        url: API.delTeacherBanner,
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
          this.init1();
        })  
    },
    del2(id) {
      this.$axios({
        url: API.delTeacherType,
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
          this.init2();
        })  
    },
    del3(id) {
      this.$axios({
        url: API.delTeacherTop,
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
          this.init3();
        })  
    },
    open() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });}
        
  },
  mounted(){
       this.init1()
        this.init2()
         this.init3()
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.el-tabs {
  width: 90%;
  margin-top: 30px;

  margin: 0 auto;
}

.el-button {
      margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 7px;
}
.el-table{
   width: 90%;
  margin: auto;
}
</style>