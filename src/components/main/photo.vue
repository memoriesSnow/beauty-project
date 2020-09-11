<template>
    <div class = 'photo'>
        <div class = 'header'>
            <van-sticky>
                <van-nav-bar
                class = 'aa'
                title="商城项目"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
                />
            </van-sticky>
        </div>
        <div class= 'imgNav'>
            <div class ='bb'>
                <span v-for="item in imgList" :key="item.id" href="#" @click="getData(item.id)">
                    {{ item.title }}
                </span>
             </div>
        </div>
        <div v-for="item in images" :key="(item.id+100)" class = 'content' @click="photoDetails(item.id)">
            <img :src="item.img_url"/>
            <div class='ps'>
                <p class='p1'>{{ item.title }}</p>
                <p class='p2'>{{ item.zhaiyao }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { Toast } from 'vant'

import { listObj } from '../../server'
export default {
    data(){
        return{
            imgList:[],
            images:[]
        }
    },
    methods:{
        getImages(){
            listObj.getImageNav().then(res =>{
                res.message.unshift({
                    id:0,
                    title:'全部'
                })
                this.imgList = res.message
            })
        },
        getData(id){
            listObj.getImageData(id).then(res =>{
                this.images = res.message
                console.log(this.images)
            })
        },
        onClickLeft(){
            Toast('返回')
            window.history.back()
        },
        photoDetails(id){
            this.$router.push({
                name:'photo_detail',
                params:{
                    id
                }
            })
        }
    },
    mounted(){
        this.getImages()
        this.getData(0)
    }   
}
</script>
<style lang="stylus" scoped>
.photo
    .header
        .aa
            background #26A2FF
    .imgNav
        width 100%
        font-size 16px
        overflow-x scroll
        margin-top .2rem
        .bb
            width 13rem
            margin-bottom .3rem
            span
                height .12rem
                padding .2rem
    .content
        width 98%
        text-align center
        font-size 16px
        position relative
        margin 0 auto
        .ps 
            text-align left
            position absolute
            bottom .1rem
            left 0
            color white
            .p1
                font-size 14px
                font-weight bold
                margin .1rem 0
            .p2
                font-size 12px
                line-height .2rem
        img 
            width 100%
</style>