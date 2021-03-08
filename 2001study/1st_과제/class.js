
/*
커스텀 엘리먼트
쉐도우돔
슬롯 (or template)
이용하여 Custom  작성
*/
let tabList = [];

class TabBox extends HTMLElement {

constructor() {
    super();

    this.attachShadow({mode: "open"});
    this._visible = false;
    this._activeClass = 'active';
    this._tabContent = null;
    tabList.push(this.shadowRoot);

    this.shadowRoot.innerHTML = `
        <dl class="tab-content">
            <dt> <slot name="title"></slot></dt>
            <dd>
                <slot name="img"></slot>
            </dd>
            <dd>
                <slot name="content"></slot>
            </dd>
        </dl>
        <style>
            .tab-content{
                display:none;
                width:100%;;
                height:500px;
                border-radius: 15px;

            }
            .tab-content.active{
                display:block;
                -webkit-animation-name: animateShow;
                -webkit-animation-duration: 1s;
                animation-name: animatetop;
                animation-duration: 0.4s;
            }
            .tab-content dt{font-size:30px;font-weight:600;}
            .tab-content {margin-top:20px;padding:20px;border:1px solid #000;font-size:20px;}

            
            @-webkit-keyframes animateShow {
                from { opacity: 0}
                to { opacity: 1}
            }
            
            @keyframes animateShow {
                from { opacity: 0}
                to { opacity: 1}
            }
        </style>
    `;
}

/**
 * 가상 트리가 document 에 연결된후 콜백
 */
connectedCallback() {

    this._tabContent = this.shadowRoot.querySelector('.tab-content');

    this._tabContent.style.backgroundColor
        = this.getAttribute('bgcolor');


    if(this.getAttribute('default') === 'y'){
        this._tabContent.classList.add(this._activeClass);
    }
}

/**
 * 가상 트리가 document 에서 연결 해제 된 후 콜백
 */
disconnectedCallback() {
    //this.shadowRoot.querySelector('.close').removeEventListener('click', this._hide);
}

_allReset(){
    console.log(tabList);
    for(let i = 0; i < tabList.length; i ++ ){
        let lTabList = tabList[i].querySelector('.tab-content');
        lTabList.classList.remove(this._activeClass);
    }  
}

_isActive(){
    let lResult = 0;
    let lClassList = this._tabContent.classList;

    for(let i = 0; i < lClassList.length; i ++){
        if(lClassList[i] === this._activeClass){
            lResult = 1;
        }   
    }
    return lResult;
}

viewControl() {
    if(!this._isActive()){
        this._allReset();
        this._tabContent.className += ' active';
    }

    
    
    //console.log(this.shadowRoot.querySelector('.tab-content').classList);
    
    
    

}
}

customElements.define('simple-tabbox', TabBox);