<template>

  <transition name="slide" appear disappear>
  <div class="event content">

    <h1>Blog</h1>

    <ul class="sel-list-type">
        <li :class="[selListType === 'Board' ? 'active' : '']"><a href="#" @click="selListType = 'Board'">게시판</a></li>
        <li :class="[selListType === 'Gallery' ? 'active' : '']"><a href="#" @click="selListType = 'Gallery'">갤러리</a></li>
        <li :class="[selListType === 'WebGine' ? 'active' : '']"><a href="#" @click="selListType = 'WebGine'">웹진</a></li>
    </ul>

    <component 
        :is="selListType" 
        :columns="listColumn"
        :listData="listData"
         @view="viewOpen"
    />

    <!--
    <board
      :columns="listColumn"
      :listData="listData"
      @view="viewOpen"
       />

    <gallery
      :columns="listColumn"
      :listData="listData"
      @view="viewOpen"
       />  --> 
    <popup :visible="view.visible" @close="viewClose">
        <h2 slot="header"> {{ view.data.title }}</h2>
        <div class="contents">
            <p>{{ view.data.contentText }}</p>
            <div class="img-box">
                <img :src="view.data.contentImg" alt="">
            </div>
        </div>
    </popup>   

  </div>
  </transition>
</template>
<script>
//import BoardList from '@/components/board/BoardList.vue';
import Board from '@/components/board/Board.vue';
import Gallery from '@/components/board/gallery.vue';
import WebGine from '@/components/board/webGine.vue';
import Popup from '@/components/layout/popUp.vue';

export default {
  name : 'Blog',
  components :{
    Board,
    Gallery,
    WebGine,
    Popup
  },
  data(){
    return {
        selListType : 'Board',
        listName : '블로그',
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
            name: '조회수',
            eval: 'hits',
            width: 'width:80px' 
          }
        ],
        listData2:[],
        listData : [
            {
                title : '[이벤트] 1120주년을 축하해',
                date : '2019.05.27',
                contentText : 'ddddddd',
                contentImg : require('@/assets/images/temp/1.jpg'),
                hits: 20
            },
            {
                title : '[22222] 20주년을 축하해',
                date : '2019.05.27',
                contentText : 'ddddddd',
                contentImg : require('@/assets/images/temp/2.jpg'),
                hits: 1
            },
            {
                title : '[3333] 20주년을 축하해',
                date : '2019.05.27',
                contentText : 'ddddddd',
                contentImg : require('@/assets/images/temp/3.jpg'),
                hits: 2
            },
            {
                title : '[55555] 20주년을 축하해',
                date : '2019.05.27',
                contentText : 'ddddddd',
                contentImg : require('@/assets/images/temp/4.jpg'),
                hits: 3
            },
            {
                title : '[5555555] 20주년을 축하해',
                date : '2019.05.27',
                contentText : 'ddddddd',
                contentImg : require('@/assets/images/temp/5.jpg'),
                hits: 20
            },
            {
                title : '[666666] 20주년을 축하해',
                date : '2019.05.27',
                contentText : 'ddddddd',
                contentImg : require('@/assets/images/temp/1.jpg'),
                hits: 3
            },
            {
                title : '[7777777] 20주년을 축하해',
                date : '2019.05.27',
                contentText : 'ddddddd',
                contentImg : require('@/assets/images/temp/2.jpg'),
                hits: 1
            },
            {
                title : '[888888888] 20주년을 축하해',
                date : '2019.05.27',
                contentText : 'ddddddd',
                contentImg : require('@/assets/images/temp/3.jpg'),
                hits: 20
            },
            {
                title : '[9999999] 20주년을 축하해',
                date : '2019.05.27',
                contentText : 'ddddddd',
                contentImg : require('@/assets/images/temp/4.jpg'),
                hits: 2
            },
            {
                title : '[100000] 20주년을 축하해',
                date : '2019.05.27',
                contentText : 'ddddddd',
                contentImg : require('@/assets/images/temp/5.jpg'),
                hits: 5
            }
        ],
        view: {
          data:{
          },
          visible: false,
        }
    }
  },
  methods:{
    viewOpen: function(item) {
        this.view.data = item;
        this.view.visible = true;
        item.hits++;
    },
    viewClose:function(){
        this.view.visible = false;
    }
  }
}

</script>
<style lang="scss" scoped>
  h1{margin-bottom:50px;color:#670b93;}
  .sel-list-type{
      margin-bottom:20px;
      display:flex;

      li{
          display:inline-flex;
          border:1px solid #505050;
          border-left:0;
          &:first-child{
            border-left:1px solid #505050;
          }
          a{
              display:block;
              padding:0 10px;
              height:30px;
              line-height:30px;
          }
          &.active{
              a{
                  background:rgba(0,0,0,0.6);
                  color:#fff;
                  font-weight:700;
              }
          }
      }
  }

  
  .pop-content h2{margin-bottom:20px;}
  .pop-content .img-box{margin-top:20px;}
</style>