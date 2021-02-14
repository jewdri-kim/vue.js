<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearAll">Clear All</span>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods : {
    clearAll(){
      this.$emit('removeAll');
    }
  }
}
</script>

<style>
.clearAllContainer{width:8.5rem;height:50px;line-height:50px;background:white;border-radius:5px;margin:0 auto;}
.clearAllBtn{color:#e20303;display:block;}
</style>
