<template>
	<div>
        {{ page_string }}
        <nav>
            <ul>
                <li><v-link href="/">웰컴</v-link></li>
                <li><v-link href="/about">어바웃 </v-link></li>
                <li><v-link href="/page">페이지</v-link></li>
            </ul>
        </nav> 
    </div> 
    
</template>
   
<script lang="js">
import VLink from '@/components/VLink.vue'

export default {
	name: 'Page',
    components : {
        VLink
    },
	data(){
        return {
		    page_string: ' page'
        }
    }
}
</script>

<style lang="scss" scoped>
	.div {
		color: 'black';
	}
</style>