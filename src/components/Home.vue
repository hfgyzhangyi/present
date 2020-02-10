<template>
  <div class="template">
    <top-nav></top-nav>
    <div class="pic-wrap">
      <img src="../assets/PC_h.jpg" class="background"/>
      <img src="../assets/mobile_h.jpg" class="background"/>
    </div>
    <div class="content-wrap">
      <img src="../assets/PC.jpg"/>
      <img src="../assets/mobile.jpg"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less">
@media screen and (max-width: 800px){
  .template{
    .content-wrap{
      width: 100%;
      overflow: hidden;
      img:nth-child(1){
          display: none;
      }
      img:nth-child(2){
          display: block;
          width: 100%;
      }
    }
    .pic-wrap{
      width: 100%;
      img:nth-child(1){
        display: none;
      }
      img:nth-child(2){
        display: block;
        width: 100%;
      }
    }
  }
}
@media screen and (min-width: 801px) and (max-width: 919px){
  .template{
    .content-wrap{
      width: 100%;
      overflow: hidden;
      img:nth-child(1){
          width: 100%;
          display: block;
      }
      img:nth-child(2){
          display: none;
      }
    }
    .pic-wrap{
      width: 100%;
      img:nth-child(1){
        display: block;
        width: 100%;
      }
      img:nth-child(2){
        display: none;
      }
    }
  }
}
@media screen and (min-width: 920px){
  .template{
    .content-wrap{
      width: 100%;
      overflow: hidden;
      img:nth-child(1){
          width: 100%;
          display: block;
      }
      img:nth-child(2){
          display: none;
      }
    }
    .pic-wrap{
      width: 100%;
      img:nth-child(1){
        display: block;
        width: 100%;
      }
      img:nth-child(2){
        display: none;
      }
    }
  }
}
</style>
