<template>
<div>
<div class="body">
  <div class="box">
    <div>
      <router-view></router-view>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  
}
</script>
<style lang="less" scoped>
  .body{
    width: 100%;
    height: 100%;
  }
  .box{
    width: 600px;
    height: 400px;
    border: solid 2px red;
    margin: 0 auto;
    border-radius: 15px;
    margin-top: 10%;
    position: relative;
    .cbut{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 20%;
      display: flex;
      justify-content: space-between; 
      align-items: center;
      button{
        width: 20%;
        height: 50%;
        margin-left: 10%;
        margin-right: 10%;
      }
    }
  }
</style>