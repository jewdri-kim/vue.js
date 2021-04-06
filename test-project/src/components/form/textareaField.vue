<template>
    <div :class="boxClass">
        <label :for="inputId" :class="labelClass">{{ inputLabel }}</label>
        <textarea
            :id="inputId"
            :placeholder="inputPlaceholder"
            :cols="cols"
            :rows="rows"
            :value="value"
            @input="updataText($event)"></textarea>
        <div class="text-number">
            <span><strong>{{ textNumber }}</strong> / {{ maxText }}</span>    
        </div>
    </div>
</template>

<script>
export default ({
    name: 'InputField',
    data()  {
        return {
            textNumber: this.value ? this.value.length : 0
        }
    },
    props:{
        boxClass:{
            type: String,
            required : false,
            default : 'input-field'
        },
        maxText:{
            type: Number,
            required : false,
            default : 50
        },
        inputLabel:{
            type: String,
            required : true,
            default : null
        },
        value :{
            type: String,
            required : false,
            default: ''
        },
        labelClass :{
            type: String,
            required : false,
            default: 'hidden'
        },
        cols :{
            type: Number,
            required : false,
            default: 30
        },
        rows :{
            type: Number,
            required : false,
            default: 5
        },
        inputId :{
            type: String,
            required : true
        },
        inputPlaceholder :{
            type: String,
            required:false
        }
    },
    methods:{
        updataText(event){
	        event.target.value=event.target.value.substring(0,this.maxText)
	        this.$emit('input',event.target.value);
            this.textNumber = event.target.value.length;
        }
    },
    computed: {
    }
})
</script>

<style lang="scss" scoped>
  .text-number{margin-top:10px;font-size:14px;text-align:right;}
</style>
