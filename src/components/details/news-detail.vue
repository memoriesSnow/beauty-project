<template>
    <div class = 'news_detail'>
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
        <div class ='down'>
            <p class = 'p1'>{{ news.title }}</p>
            <p class = 'p2'>发布时间：{{ news.add_time }}
                <span>点击{{ news.click }}次</span>
            </p>
        </div>
        <hr/>
        <div v-html = news.content class= 'content'></div>
        <div class = 'comment'>
            <p>发表评论</p>
            <hr/>
            <div style="margin-top:10px">
                <textarea v-model ="comment" placeholder="请输入你要bb的文字"/>
                <button @click ="comments(comment)">发表评论</button>
            </div>
        </div>
        <div class ='pinglun' v-for="(item,index) in commentss" :key="item.id">
            <div class='gray'>
                第{{ index+1 }}楼 用户：{{ item.user_name }}
                发表时间{{ item.add_time | formatDate }}
            </div>
            <div class='white'>{{ item.content }}</div>
        </div>   
    </div>
</template>
<script>
import { Toast } from 'vant'
import { listObj } from '../../server'
export default {
    name:'news_detail',
    data(){
        return{
            params:this.$route.params.id*1,
            news:[],
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
        getnewsList(){
            listObj.getnew(this.params).then(res =>{
                // console.log(res.message)
                this.news = res.message[0]
            })
        },
        onClickLeft(){
           window.history.back()
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
        this.getnewsList()
        this.getcomments()
    }
}
</script>
<style lang="stylus" scoped>
.news_detail
    font-size 0.2rem
    padding .05rem
    .aa 
        background blue
    .p1
        color red
        font-size 16px
        font-weight bold
        margin .2rem auto
        text-align center
    .p2
        width 100%
        color blue
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
        p
            font-size 18px
            font-weight bold
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
    .pinglun
        font-size 13px
        .gray
            background #CCCCCC
            padding .1rem 0
        .white
            padding .1rem .2rem

</style>