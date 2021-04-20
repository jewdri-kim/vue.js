<template>
  <transition name="slide" appear disappear>
  <div class="todo content">
    <h1>This is an todo page</h1>
    <todo-list
        :columns="listColumn"
        :listData="todoList"
        @delete="deleteTodo"
    />
  </div>
  </transition>
</template>

<style lang="scss" scoped>
  h1{color:#4229bc;}
  .content{height:720px;}
</style>

<script>
import { mapState, mapActions } from "vuex"
import TodoList from '@/components/board/TodoList.vue';

export default {
  name: 'Todo',
  components: {
    TodoList
  },
  data(){
    return {
        listName : '할일',
        listColumn: [
          {
            name: '할일',
            eval: 'title',
            width: ''
          },
          {
            name: '날짜',
            eval: 'date',
            width: 'width:200px' 
          },
          {
            name: '완료',
            eval: 'isEnd',
            width: 'width:80px' 
          }
        ],
        view: {
          data:{
          },
          visible: false,
        }
    }
  }, 
  computed : {
      ...mapState(['todoList'])
  },
  methods:{
    //...mapActions(['completedToDo']),
    checkTodo(item) {
        console.log(item);
    },
    deleteTodo(item){
        console.log(item);
    }
  }
}
</script>