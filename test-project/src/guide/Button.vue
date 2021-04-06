<template>
  <div id="guide">
    <Navi />
    
    <div class="guide-content">
        <h2 class="guide-title">BUTTON</h2>


        <h3 class="guide-title2">BUTTON</h3>
        
        <div class="btn-wrap">
            <a href="#" class="btn-type">확인<i class="icon-check"></i></a>
        </div>
        <div class="btn-wrap">
            <a href="#" class="btn-type v2">확인</a>
        </div>
        <div class="btn-wrap">
            <a href="#" class="btn-type v3">확인</a>
        </div>
        <div class="btn-wrap">
            <a href="#" class="btn-type disabled">확인</a>
        </div>
        <div class="btn-wrap">
            <a href="#" class="btn-type2">확인</a>
        </div>
        <div class="btn-wrap">
            <a href="#" class="btn-type btn-s v2">확인</a>
            <a href="#" class="btn-type btn-s">확인</a>
        </div>
        <div class="btn-wrap">
            <a href="#" class="btn-type2">동의<i class="icon-arrow"></i></a>
        </div>

        <h3 class="guide-title2">TAB</h3>
        <div class="tab-wrap2">
            <ul class="tab-type js_tab">
                <li class="active"><a href="#">일반</a></li>
                <li><a href="#">미성년</a></li>
                <li><a href="#">외국인(Foreigner)</a></li>
            </ul>
            <br><br>
            <ul class="tab-type js_tab">
                <li class="active"><a href="#">일반</a></li>
                <li class="disabled"><a href="#">미성년</a></li>
            </ul>
        </div>
    </div>
  </div>
</template> 
<script>
import Navi from '../guide/Navi.vue'

export default {
  name: 'Button', 
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

