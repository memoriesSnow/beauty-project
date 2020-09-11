<template>
    <div class = 'shop'>
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
        <div class='container'>
            <div v-for="item in shoplist" :key="item.id" class='unit' @click='toDetail(item.id)'>
                <img :src="item.img_url"/>
                <h3>{{ item.title }}</h3>
                <div class ='ps'>
                    <p class='p1'>
                        <b>￥{{ item.sell_price }}</b>
                        <span>
                            {{ item.market_price }}
                        </span>
                    </p>
                    <p class='p2'>热卖中
                        {{ item.stock_quantity }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { listObj } from '../../server'
export default {
    name:'shop',
    data(){
        return{
            shoplist:[]
        }
    },
    methods:{
        getImg(){
            listObj.getShopInfo(1).then(res=>{   
                this.shoplist = res.message
                console.log(this.shoplist)
            })
        },
        onClickLeft(){
            window.history.back()
        },
        toDetail(id){
            this.$router.push({
                name:'shop_detail',
                params:{
                    id
                }
            })
        }
    },
    mounted(){
        this.getImg()
    }
}

</script>
<style lang='stylus' scoped>
.shop
    width 100%
    height auto
    .header
        .aa
            background #26A2FF
    .container 
        padding: 7px;
        width 100%
        display flex
        justify-content space-around
        flex-wrap: wrap;
        .unit
            width 48%
            font-size 14px
            box-shadow: 0 0 8px #ccc
            margin 3px 0
            padding 2px
            display flex
            flex-direction column
            justify-content space-between
            h3
                margin-top .05rem
                margin-bottom .05rem
            img 
                width 100%
            .ps
                background #EEE
                padding .1rem
                .p1
                    b
                        color #FF0000
                    span 
                        color #8F8F94
                        text-decoration blink

</style>
