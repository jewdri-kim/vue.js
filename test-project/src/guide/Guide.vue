<template>
  <div id="guide">
    <Navi />
    
    <div class="guide-content">
    가이드 페이지 
    </div>
  </div>
</template>

<script>
import Navi from '../guide/Navi.vue'

export default {    
  name: 'Guide', 
  components: {
    Navi
  }
}
</script>
<style lang="scss" scoped>
  @import '~@/assets/css/common';
  @import 'guide.scss';
  header{display:none;}
  footer{display:none;}
</style>
