<template>
<div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="家政banner" name="first">
        <el-button type="text" @click="addd()">添加</el-button>

<el-dialog title="添加家政banner" :visible.sync="dialogFormVisible"  v-if="activeName=='first'">
  <el-form :model="user">
    <el-form-item label="图片" :label-width="formLabelWidth">
      <el-input v-model="user.img" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="add()">确 定</el-button>
  </div>
</el-dialog>

        <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" label="序号" width="350"></el-table-column>
                <el-table-column prop="img" label="图片路径" sortable width="350">
<!--插入图片链接的代码-->
<template slot-scope="scope">
<img :src="scope.row.img" alt style="width: 50px;height: 50px" />
</template>
</el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
    </el-tab-pane>
    <el-tab-pane label="人员管理" name="second">
     <el-button type="text" @click="dialogFormVisible = true">添加</el-button>
<el-dialog title="添加家政人员" :visible.sync="dialogFormVisible" v-if="activeName=='second'">
  <el-form :model="form">
    <el-form-item label="姓名" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="年龄" :label-width="formLabelWidth">
      <el-input v-model="form.age" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="电话" :label-width="formLabelWidth">
      <el-input v-model="form.tel" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="资格认证" :label-width="formLabelWidth">
      <el-checkbox-group v-model="form.qualification">
    <el-checkbox label="身份证"></el-checkbox>
    <el-checkbox label="学位证"></el-checkbox>
    <el-checkbox label="健康证"></el-checkbox>
    <el-checkbox label="上岗证"></el-checkbox>
    <el-checkbox label="母婴护理师证"></el-checkbox>
    <el-checkbox label="催乳师证"></el-checkbox>
    <el-checkbox label="产后恢复师证"></el-checkbox>
    <el-checkbox label="助理家政管理师证"></el-checkbox>
    <el-checkbox label="家政管理师证"></el-checkbox>
    <el-checkbox label="高级家政管理师证"></el-checkbox>
  </el-checkbox-group>
    </el-form-item>
    <el-form-item label="服务项目" :label-width="formLabelWidth">
      <el-checkbox-group v-model="form.type">
    <el-checkbox label="保姆"></el-checkbox>
    <el-checkbox label="月嫂"></el-checkbox>
    <el-checkbox label="钟点工"></el-checkbox>
    <el-checkbox label="保洁"></el-checkbox>
    <el-checkbox label="家电精洗"></el-checkbox>
    <el-checkbox label="家居保养"></el-checkbox>
    <el-checkbox label="新剧开荒"></el-checkbox>
  </el-checkbox-group>
    </el-form-item>
    <el-form-item label="学历" :label-width="formLabelWidth">
      <el-input v-model="form.edu" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="工作年限" :label-width="formLabelWidth">
      <el-input v-model="form.year" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="级别" :label-width="formLabelWidth">
      <el-input v-model="form.vNum" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="价格" :label-width="formLabelWidth">
      <el-input v-model="form.price" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="城市" :label-width="formLabelWidth">
      <el-input v-model="form.city" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="经验" :label-width="formLabelWidth">
      <el-input v-model="form.experience" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="点赞数量" :label-width="formLabelWidth">
      <el-input v-model="form.likeNum" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="关注人数" :label-width="formLabelWidth">
      <el-input v-model="form.readNum" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="距离" :label-width="formLabelWidth">
      <el-input v-model="form.len" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="自我评价" :label-width="formLabelWidth">
      <el-input v-model="form.info" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="免冠照片" :label-width="formLabelWidth">
      <el-input v-model="form.img" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="quxiao()">取 消</el-button>
    <el-button type="primary" @click="add1()" v-if="!isA">确 定</el-button>
    <el-button type="primary" @click="add2()"v-else>修改</el-button>
  </div>
</el-dialog>
   <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in leixing"
      :key="item.value"
      :label="item"
      :value="item">
    </el-option>
  </el-select>
 <el-table :data="tableData1" height="250" border style="width: 100%">
    <el-table-column type="index" label="序号" width="140"></el-table-column>
    <el-table-column prop="name" label="名称" width="140"></el-table-column>
    <el-table-column prop="tel" label="电话" width="160"></el-table-column>
    <el-table-column prop="price" label="价格" width="160"></el-table-column>
    <el-table-column prop="age" label="年龄" width="140"></el-table-column>
    <el-table-column prop="edu" label="学历" width="140"></el-table-column>
    <el-table-column prop="type" label="服务类型" width="160"></el-table-column>
     <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="cha(scope.row.id)">查看</el-button>
          <el-button size="mini" type="danger" @click="del2(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    </el-tab-pane>
  </el-tabs>
</div>
</template>
<script>
import API from '../common/js/API'
export default {
    data() {
      return {
        leixing:[],
        activeName: 'first',
         isA: false,
        dialogTableVisible: false,
        dialogFormVisible: false,
        user: {
          img: '',
        },
        form: {
          name: '',
          type:[],
          age:'',
          edu:'',
          year:'',
          vNum:'',
          price:'',
          city:'',
          experience:'',
          readNum:'',
          likeNum:'',
          len:'',
          tel:'',
          qualification:[],
        },
        formLabelWidth: '120px',
        options:[],
        tableData:[],
        tableData1:[],
        value:''
      };
    },
    methods: {
      quxiao(){
        this.dialogFormVisible = false
        this.in()
         this.isA = false;
      },
      in(){
        this.form={
           name: '',
          type:[],
          age:'',
          edu:'',
          year:'',
          vNum:'',
          price:'',
          city:'',
          experience:'',
          readNum:'',
          likeNum:'',
          len:'',
          tel:'',
          qualification:[],
        }
      },
      add2(){
        this.$axios({
          url:API.updateHomeWorker,
          params:this.form,
        }).then(res=>{
          console.log(res);
          
          this.$message({
          message: res.data.info,
          type: "success"
        });
        this.init1()
        this.in(),
        this.dialogFormVisible = false;
          this.isA = true;
        })
      },

      addd(){
        this.dialogFormVisible = true
        // this.isA = true;

      },
      cha(id){
        this.dialogFormVisible = true
        this.isA = true;
        this.$axios({
          url:API.findHomeWorker,
          params:{id:id}
        }).then(res=>{
          console.log(res);
          
          // this.form=res.data.data[0]
          // this.form.type=JSON.parse(this.form.type);
          // this.form.qualification=JSON.parse(this.form.qualification)

          this.form = res.data.data[0];

          if (this.form.type.indexOf('[')==-1) {
            this.form.type=this.form.type.replace("\"","").split(',');
           this.form.qualification=this.form.qualification.replace("\"","").split(',');
                } else {
              this.form.type = JSON.parse(this.form.type);
       this.form.qualification = JSON.parse(this.form.qualification);
       }
        })
      },
      del2(id) {
      this.$axios({
        url: API.delHomeWorker,
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
        this.init1();
      });
    },
      init1(params){
        this.$axios({
          url:API.findHomeWorker,
          params:params
        }).then(res=>{
      
          this.tableData1=res.data.data
          
        })
      },
      init(){
this.$axios({
            url:API.homeBanner,
        }).then(res=>{
            this.tableData=res.data.data
            
        })
      },
      handleClick(tab, event) {
      },
      add(){
          this.$axios({
            url:API.addHomeBanner,
            params:this.user
          }).then(res=>{
            console.log(res);
            this.dialogFormVisible = false
            this.user=''
            this.init()
          })
      },
       del(id) {
      this.$axios({
        url: API.delHomeBanner,
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
      add1(){
        this.dialogFormVisible = false
        this.$axios({
          url:API.addHomeWorker,
          params:this.form,
        }).then(res=>{
         this.$message({
          message: res.data.info,
          type: "success"
        });
         this.init1();
        this.dialogFormVisible = false;
        
        })
      },
    },
    mounted(){
        this.init()
        this.init1()
        this.$axios({
          url:API.getHomeType,
        }).then(res=>{
          console.log(res);
          this.leixing=res.data.type
          
        })
    },
    watch:{
    value(){
      this.init1({
        type:this.value
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
.el-tabs {
  width: 90%;
  margin: auto;
}
.el-select{
    width 80%
    margin 0 10%
}
.el-table{
  margin-top 30px
}
</style>