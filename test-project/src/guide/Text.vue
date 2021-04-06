<template>
  <div id="guide">
    <Navi />
    <div class="guide-content">
        
        <h2 class="guide-title">TITLE</h2>
        
        <p style="margin-bottom:20px;font-size:56px;font-weight:700;font-family:HelveticaNeue,AppleSDGothicNeo, sans-serif">134,510 가격 강조형</p>
        <p style="margin-bottom:20px;font-size:48px;font-weight:500;font-family:HelveticaNeue,AppleSDGothicNeo, sans-serif">아이폰 11</p>
        <p style="margin-bottom:20px;font-size:40px;font-weight:400">비교함 타이틀</p>
        <p style="margin-bottom:20px;font-size:32px;font-weight:700;font-family:HelveticaNeue, sans-serif">6.1inch</p>
        <p style="margin-bottom:20px;font-size:24px;font-weight:700">나에게 꼭 맞는 부가서비스를 선택하세요.</p>
        <p style="margin-bottom:20px;font-size:16px;font-weight:400;color:#959595;font-family:HelveticaNeue, sans-serif">SM-G977N_256GS</p>
        <p style="margin-bottom:20px;font-size:32px;font-weight:400;font-family:HelveticaNeue, sans-serif">48,600</p>
        
        
        <h2 class="guide-title">ETC</h2>
        
        <div class="state-box">
            <span class="state-type">이용중</span>
            <span class="state-type3">추천</span>
            <span class="state-type4">MY</span>
            <span class="state-type2">관심</span>
        </div>

        <div class="state-box">
            <span class="state-item">이용중</span>
            <span class="state-item active">동의 완료</span>
        </div>
    </div>
  </div>
</template> 
<script>
import Navi from '../guide/Navi.vue'

export default {
  name: 'Text', 
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

