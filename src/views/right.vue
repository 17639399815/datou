<template>
<div class="right">
    <h1>{{$route.name}}</h1>
    <router-view></router-view>
</div>
</template>
<script>
import API from '../common/js/API'
export default {
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
.right{
    flex 1;
    background #ffffff;
    h1{
        font-size 30px
        color #ff8247
        margin 10px
    }
}
</style>