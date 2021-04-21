<template>
  <transition name="slide" appear disappear>
  <div class="todo content">
    <h1>This is an todo page</h1>
    
      <div class="form-item">
      <input-field
          v-model="addTodo.title"
          :inputLabel="할일"
          :inputId="todoTitle"
          :inputPlaceholder="입력"/>
      </div>
      <button @click="addTodoList()">입력</button>


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
import { mapState } from "vuex"
import TodoList from '@/components/board/TodoList.vue';
import InputField from '@/components/form/InputField.vue';

export default {
  name: 'Todo',
  components: {
    TodoList,
    InputField
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
        addTodo: {
          title:null,
          date: new Date(),
          isEnd : false
        }
    }
  }, 
  computed : {
      ...mapState(['todoList'])
      
  },
  beforeCreate() {
		this.$store.dispatch('initTodoList');
	},
  methods:{
    //...mapActions(['completedToDo']),
    checkTodo(item) {
        console.log(item);
    },
    addTodoList(){
      let item = this.addTodo;
      this.$store.dispatch('addToDoItem', {...item});
      this.addTodo.title = '';
    },
    deleteTodo(item){
        console.log(item);
    }
  }
}
</script>