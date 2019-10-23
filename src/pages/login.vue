<template>
  <div class="box">
    <div class="wrap">
      <h3>登录</h3>
      <el-select v-model="user.type" placeholder="请选择" class="xuan">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input v-model="user.name" placeholder="请输入内容"></el-input>
      <el-input v-model="user.pass" placeholder="请输入密码"></el-input>
      <el-button type="primary" @click="denglu">登录</el-button>
    </div>
  </div>
</template>
<script>
import API from "../common/js/API";
export default {
  data() {
    return {
      options: [
        {
          value: "0",
          label: "超级管理员"
        },
        {
          value: "1",
          label: "普通管理员"
        }
      ],
      value: "",
      user:{
        name:'',
        pass:'',
        type:''
      }
    };
  },
  methods:{
    denglu(){
      this.$axios({
        url:API.login,
        method:'post',
        data:this.user
      }).then(res=>{
        localStorage.setItem('zhanghao',this.user.name)
        sessionStorage.setItem('type',res.data.type)
        console.log(res);
        if(res.data.isok){
          this.$router.push('/index')
           this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
        }else{
          this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
        }
        
      })
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.box {
  width: 100vw;
  height: 100vh;
  background: $color1;
}

.wrap {
  text-align: center;
  width: 400px;
  height: 300px;
  background: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 20px;
}

.wrap h3 {
  text-align: center;
  font-size: 35px;
  color: $color1;
  margin-top: 10px;
}

.xuan {
  width: 80%;
  margin: 10px;
}

.el-input {
  width: 80%;
  margin: 10px;
}
</style>