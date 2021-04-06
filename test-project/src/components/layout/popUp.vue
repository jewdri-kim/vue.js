<template>
    <transition name="page-animation" appear disappear>
      <div class="pop-layer" :visible="visible" v-if="visible">
        <div class="dim"></div>
        <div class="pop-wrap">
          <div class="pop-content">
              <slot name="header"></slot>
              <slot></slot>
          </div>
          <button class="btn-close" @click="close">팝업닫기</button>
        </div>
      </div>
        
    </transition>
</template>

<script>
export default {
  name: 'BlogView',
  props: {
    visible :{}
  },
  data() {
    return {

    }
  },
  methods: {
    close(){
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
  .pop-layer .pop-wrap{
    transform:translate(-50%,-50%);
    border-radius:50px;
    padding:30px;
  }
  .pop-layer .btn-close{left:initial;bottom:initial;top:0;right:-80px;}
  .pop-content dl{line-height:30px;font-size:16px;}
  .pop-content dl dt{font-size:20px;font-weight:600;}
  .pop-content dl dd{margin-top:10px;}
</style>
