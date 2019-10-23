<template>
<div class="left">
    <router-link to="/index/guanliyuan" active-class="select" v-if="see==0">管理员管理</router-link>
    <router-link to="/index/banner" active-class="select" v-if="see==1">banner管理</router-link>
    <router-link to="/index/jiajiao" active-class="select" v-if="see==1">家教管理</router-link>
    <router-link to="/index/shuizhan" active-class="select" v-if="see==1">水站管理</router-link>
    <router-link to="/index/weixiu" active-class="select" v-if="see==1">维修管理</router-link>
    <router-link to="/index/jiazheng" active-class="select" v-if="see==1">家政管理</router-link>
    <router-link to="/index/xiugaipass" active-class="select" v-if="see==1">密码管理</router-link>
</div>
</template>
<script>
import API from '../common/js/API'
export default {
    data() {
        return {
            see:'',
        }
    },
    mounted () {
        this.see=sessionStorage.getItem('type')
    }
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
.left{
    width 200px;
    a{
        color black
        display block
        text-align center
        line-height 40px     
    }
    .select{
        background #ff8247 
        color white;
    }
}
</style>