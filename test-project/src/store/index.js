import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',      // ture : 성능이슈, 
  state: {
    todoList: [
      {
        title: '달리기',
        date: 'yyyy-mm-dd hh:mm:ss',
        isEnd : false,
        id : 1,
      }
    ],
    toDayDate : null,
    time : null,
    todoChkNum : null
  },
  mutations: {
    addToDoItem(state, todoItem){
      state.todoList.push(todoItem);
      let tmpData = JSON.stringify(state.todoList);
      localStorage.setItem('todoList', tmpData);
      console.log(localStorage.getItem('todoList'));
     },
    deleteToDoItem(state, todoItem){
      state.todoList.forEach(function(item, index){
        if( item.id === todoItem.id){
          state.todoList.splice(index,1);
        }
      })
      
      localStorage.removeItem(todoItem);
      
    },
    clearToToList(state){
      localStorage.clear();
      state.todoList = [];
    },
    completedToDo(state, todoItem){
      state.todoList.forEach(item => {
        if( item.id === todoItem.id){
          item.isEnd = !item.isEnd;
        }
      })
    },
    /*
		initTodoList(state) {
			if(localStorage.getItem('todoList')) {
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('todoList')))
				);
			}else{
        // json 파일로 가져오기?
      }
		}*/
  },
  actions: {
    completedToDo({commit}, todoItem){   // {commit}
      //빈값체크
      //날짜체크해서 넣기
      //isEnd false
      console.log('completedToDo');
      commit('completedToDo', todoItem);
    },
    deleteToDoItem({commit}, todoItem){
      commit('deleteToDoItem', todoItem);
    },    
    addToDoItem({commit}, todoItem){
      console.log(todoItem);
      todoItem.id = this.state.todoList[this.state.todoList.length - 1].id + 1;
      //localStorage.setItem(todoItem, todoItem);
      commit('addToDoItem', todoItem);
     },
    initTodoList({commit}){
      commit('initTodoList');
    }
  },
  modules: {
  },
  getters:{
    toDayDate (){
      
    },
    time(){}
  },
  methods: {
    
  }
})
