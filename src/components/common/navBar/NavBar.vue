<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center">购物街</slot></div>
      <div class="right"><slot name="right"></slot></div>
      
  </div>
</template>

<script>
export default {
    name:"NavBar"
}
</script>

<style scoped>

.nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,0.1);
    color: #ffffff;
}
.left,.right{
    width: 60px;
    /* background-color: red; */
}
.center{
    /* background-color: blue; */
    flex: 1;
}
</style>