<template>
    <div :class="boxClass">
        <label :for="inputId" :class="labelClass">{{ inputLabel }}</label>
        <input 
            :type="inputType" 
            :id="inputId" 
            :value="value" 
            :placeholder="inputPlaceholder"
            @input="$emit('input',$event.target.value)" >        
    </div>
</template>

<script>
export default ({
    name: 'InputField',
    props:{
        boxClass:{
            type: String,
            required : false,
            default : 'input-field'
        },
        inputLabel:{
            type: String,
            required : true
        },
        inputType :{
            type: String,
            required : false,
            default : 'text'
        },
        value :{
            type: String,
            required : false
        },
        labelClass :{
            type: String,
            required : false,
            default: 'hidden'
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
    }
})
</script>
