<template>
    <div class = 'list'>
       list组件
       <div class = 'nav'>
           <dg :listobj="list"></dg>
       </div>
    </div>
</template>
<script>
import dg from './dg'
import { listObj } from '../../server'
export default {
    name:'list',
    components:{dg},
    data(){
        return{
            list:[]
        }
    },
    methods:{
        getLists(){
            listObj.getList().then(res =>{
                console.log(res)
                this.list = res
            })
        }
    },
    mounted(){
        this.getLists()
    }
}
</script>
<style lang="stylus">
.list
    font-size 24px
    .nav 
        width 100%
        height 4rem
</style>