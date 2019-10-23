<template>
  <div>
    <el-button type="success" @click="addon()" class="btn">添加</el-button>
    <el-dialog title="添加|修改管理员" :visible.sync="$store.state.dialogFormVisible">
      <el-form>
        <el-form-item label=" 账号" :label-width="formLabelWidth" class="val">
          <el-input autocomplete="off" class="input" placeholder="请输入账号" v-model="user.name" :disabled="!dialogFormVisible"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" class="val">
          <el-input autocomplete="off" class="input" placeholder="请输入密码" v-model="user.pass" :disabled="!dialogFormVisible"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" :label-width="formLabelWidth" class="val" v-if="dialogFormVisible">
          <el-input autocomplete="off" class="input" id="le" placeholder="请输入密码" v-model="user.C" :disabled="!dialogFormVisible"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth" class="val">
          <el-input autocomplete="off" class="input" placeholder="请输入描述" v-model="user.des"></el-input>
        </el-form-item>
        <el-form-item label="时间" :label-width="formLabelWidth" class="val">
          <el-input type="date" autocomplete="off" class="input" v-model="user.time"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="$store.state.dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add()" v-if="dialogFormVisible">确 定</el-button>
        <el-button type="primary" @click="xiugai" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import API from "../common/js/API";
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "120px",
      user: {
        name: "",
        pass: "",
        des: "",
        time: ""
      },
      comfirm: "",
     
    };
  },
  methods: {
    find(e){
      this.dialogFormVisible=false;
      this.$axios({
        url: API.findManage,
        method: "post",
        data:{id:e}
      }).then(res => {
        console.log(res);
        if (res.data.isok) {
          this.user = res.data.data[0];
        }
      });
    },
      
    add() {
      this.$axios({
        url: API.addManage,
        method: "post",
        data: this.user
      }).then(res => {
       console.log(res);
        this.$store.state.dialogFormVisible = false;
        if (res.data.isok) {
          this.$message({
            message:res.data.info,
            type: "success",
          });
          this.$emit("tiaozhuan")
        } else {
          this.$message({
            message:res.data.info,
            type: "warning"
          });
        }
      });
    },
    addon(){
       this.user= {
        name: "",
        pass: "",
        des: "",
        time: ""
      }
        this.$store.dispatch("changA",(this.dialogFormVisible=true));
        this.dialogFormVisible=true;
    },
    xiugai(){
      this.$store.dispatch("changA",(this.dialogFormVisible=false));
        this.$axios({
            url:API.updateManage,
            method:'post',
             data:this.user
        }).then(res=>{
          console.log(res);
           this.$message({
            message:res.data.info,
            type: "success",
          });
            this.$emit("tiaozhuan") 
        })
    }
  },
};
</script>
<style scoped>
</style>