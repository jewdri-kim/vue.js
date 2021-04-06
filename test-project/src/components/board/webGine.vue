<template>
  <div :class="classesWrap">
    <div :class="classesType">
      <div class="board-top">
        <span class="summary">총 <em>{{ listData.length }}</em> 개</span>
      </div>
      <ul v-if="listData.length > 0">
          <li v-for="(data, key) in listData" :key="key">
              <a href="#" @click.prevent="view(data);">
                  <div class="img-box" :style="{backgroundImage:'url( '+data.contentImg+')'}">
                  </div> 
                    <div class="contents"> 
                        <dl v-for="(column, key) in columns" :key="key">
                            <dt>{{ column.name }}</dt>
                            <dd>{{ data[column.eval] }}</dd>
                        </dl> 
                    </div> 
              </a>
          </li>
      </ul>
      <div v-else>
           {{ noDataString }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebGine',
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
      default: 'board-type gallery-type v2'
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

<style lang="scss" scoped>
    .gallery-type{
        ul{
            border-top:2px solid #333;
            border-bottom:2px solid #333;
            padding:30px 0;
            font-size:0;
        }

        li{
            overflow:hidden;
            display:inline-block;
            position:relative;
            width:32%;
            height:300px;
            margin-left:2%;
            margin-top:20px;
            border-radius:20px;
            &:nth-child(1),&:nth-child(2),&:nth-child(3){
                margin-top:0;
            }

            &:nth-child(3n+1){
                margin-left:0;
            }
            .img-box{
                display:block;
                width:100%;
                height:200px;
                background-size:cover;
                background-repeat:no-repeat;
            }
            .contents{
                display:block;
                background:rgba(0,0,0,0.1);
                padding:10px;
                dl{
                    font-size:0;
                    line-height:20px;
                    dt{
                        display:inline-block;
                        margin-right:10px;
                        font-size:14px;
                    }
                    dd{
                        display:inline-block;
                        font-size:14px;
                    }
                }
            }
            a:hover{
                .contents{
                    background:rgba(0,0,0,0.6);
                    dl{
                        color:#fff;
                    }
                }
            }
        }
    }
</style>
