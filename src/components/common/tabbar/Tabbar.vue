<template>
  <div id="TabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
#TabBar{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f6f6f6;
    box-shadow: 0 -1px rgba(100, 100, 100, 0.1);
  }
</style>
