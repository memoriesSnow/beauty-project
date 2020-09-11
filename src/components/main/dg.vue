<template>
    <div class = 'list'>
        <div v-for="item in listobj" :key='item.name' class='list-item'>
            <div class= 'item-name'>
                <van-icon :name='item.icon'/>
                <span>{{ item.name }}</span>
            </div>
            <div v-if="item.children" class= 'children-item'>
                <dg :listobj="item.children"></dg>
            </div>  
        </div>
    </div>
</template>
<script>
export default {
    name:'dg',
    props:['listobj']
}
</script>
<style lang="stylus">
.dg
    width 100%
    height auto
    .list-item
        width 100%
        height .4rem
        padding-left .2rem
        .item-name
         height .4rem
</style>