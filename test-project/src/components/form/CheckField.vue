<template>
  <div :class="[boxClass, {'selected' : checked}]">
    <input
        :type="inputType"
        :id="inputId"
        :name="inputName"
        @change="update">
    <label :class="labelClass" :for="inputId"></label>
    <label :for="inputId">{{ inputLabel }}</label>
  </div>
</template>

<script>
export default {
  model: {
    props: 'agreement',
    event: 'change'
  },
  name: 'CheckField',
  data() {
    return {
      checked: false
    }
  },
  props: {
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    },
    inputName: {
      type: String,
      required: true
    },
    inputLabel: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: false,
      default: 'checkbox'
    },
    labelClass: {
      type: String,
      required: false,
      default: 'checkbox'
    },
    inputId: {
      type: String,
      required: true
    },
    boxClass: {
      type: String,
      required: false,
      default: 'chk-box'
    }
  },
  mounted() {
  },
  methods: {
    update (event) {
      this.checked = event.target.checked;
      this.$emit('change', event.target.checked ? this.trueValue : this.falseValue)
    }
  }
}
</script>
