<template>
  <div :class="classesWrap">
    <div :class="classesType">
      <div class="board-top">
        <span class="summary">총 <em>{{ listData.length }}</em> 개</span>
      </div>
      <table>
        <colgroup>
            <col style="width:104px;">
            <col v-for="(column, key) in columns" :key="key" :style="column.width"> 
        </colgroup>
        <thead>
        <tr>
          <th>No</th>
          <th v-for="(column, key) in columns" :key="key">
            {{ column.name }}
          </th>
        </tr>
        </thead>
        <tbody v-if="listData.length > 0">
        <tr v-for="(data, key) in listData" :key="key">
          <td>{{ ++key }}</td>
          <td v-for="(column, sKey) in columns" :key="sKey">
            <a href="#" @click.prevent="view(data);">
              {{ data[column.eval] }}
            </a>
          </td>
        </tr>
        </tbody>
        <tbody v-else>
        <tr>
          <td :colspan="columns.length+1" class="no-data">
            {{ noDataString }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Board',
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
      default: 'board-type'
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
    view: function (item) {
      console.log(item);
      this.$emit('view',item);
      return item;
    }
  }
}
</script>

<style scoped>

</style>
