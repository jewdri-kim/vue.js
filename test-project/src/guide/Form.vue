<template>
  <div id="guide">
    <Navi />
        
    <div class="guide-content">
        <h2 class="guide-title">FORM</h2>

        <h3 class="guide-title2">RADIO</h3>
        <div class="form">
            <div class="chk-box">
                <input type="radio" id="gender1" name="gender"/>
                <label class="checkbox" for="gender1"></label>
                <label for="gender1">아이디저장</label>
            </div>
            <div class="chk-box">
                <input type="radio" id="gender2" name="gender" checked/>
                <label class="checkbox" for="gender2"></label>
                <label for="gender2">아이디저장</label>
            </div>
            <div class="chk-box v2">
                <input type="radio" id="gender3" name="gender" checked/>
                <label class="checkbox" for="gender3"></label>
                <label for="gender3">아이디저장</label>
            </div>
        </div>

        <h3 class="guide-title2">CHECK BOX</h3>
        <div class="form">
            <div class="chk-box">
                <input type="checkbox" id="test"/>
                <label class="checkbox" for="test"></label>
                <label for="test">아이디저장</label>
            </div>
            <div class="chk-box">
                <input type="checkbox" id="test3" checked/>
                <label class="checkbox" for="test3"></label>
                <label for="test3">아이디저장</label>
            </div>
            <div class="chk-box v2">
                <input type="checkbox" id="test4" checked/>
                <label class="checkbox" for="test4"></label>
                <label for="test4">아이디저장</label>
            </div>
        </div>
        <h3 class="guide-title2">RADIO2</h3>
        
        <div class="form">
            <div class="chk-box v3">
                <input type="radio" id="testtest" name="testtest"/>
                <label class="checkbox" for="testtest"></label>
                <label for="testtest">아이디저장</label>
            </div>
            <div class="chk-box v3">
                <input type="radio" id="testtest2" name="testtest"/>
                <label class="checkbox" for="testtest2"></label>
                <label for="testtest2">아이디저장</label>
            </div>

        </div>
        <!--<h3 class="guide-title2">COUNT</h3>-->
        <!--<div class="quantity-box">-->
        <!--<button type="button" class="btn-minus"></button>-->
        <!--<input type="number" value="1">-->
        <!--<button type="button" class="btn-plus"></button>-->
        <!--</div>-->


        <h3 class="guide-title2">text field</h3>
        <div class="form-item">
            <input type="text" id="id1" placeholder="아이디">
        </div>
        <br>
        <div class="form-item">
            <input type="text" id="id2" value="아이디">
        </div>
        <br>
        <div class="form-item">
            <input type="text" id="id3" placeholder="아이디" disabled>
        </div>
    <br>
        <div class="form-item">
            <input type="text" id="id4" placeholder="아이디" class="error">
        </div>

        <h3 class="guide-title2">form-group</h3>
        <div class="form-group">
            <div class="form-box">
                <dl>
                    <dt>가입자 이름</dt>
                    <dd>
                        <input id="id4" type="text" value="홍길동" readonly>
                    </dd>
                </dl>
                <dl>
                    <dt>가입자 주민등록번호</dt>
                    <dd>
                        <div class="item-id-num">
                            <div class="birth">
                                <input type="number" placeholder="생년월일 6자리">
                            </div>
                            <span></span>
                            <div class="gender">
                                <input type="number">
                                <em>*  *  *  *  *  *</em>
                            </div>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>주소</dt>
                    <dd>
                        <div class="item-deli">
                            <input type="text" disabled>
                            <button class="btn-search">검색</button>
                        </div>
                        <div class="item">
                            <input type="text" disabled>
                        </div>
                        <div class="item">
                            <input type="text" placeholder="상세 주소를 입력해주세요">
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
        
        <h3 class="guide-title2">form-group <span>셀렉트는 팝업 선택으로 진행! </span></h3>
        
        <p style="line-height:1.5">
            [가이드]<br>
            인풋클릭시 팝업이 뜨고 선택시 인풋에 선택된값 들어감<br>
            해당 인풋에 class="no-cursor" readonly 속성 추가<br>
            (readonly 속성은 기본 회색인데 no-cursor 클래스 추가시 흰색으로 설정하기 위함)<br><br><br>
        </p>
        
        <div class="form-group">
            <div class="form-box">
                <dl>
                    <dt>휴대폰 인증</dt>
                    <dd>
                        <div class="btn-select">
                            <input type="text" placeholder="인증 방법 선택" class="no-cursor" onclick="UI.layerPopUp({selId: '#pop_certilist'});" readonly>
                            <i class="icon-arrow3 down"></i>
                        </div>
                        <div class="item-tel">
                            <input type="text" placeholder="마지막 4자리 숫자 입력" readonly>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
        

        <!--<h3 class="guide-title2">select-type</h3>-->
        <!--<div class="select-type">&lt;!&ndash;시스템&ndash;&gt;-->
        <!--<select>-->
        <!--<option>판매순</option>-->
        <!--<option>최근등록순</option>-->
        <!--<option>높은 가격순</option>-->
        <!--<option>낮은 가격순</option>-->
        <!--</select>-->
        <!--</div>-->
        <!--<div class="select-type v2">&lt;!&ndash;시스템&ndash;&gt;-->
        <!--<select>-->
        <!--<option>판매순</option>-->
        <!--<option>최근등록순</option>-->
        <!--<option>높은 가격순</option>-->
        <!--<option>낮은 가격순</option>-->
        <!--</select>-->
        <!--</div>-->
        <!--<div class="select-type v3">&lt;!&ndash;시스템&ndash;&gt;-->
        <!--<select>-->
        <!--<option>판매순</option>-->
        <!--<option>최근등록순</option>-->
        <!--<option>높은 가격순</option>-->
        <!--<option>낮은 가격순</option>-->
        <!--</select>-->
        <!--</div>-->
        <!--<h3 class="guide-title2">select-type2</h3>-->
        <!--<div class="select-type2">&lt;!&ndash;디자인셀렉트&ndash;&gt;-->
        <!--<select>-->
        <!--<option>판매순</option>-->
        <!--<option>최근등록순</option>-->
        <!--<option>높은 가격순</option>-->
        <!--<option>낮은 가격순</option>-->
        <!--</select>-->
        <!--</div>-->


    </div>
  </div>
</template> 
<script>
import Navi from '../guide/Navi.vue'

export default {
  name: 'Form', 
  components: {
    Navi
  }
}
</script>
<style lang="scss" scoped>
  @import '~@/assets/css/common';
  @import 'guide.scss'; 
</style>

