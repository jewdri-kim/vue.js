<template>
    <div :class="groupClass">      
        <solt name="radio-list"></solt>
    </div>  
</template>

<script>


export default {
  name: 'RadioGroup',
  components: {
  },
  props: {
      groupClass:{
        type: String,
        required : false,
        default : 'radio-group'
      }
  },
  methods: {
  },
  computed: {
  }
}
</script>
