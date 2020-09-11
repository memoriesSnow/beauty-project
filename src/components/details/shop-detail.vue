<template>
    <div class = 'shop_detail'>
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
    </div>
</template>
<script>
import { listObj } from '../../server'
import { Toast } from 'vant'
export default {
    name:'shop_detail',
    data(){
        return{
            params:this.$route.params.id*1,
            imglist:[],
            picInfo:[],
            comment:'',
            commentss:[]
        }
    },
    filters:{
        formatDate(v){
            return v.slice(0,10) + v.slice(11,18)
        },
    },
    methods:{
        onClickLeft(){
           window.history.back()
        },
        getPictures(){
            listObj.getImages(this.params).then(res=>{
                this.imglist = res.message
                console.log(this.imglist)
            })
        },
        getInfo(){
            listObj.getImageInfo(this.params).then(res=>{
                this.picInfo = res.message
                console.log(this.picInfo)
            })
        },
        comments(keys){
            console.log(keys)
            listObj.comment(this.params,keys).then(res =>{
                console.log(res)
                Toast.success('评论成功')
                location.href = location.href
            })
        },
        getcomments(){
            listObj.getComment(this.params*1,1).then(res =>{
                console.log(res)
                this.commentss = res.message
            })
        }
    },
    mounted(){
        console.log(this.params)
        this.getPictures()
        this.getInfo()
        this.getcomments()
    }
}
</script>
<style lang="stylus" scoped>
.shop_detail
    font-size 0.2rem
    padding .05rem
    .aa 
        background blue
    .p1
        color #3AAAFF
        font-size 16px
        font-weight bold
        margin .2rem auto
        text-align center
    .p2
        width 100%
        color #8F8F94
        font-size 14px
        span 
            float right
    .content
        font-size 14px
        color #8F8F94
        p
        line-height 22px
        margin-bottom .2rem
    .comment
        hr
            margin .1rem 0
        textarea
            width calc(100% - .2rem)
            height 1rem
            padding .1rem
            font-size 16px
        button 
            width 100%
            height .4rem
            background #26A2FF
            color #fff
            border none
            margin-top .1rem
            font-size 16px
        .info
            margin-bottom .2rem
            a
                width 2rem
                img
                    margin .05rem
                    width 30%
                    box-shadow: 0 0 8px #999;
            .content
                line-height .3rem
                font-size 13px
                color #000
    .pinglun
        font-size 13px
        .gray
            background #CCCCCC
            padding .1rem 0
        .white
            padding .1rem .2rem


</style>