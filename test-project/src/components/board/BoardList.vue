<template>
    <div>
        <div class="board-wrap">
            <div class="board-type">
                <div class="board-top">
                    <span class="summary">총 <em>{{listData.length}}</em> 개</span>
                    <!--
                    <span class="side">혹시나있으면</span>-->
                </div>
                <table>
                    <colgroup>
                        <col v-for="col in listColumn" :key="col.name" :style="col.width">
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col" v-for="col in listColumn" :key="col.name"> {{col.name}} </th>
                        </tr>
                    </thead>
                    <tbody v-if="listData !== null && listData.length > 0">
                        <tr v-for="items in listData" :key="items.no">
                            <td>{{items.no}}</td>
                            <td class="title">
                                <a href="#">{{items.title}}</a>
                            </td>
                            <td><span class="date">{{items.date}}</span></td>
                        </tr>
                    </tbody>
					<tbody v-else>
						<td colspan="3">
							게시글이 없습니다.
						</td>
					</tbody>
                </table>
				<!--
                <div class="pager-wrap">
                    <a href="#" class="btn-prev">이전페이지</a>
                    <strong class="active">1</strong>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">7</a>
                    <a href="#">8</a>
                    <a href="#">9</a>
                    <a href="#">10</a>
                    <a href="#" class="btn-next">이전페이지</a>
                </div>-->
            </div>
	    </div>
    </div>
</template>

<script>
export default ({
    name: 'BoardList',
	props: {
		listData : {
			type: Array,
			required:true
		},		
		listName : {
			type: String,
			required:false,
			default: '게시판'
		},
		listColumn :{
			type: Array,
			require:true
		}
	}
})
</script>

