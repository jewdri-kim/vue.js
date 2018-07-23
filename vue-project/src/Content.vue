<template>
  <div class="content">
      <div class="inner">
        <p>{{msg}}</p>
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </div>
  </div>
</template>


<script>


export default {
  name: 'Content',
  data () {
    return {
      msg: 'TO DO LIST'
    }
  },
  components:{
    'TodoInput' : TodoInput,
    'TodoList': TodoList
  }
}


</script>

<style>

</style>
