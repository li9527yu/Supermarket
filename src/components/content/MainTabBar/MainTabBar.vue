<template>
  <tab-bar>
        <tab-bar-item path='/home' >
          <img slot="item-icon" src="@/assets/img/home/home.png" alt="">
          <img slot="item-icon-active" src="@/assets/img/home/home_active.png" alt="">  
          <div slot="item-text">首页</div>
        </tab-bar-item >

        <tab-bar-item path='/category'>
          <img slot="item-icon" src="@/assets/img/category/category.png" alt=""> 
          <img slot="item-icon-active" src="@/assets/img/category/category_active.png" alt=""> 
          <div slot="item-text">分类</div>
        </tab-bar-item>

        <tab-bar-item path='/shopcart'>
          <img slot="item-icon" src="@/assets/img/shopcart/shopcart.png" alt=""> 
          <img slot="item-icon-active" src="@/assets/img/shopcart/shopcart_active.png" alt=""> 
          <div slot="item-text">购物车</div>
        </tab-bar-item>

        <tab-bar-item path='/profile'>
          <img slot="item-icon" src="@/assets/img/profile/profile.png" alt=""> 
          <img slot="item-icon-active" src="@/assets/img/profile/profile_active.png" alt=""> 
          <div slot="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/Tabbar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'
export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style>

</style>