<template>
  <div id="guide">
    <Navi />
    <div class="guide-content">
		<h2 class="guide-title">COLOR</h2>

		<div class="guide-box color">
			<ul>
				<li></li>
				<li></li>
			</ul>
			
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
	</div>
  </div>
</template> 
<script>
import Navi from '../guide/Navi.vue'

export default {
  name: 'Color', 
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

