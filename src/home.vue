<template>
  <div class="home">
    <div class = 'header'>
      <van-sticky>
        <van-nav-bar
          title="商城项目"
        />
      </van-sticky>
    </div>
      <div class = 'content'>
        <router-view/>
      </div>
      <div class = 'footer'>
        <van-tabbar v-model="active">
          <van-tabbar-item v-for="item in routes" :key="item.id" :icon="item.icon" :info ='item.count'>
            <router-link :to="item.path">{{ item.alias }}</router-link>
          </van-tabbar-item>
        </van-tabbar>
      </div>
  </div>
</template>
<script>
import { Toast } from 'vant'
export default {
   data(){
     return{
       routes:this.$router.options.routes[0].children,
       active:0
     }
   },
}
</script>

<style lang="stylus">
.home
  font-size 0.3rem
  height 100vh
  display flex
  flex-flow: column nowrap;
  width 100%
  .header
    width 100%
    .van-nav-bar
      color #fff
      background #26A2FF
  .content
    width 100%
    height 100%
    overflow-y auto
  .footer
    width 100%
</style>
