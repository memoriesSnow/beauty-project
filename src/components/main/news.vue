<template>
    <div class = 'news'>
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
         <van-nav-bar
                class = 'bb'
                title="新闻列表"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
         />
        <div v-for="item in news" :key="item.id" class ='box' @click="ToDetail(item.id)">
            <div class = 'left'>
                <img :src="item.img_url"/>
            </div>
            <div class ='right'>
                <p class = 'p1'>{{ item.title }}</p>
                <p class = 'p2'>发布时间：{{ item.add_time }}
                    <span>点击{{ item.click }}次</span> id:{{ item.id }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import { listObj } from '../../server'
export default {
    data(){
        return{
            news:[]
        }
    }  ,  
    methods:{
        getData(){
            listObj.getnewsList().then(res=>{
                this.news = res.message
                console.log(res)
            })
        },
        onClickLeft(){
           window.history.back()
        },
        ToDetail(id){
            this.$router.push({
                name:'news_detail',
                params:{
                    id
                }
            })
        }
    },
    mounted(){
        this.getData()
    }
}
</script>
<style lang="stylus" scoped>
.news
    width 100%
    height 100%
    font-size 12px
    .aa
        background #26A2FF
    .bb
        background #6A5ACD
    .box
        display flex
        padding 0.1rem
        .left
            margin-right 0.14rem
            img 
                width 0.42rem
                height 0.42rem
        .right
            width 100%
            .p1
                height 0.14rem
                font-weight bolder
                font-size 0.14rem
                overflow hidden
                margin-bottom 0.12rem
            .p2
                width 100%
                color blue
                span 
                    float right


</style>