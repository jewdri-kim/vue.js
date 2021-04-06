<template>
  <div id="guide">
    <Navi />
    <div class="guide-content">
	
	<h2 class="guide-title">ICON</h2>
	
	<h3 class="guide-title2">image</h3>
	
	<div style="padding:20px;background:#888">
		<i class="ico-lab"></i>
		<i class="ico-detail"></i>
		<i class="ico-aipicks"></i>
		<i class="ico-qr"></i>
		<i class="ico-phone"></i>
		<i class="ico-wait"></i>
		<i class="ico-graph"></i>
		<i class="ico-warning"></i>
		<i class="ico-reload"></i>
	</div>
	
	<h3 class="guide-title2">css</h3>
	
	<div style="padding:20px;background:#888">
		<i class="icon-arrow"></i>
		<i class="icon-arrow2"></i>
		<i class="icon-arrow3"></i>
		<i class="icon-arrow3 left"></i>
		<i class="icon-arrow3 down"></i>
		<i class="icon-arrow3 up"></i>
		<i class="icon-check"></i>
	
	</div>

	
</div>
  </div>
</template> 
<script>
import Navi from '../guide/Navi.vue'

export default {
  name: 'Icon', 
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

