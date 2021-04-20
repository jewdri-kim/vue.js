import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',      // ture : 성능이슈, 
  state: {
    todoList: [
        {
            title : '달리기',
            date : '2019.05.27',
            isEnd: true,
            id: 1
        },
        {
            title : '운동',
            date : '2021.04.20',
            isEnd: false,
            id: 2
        },
        {
            title : 'vue js 공부',
            date : '2021.04.11',
            isEnd: false,
            id: 3
        },
        {
            title : '독서하기',
            date : '2019.05.27',
            isEnd: true,
            id: 4
        },
        {
            title : '점심약속',
            date : '2019.05.27',
            isEnd: true,
            id: 5
        },
        {
            title : '일일업무쓰기',
            date : '2019.05.27',
            isEnd: true,
            id: 6
        },
        {
            title : '점심약속',
            date : '2019.05.27',
            isEnd: true,
            id: 7
        },
        {
            title : '일일업무쓰기',
            date : '2019.05.27',
            isEnd: true,
            id: 8
        },
    ],
    toDayDate : null,
    time : null,
    todoChkNum : null
  },
  mutations: {
    addToDoItem(state, todoItem){
      localStorage.setItem(todoItem, todoItem);
      state.todoList.push(todoItem);
     },
    deleteToDoItem(state, todoItem){
      state.todoList.forEach(function(item, index){
        if( item.id === todoItem.id){
          state.todoList.splice(index,1);
        }
      })
      
      localStorage.removeItem(todoItem);
      
    },
    clearToToList(){
      localStorage.clear();
      this.todoList = [];
    },
    completedToDo(state, todoItem){
      console.log('mutations');
      state.todoList.forEach(item => {
        if( item.id === todoItem.id){
          item.isEnd = !item.isEnd;
        }
      })
    }
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
    }
  },
  modules: {
  },
  getters:{
    toDayDate (){},
    time(){}
  },
  methods: {
    
  }
})
