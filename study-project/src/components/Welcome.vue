<template>
    <div>
        Welcome
        <nav>
            <ul>
                <li><v-link href="/">웰컴</v-link></li>
                <li><v-link href="/about">어바웃</v-link></li>
                <li><v-link href="/page">페이지</v-link></li>
            </ul>
        </nav>
    </div>
</template>


<script>
import VLink from '@/components/VLink.vue'

export default ({
    name: "Welcome",
    components: {
        VLink, 
    },
    setup() {
        
    },
})
</script>
