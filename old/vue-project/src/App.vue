<template>
  <div id="app">
      <Header></Header>
      <TodoInput v-on:addTodo="addTodo"></TodoInput>
      <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
      <Footer v-on:removeAll="clearAll"></Footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import TodoInput from './TodoInput.vue'
import TodoList from './TodoList.vue'

export default {
  name: 'app',
  data () {
    return {
      todoItems: []
    }
  },
  methods:{
    addTodo(todoItem){
      // 로컬스토리지에 데이터를 추가하는 로직
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },/*
    removeAll() {
        if(localStorage.length > 0){
            for(var i = 0; i <localStorage.length; i++){
                this.todoItems.push(localStorage.key(i));
            }
        }
    },*/
    clearAll(){
      localStorage.clear();
      this.todoItems = [];
    },
    removeTodo(todoItem, index){
        localStorage.removeItem(todoItem);
        this.todoItems.splice(index,1);
    }
  },
  components:{
    'Header' : Header,
    'Footer': Footer,
    'TodoInput' : TodoInput,
    'TodoList': TodoList
  }
}

</script>

<style>
body{
  text-align:center;
  background-color:#E6E6E8;
}
input{border-style:groove;width:200px;}
button{border-style:groove;}
.shadow{box-shadow:5px 10px 10px rgba(0,0,0,0.3)}
</style>
