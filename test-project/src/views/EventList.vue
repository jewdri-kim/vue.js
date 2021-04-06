<template>

  <transition name="slide" appear disappear>
  <div class="event content">

    <h1>Event</h1>

    <board
      :columns="listColumn"
      :listData="listData"
      :view="viewOpen"
       />

  </div>
  </transition>
</template>
<script>
//import BoardList from '@/components/board/BoardList.vue';
import Board from '@/components/board/Board.vue';

export default {
  name : 'Event',
  components :{
    Board
  },
  data(){
    return {
        listName : '이벤트',
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
          }
        ],
        listData : [
            {
                title : '[이벤트] 1120주년을 축하해',
                date : '2019.05.27'
            },
            {
                title : '[22222] 20주년을 축하해',
                date : '2019.05.27'
            },
            {
                title : '[3333] 20주년을 축하해',
                date : '2019.05.27'
            },
            {
                title : '[55555] 20주년을 축하해',
                date : '2019.05.27'
            },
            {
                title : '[5555555] 20주년을 축하해',
                date : '2019.05.27'
            },
            {
                title : '[666666] 20주년을 축하해',
                date : '2019.05.27'
            },
            {
                title : '[7777777] 20주년을 축하해',
                date : '2019.05.27'
            },
            {
                title : '[888888888] 20주년을 축하해',
                date : '2019.05.27'
            },
            {
                title : '[9999999] 20주년을 축하해',
                date : '2019.05.27'
            },
            {
                title : '[100000] 20주년을 축하해',
                date : '2019.05.27'
            }
        ],
        view: {
          data:{},
          visible: false,
        }
    }
  },
  methods:{
    viewOpen: function(item) {
      console.log(item);
			this.view.data = item;
			this.view.visible = true;
		}
  }
}

</script>
<style lang="scss" scoped>
  h1{margin-bottom:50px;color:#670b93;}
</style>