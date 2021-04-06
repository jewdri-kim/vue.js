<template>
  
  <transition  name="slide" appear disappear>
  <div class="notice content">

    <h1>Notice</h1>

    <board
      :columns="listColumn"
      :listData="listData" />

      

    <board
      :columns="listColumn"
      :listData="listData2" />


  </div>
  </transition>
</template>
<script>
import Board from '@/components/board/Board.vue';

export default {
  name : 'Event',
  components :{
    Board
  }, 
  data(){
    return {
        listName : '공지사항',
        listColumn: [
          {
            name: '제목',
            eval: 'title',
            width: ''
          },
          {
            name: '날짜',
            eval: 'date',
            width: 'width:200px' 
          },
          {
            name: '작성자',
            eval: 'writer',
            width: 'width:200px' 
          }
        ],
        listData2 :[],
        listData : [
            {
                title : '[공지사항] 1120주년을 축하해',
                date : '2019.05.27',
                writer : '홍길동'
            },
            {
                title : '[22222] 20주년을 축하해',
                date : '2019.05.27',
                writer : 'Jewdri'
            },
            {
                title : '[3333] 20주년을 축하해',
                date : '2019.05.27',
                writer : 'Jewdri'
            },
            {
                title : '[55555] 20주년을 축하해',
                date : '2019.05.27',
                writer : 'Jewdri'
            },
            {
                title : '[5555555] 20주년을 축하해',
                date : '2019.05.27',
                writer : 'Jewdri'
            },
            {
                title : '[666666] 20주년을 축하해',
                date : '2019.05.27',
                writer : 'Jewdri'
            },
            {
                title : '[7777777] 20주년을 축하해',
                date : '2019.05.27',
                writer : 'Jewdri'
            },
            {
                title : '[888888888] 20주년을 축하해',
                date : '2019.05.27',
                writer : 'Jewdri'
            },
            {
                title : '[9999999] 20주년을 축하해',
                date : '2019.05.27',
                writer : 'Jewdri'
            },
            {
                title : '[100000] 20주년을 축하해',
                date : '2019.05.27',
                writer : 'Jewdri'
            }
        ]
    }
  },
  methods:{
  }
}

</script>
<style lang="scss" scoped>
  h1{margin-bottom:50px;color:#333;}
  .board-wrap{
    &+.board-wrap{
      margin-top:20px;
    }
  }
</style>
