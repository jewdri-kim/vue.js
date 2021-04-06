<template>
  
  <transition  name="slide" appear disappear>
  <div class="home content">
    <div class="home-content">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Hello, Welcome to Vue Project"/>
    </div>
  </div>
  </transition>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Main',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
  .home{text-align:center;}
  .home:after{display:inline-block;content:'';vertical-align:middle;height:70%;}
  .home-content{display:inline-block;height:720px;vertical-align:middle;}
</style>