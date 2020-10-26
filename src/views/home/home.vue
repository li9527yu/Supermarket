<template>
  <div id="home">
    <nav-bar class="home-nav"></nav-bar>
    <scroll class="content" ref="scroll" 
            :probe-type="3"
            :pull-up-load="true" 
            @scroll="contentscroll"
            @pullingup="loadMore">
        <home-swiper :banners="banners" />
        <recommend-view :recommends="recommend" />
        <feature-view />
        <tab-control class="tab-control" 
                      @itemClick="itemClick"
                      :titles="['流行','新款','精品']"/>
        <goods-list :goods="goodsList[currentType].list" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShow" />
  </div>
</template>

<script>

import HomeSwiper from './ChildComps/HomeSwiper'
import RecommendView from './ChildComps/RecommendView'
import FeatureView from './ChildComps/FeatureView'

import NavBar from '@/components/common/navBar/NavBar'
import TabControl from '@/components/content/TabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import Scroll from '@/components/common/scroll/Scroll'
import BackTop from '@/components/content/BackTop/BackTop';

import {getHomeMultidata,getHomeData} from '@/network/home'

export default {
    name:'home',
    components:{
      NavBar,
      TabControl,
      Scroll,
      GoodsList,
      HomeSwiper,
      RecommendView,
      FeatureView,
      BackTop
    },
    data(){
      return{
        // result:null
        banners:[],
        recommend:[],
        goodsList: {
          'pop': {page: 1, list: []},
          'new': {page: 1, list: []},
          'sell': {page: 1, list: []}
        },
        currentType:'pop',
        isShow:false
      }
    },
    created(){
      //1.请求多个数据
      this.getHomeMultidata()
      // console.log(this.result);
      
      //2.获得商品数据
      this.getHomeProducts('pop')
      this.getHomeProducts('sell')
      this.getHomeProducts('new')

      //3.监听item图片的加载
      this.$bus.$on('itemImageLoad',()=>{
        // console.log("111");
        this.$refs.scroll.refresh()
      })
    },
    mounted(){},
    methods:{
      /*
      网络请求相关的方法
      */
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.banners=res.data.banner.list
          this.recommend=res.data.recommend.list
        })
      },
      getHomeProducts(type) {
          const page=this.goodsList[type].page+1
      getHomeData(type,page).then(res => {
        this.goodsList[type].list.push(...res.data.list)
        this.goodsList[type].page += 1

        this.$refs.scroll.finishPullUp()
      })
    },



    /**
     * 事件监听相关的方法
     */
    itemClick(index){
        switch(index){
          case 0:
            this.currentType='pop'
            break
          case 1:
            this.currentType='new'
            break
          case 2:
            this.currentType='sell'
            break
        }
    },

    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    
    Iscroll(position){
      // console.log(position);
      // this.isShow=(-position.y)>1000
    },

    contentscroll(pos){
      this.isShow=(-pos.y)>1000
    },

    loadMore(){
      // console.log("上拉加载更多");
      this.getHomeProducts(this.currentType)
    }
    
    }
}
</script>

<style scoped>
  #home{
    position: relative;
    height: 100vh;
  }
  .home-nav{
    /* background-color: var(--color-tint); */
    background-color: #ff8198;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 42px;
    line-height: 40px;
    z-index: 9;
    background-color: #fff;
  }
  .content{
    /* height: calc(100vh-93px);
    overflow: hidden;
    margin-top: 44px; */
    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0;

  }
</style>