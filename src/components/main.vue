<template>
    <div class = 'main'>
        <div class = 'loop'>
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for ="(item,index) in images" :key="index">
                    <img :src ="item.img"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class = 'hrefs'>
            <van-grid :column-num="3">
                <router-link v-for="(value,index) in arr" :key="index" :to="{path:value.path}">
                    <van-grid-item :icon="value.icon" :text="value.text" />
                </router-link>
            </van-grid>
        </div>
    </div>
</template>
<script>
import { listObj } from '../server'
export default {
    data(){
        return{
           images:[],
           arr:[
               {
                   path:'/news',
                   icon:'location-o',
                   text:'资讯'
               },
               {    
                   path:'/photo',
                   icon:'photo-o',
                   text:'图片'
               },
               {
                   path:'/shop',
                   icon:'cart-o',
                   text:'购买'
               },
               {
                    path:'/list',
                   icon:'list-o',
                   text:'列表'
               }
           ],
        }
    },
    methods:{
        getList(){
            listObj.getloop().then(res=>{
                this.images = res.message
            })
        } 
    },
    mounted(){
        this.getList()
    }
}
</script>
<style lang="stylus" scoped>
.main
    width 100%
    height 100%
    .loop
        width 100%
        img 
            height 100%
            width 100%
    .hrefs 
        width 100%
        height 1rem
        .van-grid
            width 80%
            height 1rem
            margin 0 auto
            a
                width 30%
                height 100%
                border solid 1px
                .van-grid-item
                    width 100%
                    height 100%
                


</style>