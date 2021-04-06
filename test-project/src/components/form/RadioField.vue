<template>
  <div :class="[boxClass, {'selected' : checked}]">
    <input
        v-model="radioValue"
        :type="inputType"
        :id="inputId"
        :name="inputName"
        :value="pv"
        :checked="checked"
        @change="update($event)"
    >
    <label :class="labelClass" :for="inputId"></label>
    <label :for="inputId">{{ inputLabel }}</label>
  </div>
</template>

<script>
export default {
  name: 'RadioField',
  props: {
    pv: {
      type: null,
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
      default: 'radio'
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
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
  methods: {
    update(event) {
        this.$emit('input', event.target.value);
    }
  },
  computed: {
    radioValue: {
      get: function () {
        return this.value
      },
      set: function () {}
    }
  }
}
</script>
