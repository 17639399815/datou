<template>
  <div class="box">
    <div class="right">
      <span>范氏集团后台管理系统</span>
      <b style="float:right">{{name}}</b>
      <el-button type="warning" @click="tuichu">退出登录</el-button>
    </div>
  </div>
</template>
<script>
import API from "../common/js/API";
export default {
  data() {
    return {
      name:''
    }
  },
  methods: {
    tuichu() {
      this.$axios({
        url: API.exit
      }).then(res => {
        // localStorage.removeItem('zhanghao')
        // sessionStorage.removeItem('type')
        this.$message({
          message: res.data.info,
          type: "success"
        });
        this.$router.push('/login')
      });
    }
  },
  mounted () {
    this.name=localStorage.getItem('zhanghao')
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.box {
  height: 80px;
  text-align: center;
  background: #ff8247;

  span {
    display: inline-block;
    font-size: 30px;
    line-height: 80px;
    color: $color4;
  }

  >>>.el-button {
    margin-top: 20px;
    float: right;
    margin-right: 40px;
  }
  .right b{
    line-height 80px
    position relative
    right 300px
    color #ffffff
    font-size 40px
  }
}
</style>