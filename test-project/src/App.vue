<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer /> 
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue' 

export default {
  name: 'App', 
  components: { 
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  @import '~@/assets/css/common';

  .content{
    width:100%;
    
    padding:20px;
    background:#d8d8d8;
  }
  .page{
    background:#d1bdf6;
  }
  .about{
    background:#68c0c0;
  }
  .event{
    background:#fbedfc;
  }
  .notice{
    background:#eee;
  }
  .page-animation-enter-active {
    animation: fade-in .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .page-animation-leave {
    
    animation: fade-in 0.5s reverse;
  }
  
  .slide-enter-active {
    -moz-transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
    -o-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
  }

  .slide-leave-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }

  .slide-enter-to {
    max-height: 600px;
    overflow: hidden;
  } 
  .slide-leave {
    max-height: 90%;
    overflow: hidden;
  }

  .slide-enter, .slide-leave-to {
    overflow: hidden;
    max-height: 0;
  }

  
  @keyframes fade-in {
    0% {
      opacity:0;
    }
    50% {
      opacity:0.5;
    }
    100% {
      opacity:1;
    }
  }
  
  @keyframes left-in {
    0% {
      transform: translate(100%,0);
    }
    50% {
      transform:  translate(50%,0);
    }
    100% {
      transform: translate(0,0);
    }
  }
  
  @keyframes left-out {
    0% {
      transform: translate(0,0);
    }
    50% {
      transform:  translate(-50%,0);
    }
    100% {
      transform: translate(-100%,0);
    }
  }

  footer{width:100%;text-align:center;line-height:100px;background:#fff;color:#42b983;font-weight:600;}
</style>
