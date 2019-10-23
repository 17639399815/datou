<template>
  <div>
    <el-form>
      <el-form-item label="账号" class="val">
        <el-input class="input"  v-model="user.name" placeholder="账号" :disabled="user.name!==''"></el-input>
      </el-form-item>
      <el-form-item label="原始密码" class="val">
        <el-input class="input" show-password v-model="user.oldpass" placeholder="请输入原始密码"></el-input>
      </el-form-item>
      <el-form-item label="新密码" class="val">
        <el-input class="input" show-password v-model="user.newpass" placeholder="请输入新密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" class="val">
        <el-input class="input" v-model="con" show-password placeholder="请输入确认密码"></el-input>
      </el-form-item>
      <el-button type="warning" @click="xiugai">修改</el-button>
    </el-form>
  </div>
</template>
<script>
import API from "../common/js/API";

 
export default {
  data() {
    return {
        user:{
            name:'',
            oldpass:'',
            newpass:'',
        },
  con:'',
    };
  },
  methods: {
      xiugai(){
        if(this.user.newpass==this.con){
              this.$axios({
              url:API.changePassManage,
              method:'post',
              data:this.user
          }).then(res=>{
              if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
          this.$router.push('/login')
        } else {
          this.$message({
            message: res.data.info,
            type: "warning"
          });
        }   
          })
        }else{
          this.$message.error('两次输入的密码不一样');
        }
      
      }
  },
  mounted () {
       this.user.name=localStorage.getItem('zhanghao')
  }
};
</script>
<style scoped>
.el-form-item{
    width:80%;
    margin: 0 auto;
}
.el-button{
    margin: 20px 40%;
}
</style>