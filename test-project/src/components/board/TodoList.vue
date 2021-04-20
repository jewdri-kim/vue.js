<template>
  <div :class="classesWrap">
    <div :class="classesType">
      <div class="board-top">
        <span class="summary">총 <em>{{ listData.length }}</em> 개</span>
      </div>
      <ul v-if="listData.length > 0">
          <li v-for="(data, key) in listData" :key="key" :class="[data.isEnd ? 'end' : '']">
              <a href="#" @click.prevent="checkTodo(data);">체크</a>
                <div class="contents"> 
                    <dl v-for="(column, key) in columns" :key="key">
                        <dt class="hidden">{{ column.name }}</dt>
                        <dd>{{ data[column.eval] }}</dd>
                    </dl> 
                </div> 
               <a href="#" @click.prevent="delTodo(data);">Delete</a>
          </li>
      </ul>
      <div v-else class="no-data">
           {{ noDataString }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    columns: {
      type: Array
    },
    listData: {
      type: Array
    },
    classesWrap: {
      default: 'board-wrap'
    },
    classesType: {
      default: 'board-type todo-type'
    },
    noDataString: {
      default: '게시글이 없습니다.'
    }
  },
  data() {
    return {

    }
  },
  methods: {
    checkTodo(item) {
        this.$store.dispatch('completedToDo', {...item});
    },
    delTodo(item){
        this.$store.dispatch('deleteToDoItem', {...item});
    }
  }
}
</script>

<style lang="scss" scoped>
    .todo-type{
        li{
            margin-top:10px;
            &:first-child{
                margin-top:0;
            }

            &.end{
                text-decoration:line-through;
            }
        }
    }
</style>
