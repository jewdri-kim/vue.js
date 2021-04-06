<template>
    <div class="guide-nav">
        <h1><router-link to="/guide">SKT T PLACE</router-link></h1>
        <ul class="nav">
            <li><router-link to="/guide/color">color</router-link></li>
            <li><router-link to="/guide/text">text</router-link></li>
            <li><router-link to="/guide/button">button</router-link></li>
            <li><router-link to="/guide/form">form</router-link></li>
            <li><router-link to="/guide/icon">icon</router-link></li>
            <li><router-link to="/guide/layerpop">layerpop</router-link></li>
            <li><router-link to="/guide/message">message</router-link></li>
            <li><router-link to="/guide/chart">chart</router-link></li>
            <li><router-link to="/guide/page">페이지 전환 효과</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'Navi'
}
</script>
<style lang="scss" scoped>
  @import '~@/assets/css/common';
  @import 'guide.scss';
</style>