<template>

  <transition  name="slide" appear disappear>
    <div class="page content">
      <h1>This is an page</h1>
      <form v-on:submit.prevent="submit">
        <div class="form-item">
          <input-field
              v-model="sendData.name"
              :inputLabel="formData[0].inputLabel"
              :inputId="formData[0].inputId"
              :inputPlaceholder="formData[0].inputPlaceholder"/>
        </div>
        <div class="form-item">
          <input-field
            v-model="sendData.phone"
            :inputType="formData[1].inputType"
            :inputLabel="formData[1].inputLabel"
            :inputId="formData[1].inputId"
            :inputPlaceholder="formData[1].inputPlaceholder"/>
        </div>
        <div class="form-item">
          <radio-field
              v-model="sendData.gender"
              :inputLabel="formData[2].inputLabel"
              :inputId="formData[2].inputId"
              :boxClass="formData[2].boxClass"
              :inputName="formData[2].inputName"
              :checked="sendData.gender === formData[2].inputValue"
              :pv="formData[2].inputValue"
          />
          <radio-field
              v-model="sendData.gender"
              :inputLabel="formData[3].inputLabel"
              :inputId="formData[3].inputId"
              :boxClass="formData[3].boxClass"
              :inputName="formData[3].inputName"
              :checked="sendData.gender === formData[3].inputValue"
              :pv="formData[3].inputValue"
          />
        </div>
        <div class="form-item">
          <check-field
              class="browser-default"
              v-model="sendData.agree"
              true-value="agree"
              false-value="not"
              :inputLabel="formData[4].inputLabel"
              :inputId="formData[4].inputId"
              :boxClass="formData[4].boxClass"
              :inputName="formData[4].inputName"
          />
        </div>
        <div class="form-item">
           <textarea-field 
              v-model="sendData.memo"
              :value="sendData.memo"
              :inputLabel="formData[6].inputLabel"
              :inputId="formData[6].inputId"
              :inputPlaceholder="formData[6].inputPlaceholder"
          />
        </div>

        <!--
        <radio-group>
            <radio-field v-for="radioItem in formData[5].groupList" :key="radioItem.id" 
            v-model="sendData.cat"
            :inputLabel="radioItem.label"
            :inputId="radioItem.id"
            :boxClass="formData[5].radioClass"
            :inputName="formData[5].groupName"
            :checked="sendData.cat === radioItem.value"
            :pv="radioItem.value"
            />
        </radio-group>

        
        <check-field
            v-model="sendData.agree"
            :inputLabel="formData[4].inputLabel"
            :inputId="formData[4].inputId"
            :boxClass="formData[4].boxClass"
            :inputName="formData[4].inputName"
            :pv="formData[4].inputValue"
            :checked="sendData.agree"
        />-->

        <!--
          컴포넌트 목록
          addressField
          checkBox
          radio
          textarea



        -->


        <button type="submit" class="btn-type v2">Submit</button>
      
        

        <div class="text-number">TEST : 123456</div>
      </form>
    </div>
  </transition>
</template>
<script>
import InputField from '@/components/form/InputField.vue';
import RadioField from '@/components/form/RadioField.vue';
import CheckField from '@/components/form/CheckField.vue';
//import RadioGroup from '@/components/form/RadioGroup.vue';
import TextareaField from '@/components/form/textareaField.vue';

export default {
  name: 'Page',
  components: {
    InputField,
    CheckField,
    RadioField,
    //RadioGroup,
    TextareaField
  },
  data() {  
      return {
      sendData: {
        name: '홍길동',
        phone: null,
        gender: '남',
        agree:  null,
        //cat:  'cat1',
        memo: ''
      },
      formData: [
        {
          inputLabel: '이름',
          inputId: 'name',
          inputPlaceholder: '이름을 입력해주세요',
          inputValue: 'ㅇㅇㅇ',
        },
        {
          inputLabel: '연락처',
          inputId: 'phone',
          inputType: 'number',
          inputPlaceholder: '연락처를 입력해주세요',
          inputValue: '',
        },
        {
          inputLabel: '남',
          inputId: 'male',
          inputValue: '남',
          boxClass: 'chk-box v3',
          inputName: 'gender',
        },
        {
          inputLabel: '여',
          inputId: 'female',
          inputValue: '여',
          boxClass: 'chk-box v3',
          inputName: 'gender',
        },
        {
          inputLabel: '체크',
          inputId: 'agree',
          inputValue: 'agree',
          boxClass: 'chk-box v2',
          inputName: 'agreechk',
          checked: true
        },
        {
          groupName: 'root',
          radioClass: 'chk-box v3',
          groupList : 
            [
              {
                id : 'cat1',
                label : '검색',
                value: 'cat1'
              },              
              {
                id : 'cat2',
                label : '추천',
                value: 'cat2'
              }
            ]
        },
        {
          inputLabel: '메모',
          inputId:'meno',
          inputPlaceholder: '메모입력'
        }
      ]
    }
  },
  methods: {
    submit() {
      let data = this.sendData;

      console.log('입력정보');
      console.log(data);
      console.log('submit');

    }
  }
}

</script>

<style lang="scss" scoped>
  h1{margin-bottom:50px;color:#e8e8e8;}
  .text-number{margin-top:50px;font-size:50px;}
  .btn-type{margin-top:20px;margin-left:0;}
  form{
    .form-item{
      margin-top:10px;
      &:first-child{
        margin-top:0;
      }
      .chk-box{
        &+.chk-box{
          margin-left:10px;
        }
      }
    }
  }
  .content{height:720px;}
</style>
