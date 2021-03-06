# Vue.js 입문 - 다루기, 친해지기



- VS CODE에 확장프로그램 설치

  ![](https://github.com/jewdri-kim/vue.js/blob/master/vue2/img/vue9.png)

- 기본 익히기라서 cdn에 vue로 사용해준다.

- 평소에 플러그인 사용하는 방법과 똑같다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script><!-- vue.js 사용 -->

</head>
<body>
</body>
</html>
```



## Vue 인스턴스 생성



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

</head>
<body>
    <div id="app">
        <h1>{{title}}</h1>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                title:'Vue.js 연습'
            }
        })
    </script>
</body>
</html>
```



## Vue 데이터 (data) 와 메소드 (methods)



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

</head>
<body>
    <div id="app">
        <h1>{{title}}</h1>
        <p>
            {{person.name}} 의 나이는 : {{person.age}}
        </p>
        <p>
            {{nextYear()}}
        </p>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                title:'Vue.js 연습',
                person:{
                    name:'jewdri',
                    age: 36
                }
            },
            methods:{
                nextYear :function(){
                    return this.person.name + '는 내년에 ' + (this.person.age +1)+'살 입니다.'
                }
            }
        })
    </script>
</body>
</html>
```



### 매개변수 있는 메소드 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

</head>
<body>
    <div id="app">
        <h1>{{title}}</h1>
        <p>
            {{person.name}} 의 나이는 : {{person.age}}
        </p>
        <p>
            {{ oherMethod('Hello!!') }} <!-- 인자, 아규먼트 -->
        </p>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                title:'Vue.js 연습',
                person:{
                    name:'jewdri',
                    age: 36
                }
            },
            methods:{ 
                nextYear :function(lString){ /* lString : 매개변수, 파라미터 */
                    return lString +' '+this.person.name + '는 내년에 ' + (this.person.age +1) +'살 입니다.';
                },
                oherMethod(lP){ /* lP : 매개변수, 파라미터 */
                    return this.nextYear(lP);
                }
            }
        })
    </script>
</body>
</html>
```



## 데이터 바인딩 (Data Binding)

- v-bind:value = :value
- v-bind:type = :type

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

</head>
<body>
    <div id="app">
        <h1>{{title}}</h1>
        <p>
            {{person.name}} 의 나이는 : {{person.age}}
        </p>
        <p>
            {{ oherMethod('Hello!!') }} <!-- 인자, 아규먼트 -->
        </p>

        
        <input v-bind:type="type" v-bind:value="inputData"><!-- v-bind:value -->
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                title:'Vue.js 연습',
                person:{
                    name:'jewdri',
                    age: 36
                },
                inputData : 'hello',
                type:'text',
            },
            methods:{ 
                nextYear :function(lString){ /* lString : 매개변수, 파라미터 */
                    return lString +' '+this.person.name + '는 내년에 ' + (this.person.age +1) +'살 입니다.';
                },
                oherMethod(lP){ /* lP : 매개변수, 파라미터 */
                    return this.nextYear(lP);
                }
            }
        })
    </script>
</body>
</html>
```



- ### link에 바인딩 : v-bind:href = :href

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

</head>
<body>
    <div id="app">
        <h1>{{title}}</h1>
        <p>
            {{person.name}} 의 나이는 : {{person.age}}
        </p>
        <p>
            {{ oherMethod('Hello!!') }} <!-- 인자, 아규먼트 -->
        </p>

        
        <input v-bind:type="type" v-bind:value="inputData"><!-- v-bind:value -->
        <a :href="link">Jewdri Vue</a>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                title:'Vue.js 연습',
                person:{
                    name:'jewdri',
                    age: 36
                },
                inputData : 'hello',
                type:'text',
                link: 'https://localhost/uidevelop/trunk/jewdri/'
            },
            methods:{ 
                nextYear :function(lString){ /* lString : 매개변수, 파라미터 */
                    return lString +' '+this.person.name + '는 내년에 ' + (this.person.age +1) +'살 입니다.';
                },
                oherMethod(lP){ /* lP : 매개변수, 파라미터 */
                    return this.nextYear(lP);
                }
            }
        })
    </script>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

</head>
<body>
    <div id="app">
        <h1>{{title}}</h1>
        <p>
            {{person.name}} 의 나이는 : {{person.age}}
        </p>
        <p>
            {{ oherMethod('Hello!!') }} <!-- 인자, 아규먼트 -->
        </p>

        
        <input v-bind:type="type" v-bind:value="inputData"><!-- v-bind:value -->
        <a :href="getLink('vue-practice')">Jewdri Vue Project</a>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                title:'Vue.js 연습',
                person:{
                    name:'jewdri',
                    age: 36
                },
                inputData : 'hello',
                type:'text',
                link: 'https://localhost/uidevelop/trunk/jewdri/'
            },
            methods:{ 
                nextYear :function(lString){ /* lString : 매개변수, 파라미터 */
                    return lString +' '+this.person.name + '는 내년에 ' + (this.person.age +1) +'살 입니다.';
                },
                oherMethod(lP){ /* lP : 매개변수, 파라미터 */
                    return this.nextYear(lP);
                }, 
                getLink: function(lFolder){
                    return this.link + lFolder;
                }
            }
        })
    </script>
</body>
</html>
```



##  이벤트 (Events)



- ### button click 이벤트

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

</head>
<body>
    <div id="app">
        {{year}}
        <button @click="plus">더하기</button>
        <button v-on:click="minus">빼기</button>

    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                year: 2021
            },
            methods:{
               plus(){
                   this.year++;
               },
               minus(){
                    this.year--;
               }
            }
        })
    </script>
</body>
</html>
```



- ### submit 이벤트

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

</head>
<body>
    <div id="app">
        {{year}}
        <button @click="plus">더하기</button>
        <button v-on:click="minus">빼기</button>


        <form action="" v-on:submit="submit">
            <input type="text">
            <button type="submit">전송</button>
        </form>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                year: 2021
            },
            methods:{
               plus(){
                   this.year++;
               },
               minus(){
                    this.year--;
               },
               submit(){
                   alert('submit');
                   console.log('Hello');
               }
            }
        })
    </script>
</body>
</html>
```

- form submit 하면 브라우저에서 기본적으로 리로드
- preventDefault() 기능은?



- ### 이벤트 수식어

  - https://kr.vuejs.org/v2/guide/events.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

</head>
<body>
    <div id="app">
        {{year}}
        <button @click="plus">더하기</button>
        <button v-on:click="minus">빼기</button>


        <form action="" v-on:submit.prevent="submit">
            <input type="text">
            <button type="submit">전송</button>
        </form>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                year: 2021
            },
            methods:{
               plus(){
                   this.year++;
               },
               minus(){
                    this.year--;
               },
               submit(){
                   alert('submit');
                   console.log('Hello');
               }
            }
        })
    </script>
</body>
</html>
```





## 데이터 양방향 바인딩 (Data Two Way Binding - v-model)



- ### 키 수식어 (이벤트)

  - https://kr.vuejs.org/v2/guide/events.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

</head>
<body>
    <div id="app">
        {{year}}
        <button v-on:click="plus">더하기</button>
        <button v-on:click="minus">빼기</button>


        <form action="" v-on:submit.prevent="submit">
            <input type="text" :value="text" @keyup="updataText"><br> <!-- v-on:keyup -->
            {{text}}<br>
            <button type="submit">전송</button>
        </form>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                year: 2021,
                text: 'text'
            },
            methods:{
               plus(){
                   this.year++;
               },
               minus(){
                    this.year--;
               },
               submit(){
                   alert('submit');
                   console.log('Hello');
               },
               updataText(event){
                    console.log(event);
                    this.text = event.target.value;
               }
            }
        })
    </script>
</body>
</html>
```



- ### 양방향 바인딩 v-model

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

</head>
<body>
    <div id="app">
        {{year}}
        <button v-on:click="plus">더하기</button>
        <button v-on:click="minus">빼기</button>


        <form action="" v-on:submit.prevent="submit">
            <!--<input type="text" :value="text" @keyup="updataText"><br>-->
            <input type="text" v-model="text"><br>
            {{text}}<br>
            <button type="submit">전송</button>
        </form>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                year: 2021,
                text: 'text'
            },
            methods:{
               plus(){
                   this.year++;
               },
               minus(){
                    this.year--;
               },
               submit(){
                   alert('submit');
                   console.log('Hello');
               }/*,
               updataText(event){
                    console.log(event);
                    this.text = event.target.value;
               }*/
            }
        })
    </script>
</body>
</html>
```



## computed 속성 



-  https://kr.vuejs.org/v2/guide/computed.html
- 템플릿 내에 표현식을 넣으면 편리
- 간단한 연산일 때만 이용
- 너무 많은 연산을 템플릿안에서 하면 코드가 비대해지고 유지보수가 어렵다.

```html
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```

- 복잡한 로직이라면 반드새 computed 속성을 사용

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

</head>
<body>
    <div id="app">

        <h1> 중괄호 안에 연산넣기 {{ message.split('').reverse().join('') }} </h1>
        {{ message.split('').reverse().join('')}}

        <br>

        <h1> computed 로 {{ reverseMessage }}  </h1>
        {{ reverseMessage }}

        <h1> methods 로 {{ mReverseMessage() }}  </h1>
        {{ mReverseMessage() }}

        <h1> computed vs  methods </h1>
        
        <h2>computed</h2>
        {{ reverseMessage }}<br>
        {{ reverseMessage }}<br>
        {{ reverseMessage }}

        <h2>methods</h2>
        {{ mReverseMessage() }}<br>
        {{ mReverseMessage() }}<br>
        {{ mReverseMessage() }}

        <br>
        <button @click="chagneMessage">Click</button>


    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                number : 1,
                message :'안녕하세요'
            },
            methods:{
                mReverseMessage(){
                    return this.message.split('').reverse().join('');
                },
                chagneMessage(){
                    this.message = '쥬드리';
                }
            },
            computed:{
                reverseMessage(){
                    return this.message.split('').reverse().join('');
                }
            }
        
        })
    </script>
</body>
</html>
```



- ### computed 속성의 캐싱 vs 메소드
  - 메소드도 같은 결과를 얻을 수 있다. (최종결과는 동일

  - 차이점은 **computed 속성은 종속 대상을 따라 저장(캐싱)된다는 것**

  - computed 속성은 해당 속성이 종속된 대상이 변경될 때만 함수를 실행

  - 즉 `message`가 변경되지 않는 한, computed 속성인 `reversedMessage`를 여러 번 요청해도 

    계산을 다시 하지 않고 계산되어 있던 결과를 즉시 반환

  - 메소드를 호출하면 렌더링을 다시 할 때마다 **항상** 함수를 실행

  - 캐싱이 왜 필요???  계산이 많이 걸릴경우 반복해서 다루고많은 계산을 해야한다. 

  - 캐싱이 필요하지 않은 간단한 경우에 메소드를 사용해도 된다.

  

- ### computed 속성의 setter  함수

  - computed 속성은 기본적으로 getter 함수 가지고 있다.
  - 필요한 경우 setter 함수를 만들어 쓸 수 있다.  

  

## watch 속성 



- Vus 인스턴스의 데이터의 변경을 관찰하고 이에 반응하는 watch 속성을 제공
- 데이터 변경에 대한 응답으로 비동기식 또는 시간이 많이 소요되는 작업을 수행하려는 경우에 가장 유용 



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

</head>
<body>
    <div id="app">
        {{ message }}<br>
        <button @click="chagneMessage">Click</button><br>
        {{ updated }}


    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                number : 1,
                message :'안녕하세요', 
                updated: 'N'
            },
            methods:{
                mReverseMessage(){
                    return this.message.split('').reverse().join('');
                },
                chagneMessage(){
                    this.message = '쥬드리';
                }
            },
            computed:{
                reverseMessage(){
                    return this.message.split('').reverse().join('');
                }
            },
            watch :{
                message(nawVal, oldVal){
                    console.log('new' + nawVal);
                    console.log('old' + oldVal);
                    this.updated = 'Y'
                }
            }
            
        
        })
    </script>
</body>
</html>
```



- ### computed 속성 vs watch 속성

  - computed : 계산해야하는 목표 데이터를 정의하는 방식 ( '선언형 프로그래밍' 방식  By 소프트웨어 공학 )
  - watch : 감시할 데이터를 지정하고 그 데이터가 바뀌면 함수를 실행하는 방식  ( '명령형 프로그래밍' 방식  By 소프트웨어 공학 )





## 클래스 & 스타일 바인딩



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <style>
        .red{color:#f00;}
        .bold{font-weight:bold;}
    </style>
</head>
<body>
    <div id="app">
       <div class="red bold">Hello</div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                
            },
            methods:{
            },
            computed:{
            },
            watch :{}           
        
        })
    </script>
</body>
</html>
```





### 클래스바인딩

- 기본 클래스 바인딩 
- :class = v-blnd:class

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <style>
        .red{color:#f00;}
        .bold{font-weight:bold;}
    </style>
</head>
<body>
    <div id="app">
       <div :class="{red: isRed, bold: isBold}">Hello</div> <!-- v-blnd:class -->
       <button @click="update">Click</button>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                isRed: false,
                isBold: false
            },
            methods:{
                update(){
                    this.isRed = !this.isRed;
                    this.isBold = !this.isBold;
                }
            },
            computed:{
            },
            watch :{}           
        
        })
    </script>
</body>
</html>	
```

- 기존클래스와 공존할 수도 있다. 

```html
<div
  class="static"
  v-bind:class="{red: isRed, bold: isBold}"
></div>
```



- 클래스 이름에 '-'(하이픈)이 있는경우

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <style>
        .red{color:#f00;}
        .bold{font-weight:bold;}
        .text-type{color:#00f;font-weight:bold;}
    </style>
</head>
<body>
    <div id="app">
       <div :class="{'text-type': isType}">Hello</div>
       <button @click="update">Click</button>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                isRed: false,
                isBold: false,
                isType : false
            },
            methods:{
                update(){
                    this.isRed = !this.isRed;
                    this.isBold = !this.isBold;
                    this.isType = !this.isType;
                }
            },
            computed:{
            },
            watch :{}           
        
        })
    </script>
</body>
</html>
```

- 바인딩되는 객체는 꼭 하나가 아니라 객체형태여도 가능

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <style>
        .red{color:#f00;}
        .bold{font-weight:bold;}
        .text-type{color:#00f;font-weight:bold;}
    </style>
</head>
<body>
    <div id="app">
       <div :class="classObject">Hello</div>
       <button @click="update">Click</button>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                isType : false,
                classObject:{
                    red: false,
                    bold: false,
                }
            },
            methods:{
                update(){
                    this.classObject.red = !this.classObject.red;
                    this.classObject.bold = !this.classObject.bold;
                }
            },
            computed:{
            },
            watch :{}           
        
        })
    </script>
</body>
</html>
```



- 계산된 속성에도 바인딩

```html
<div v-bind:class="classObject"></div>
```

```javascript
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```

- 삼항연산자로

```html
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```



- ex: 지금까지 배운거 가지고 에러문구와 에러스타일 해보기!! ( 공백일때 빈칸채워주세요 문구 출력)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <style>
        .red{color:#f00;}
        .bold{font-weight:bold;}
        .text-type{color:#000;font-weight:bold;}
        .error-text{display:none;color:#f00;font-weight:bold;}
        
        .error-type input{border:2px solid #f00;}
        .error-type .error-text{display:block;}
 
    </style>
</head>
<body>
    <div id="app">
        <div class="form-item" :class="{'error-type' : error}">
            <input type="text"  v-model="name">
            <button>확인</button>
            <p class="error-text" >빈칸을 채워주세요.</p>
        </div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                name:'홍길동',
                isType : false,
                arror: false,
                isActive: true,
            },
            methods:{
                
            },
            watch:{
                name(){
                    if( this.name == "" ){
                        this.error = true;                    
                    }
                }
            },
            computed :{   
            }           
        
        })
    </script>
</body>
</html>
```



### 스타일바인딩

- `v-bind:style` 객체 구문은 매우 직설적입니다. 거의 CSS 처럼 보이지만 JavaScript 객체
- css의 경우 '-'(하이픈) 으로 연결되는것만 카멜로 표기해주고 같은 사용법 
- 속성 이름에 camelCase와 kebab-case (따옴표를 함께 사용해야 합니다)를 사용

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <style>
        .red{color:#f00;}
        .bold{font-weight:bold;}
        .text-type{color:#000;font-weight:bold;}
        .error-text{display:none;color:#f00;font-weight:bold;}
        
        .error-type input{border:2px solid #f00;}
        .error-type .error-text{display:block;}
 
    </style>
</head>
<body>
    <div id="app">
        <div :style="{color:red, fontSize:size}">Hello</div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                red: '#f00',
                size: '30px',
                name:'홍길동',
                isType : false,
                arror: false,
                isActive: true,
            },
            methods:{
                
            },
            watch:{
                name(){
                    if( this.name == "" ){
                        this.error = true;                    
                    }
                }
            },
            computed :{   
            }           
        
        })
    </script>
</body>
</html>
```



- 컴포넌트와 함께 사용

예를 들어, 이 컴포넌트를 선언하는 경우에:

```javascript
Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})
```

사용할 클래스 일부를 추가:

```html
<my-component class="baz boo"></my-component>
```

렌더링 된 HTML :

```html
<p class="foo bar baz boo">Hi</p>
```

클래스 바인딩도 동일:

```html
<my-component v-bind:class="{ active: isActive }"></my-component>
```

`isActive`가 참일 때 렌더링 된 HTML은 아래와 같다:

```html
<p class="foo bar active">Hi</p>
```



- 다중값 제공 (2.3 버전부터)
- 스타일 속성에 접두사가 있는 여러값을 배열로 전달

```html
<div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

- 브라우저가 지원하는 배열의 마지막 값만 렌더링
- 이 예제에서는 flexbox의 접두어가 붙지않은 버전을 지원하는 브라우저에 대해 `display : flex`를 렌더링



## 조건문 사용 v-if

- 개발자 도구상에서 봐도 div 태그 없음

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <style>
    </style>
</head>
<body>
    <div id="app">
        <div v-if="show">YES</div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                show:false
            }        
        
        })
    </script>
</body>
</html>
```

- toggle해서 관찰

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <style>
    </style>
</head>
<body>
    <div id="app">
        <div v-if="show">YES</div>
        <button @click="toggleShow">Click</button>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                show:false
            },
            methods:{
                toggleShow(){
                    this.show = !this.show;
                }
            }        
        
        })
    </script>
</body>
</html>
```

### v-else

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <style>
    </style>
</head>
<body>
    <div id="app">
        <div v-if="show">YES</div>
        <div v-else>NO</div>
        <button @click="toggleShow">Click</button>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                show:false
            },
            methods:{
                toggleShow(){
                    this.show = !this.show;
                }
            }        
        
        })
    </script>
</body>
</html>
```



- 여러개 태그를 한번에 보이게 안보이게 할땐??!!
- template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <style>
    </style>
</head>
<body>
    <div id="app">
        <template v-if="show">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </template>
        <div v-else>NO</div>
        <button @click="toggleShow">Click</button>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                show:false
            },
            methods:{
                toggleShow(){
                    this.show = !this.show;
                }
            }        
        
        })
    </script>
</body>
</html>
```



### v-else-if

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <style>
    </style>
</head>
<body>
    <div id="app">
        <template v-if="number === 1">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </template>
        <div v-else-if="number === 2">Hi</div>
        <div v-else>No</div>
        <button @click="increaseNumber">Click</button>{{number}}
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                show:false,
                number: 1,
            },
            methods:{
                toggleShow(){
                    this.show = !this.show;
                },
                increaseNumber(){
                    this.number++;
                }
            }        
        
        })
    </script>
</body>
</html>
```



## v-show (v-if와의 차이)

- display:none;
- 태그자체는 랜더링

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <style>
    </style>
</head>
<body>
    <div id="app">
        <div v-show="show">Yes</div>
        <button @click="toggleShow">Click</button>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                show:false,
                number: 1,
            },
            methods:{
                toggleShow(){
                    this.show = !this.show;
                },
                increaseNumber(){
                    this.number++;
                }
            }        
        
        })
    </script>
</body>
</html>
```



## v-if vs v-show

- v-if 는 컴포넌트가 적절하게 제거되고 다시 만들어지기 때문에 "진짜" 조건부 랜더링
  - v-if 는초기랜더링에서  조건이 거짓인 경우 아무것도 하지 않는다.
  - 처음으로 참이 될때까지 랜더링 되지 않는다.
- v-show는 단순 , 초기 조건에 관계없이 항상 랜더링된다
  - css기반의 토글
- 일반적으로 v-if는 토글 비용이 높고, v-show는 초기 랜더링 비용이 더 높다.
- 자주 바뀌기 원하면 v-show, 런타임 시 조건이 바뀌지 않으면 v-if를 권장



## v-for

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <style>
    </style>
</head>
<body>
    <div id="app">
        <div>
            {{people[0].name}}   {{people[0].age}}
        </div>
        <div>
            {{people[1].name}}   {{people[1].age}}
        </div>
        <div>
            {{people[2].name}}   {{people[2].age}}
        </div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                people:[
                    {name:'a', age:20},
                    {name:'b', age:21},
                    {name:'c', age:22},
                ]
            },
            methods:{
            }        
        
        })
    </script>
</body>
</html>
```

- ### v-for 와 배열

  - `in` 대신에 `of`를 구분자로 사용할 수 있다. 
  - JavaScript의 이터레이터에 대한 자바스크립트 구문과 유사

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <style>
    </style>
</head>
<body>
    <div id="app">
        <ul>
            <li v-for="person in people"> <strong>{{ person.name }}</strong> {{ person.age }} </li>
        </ul>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                people:[
                    {name:'Jewdri', age:20},
                    {name:'Sally', age:21},
                    {name:'Ella', age:22},
                    {name:'Joy', age:22},
                    {name:'Kaylee', age:22},
                ]
            },
            methods:{
            }        
        
        })
    </script>
</body>
</html>
```

- #### v-for 에서 인덱스가져오기

```html

<div id="app">
    <ul>
        <li v-for="(person, i) in people"> {{i}} : <strong>{{ person.name }}</strong> {{ person.age }} </li>
    </ul>
</div>

```



- ### v-for 와 객체

  - v-for를 사용하여 객체의 속성을 반복

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>뷰 기초 익히기</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <style>
    </style>
</head>
<body>
    <div id="app">
        <ul>
            <li v-for="value in object"> <strong>{{ value }}</strong> </li>
        </ul>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                object:{
                    title: "vue.js 기초다루기",
                    author:"Jewdri",
                    date: "2021.02.25"
                },
                people:[
                    {name:'Jewdri', age:20},
                    {name:'Sally', age:21},
                    {name:'Ella', age:22},
                    {name:'Joy', age:22},
                    {name:'Kaylee', age:22},
                ]
            },
            methods:{
            }        
        
        })
    </script>
</body>
</html>
```



- 키 값은 두번쨰 인자로 제공

```html
<div id="app">
    <ul>
    	<li v-for="(value, key) in object"> {{ key }}: <strong>{{ value }}</strong> </li>
    </ul>
</div>
```

- 인덱스는 세번째 인자

```html
<div id="app">
    <ul>
    	<li v-for="(value, key, i) in object"> {{ i}}. {{ key }}: <strong>{{ value }}</strong> </li>
    </ul>
</div>
```



### v-for 에서 key 속성제공

- v-for 의 각 항목들에 고유한 key 속성을 제공해야한다.
- vue에서 개별 DOM 노드들을 추척하고 기존 엘리먼트를 재사용, 재정렬 위해서 사용
- `key`에 대한 이상적인 값은 각 항목을 식별할 수 있는 고유한 ID

```html
 <ul>
 	<li v-for="(person, i) in people" :key="person.name"> {{ i}}. <strong>{{ person.name }}</strong> {{person.age }}</li>
 </ul>
```

- 보통 가져오는 데이터의 각 항목마다, id가 있기 때문에 id를 넣어주면 된다.

```html
 <ul>
 	<li v-for="(person, i) in people" :key="person.id"> {{ i}}. <strong>{{ person.name }}</strong> {{person.age }}</li>
 </ul>
```

- 인덱스의 경우는 삭제될 경우 인덱스가 바뀌므로 사용하지 말것 





## 여러개의 Vue 인스턴스 사용하기

- 지금까지는 id="app" 안에만 사용
- id="app" 아닌 다른곳에도 사용하려면?

```html

    <div id="app">
        {{ name }}
    </div>
    <div>
        {{ name }}   /* 여기서도 사용하려면 ? */
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                name : 'Jewdri'
            },
            methods:{
            }        
        
        })
    </script>
```

- 아래와 같이

```html

    <div id="app">
        {{ name }}
    </div>
    <div id="app-1">
        {{ name }}
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                name : 'Jewdri'
            },
            methods:{
            }        
        
        })
        
        new Vue({
            el: '#app-1',
            data: {
                name : 'Jewdri'
            },
            methods:{
            }        
        
        })
    </script>
```

- 다른 인스턴스에서 또 다른 인스턴스 데이터 변경하고 싶을 땐 ??

  - 변수에 담는다 (상수)

  ```html
  
      <div id="app">
          {{ name }}
          <button @click="changeText">Click</button>
      </div>
      <div id="app-1">
          {{ name }}
          <button @click="changeText">Click</button>
      </div>
      <script>
          const app = new Vue({
              el: '#app',
              data: {
                  name : 'Jewdri'
              },
              methods:{
                  changeText(){
                      //this.name = 'Jewdri Updated';
                      app1.name = 'Jewdri Updated';
                  }
              }        
          
          })
          
          const app1 = new Vue({
              el: '#app-1',
              data: {
                  name : 'Jewdri1'
              },
              methods:{
                  changeText(){
                      this.name = 'Jewdri1 Updated'
                  }
              }        
          
          })
      </script>
  ```



## Vue 컴포넌트

- 뷰 인스턴스 두개를 사용했지만, 똑같은 데이터와 메쏘드라면??
- 똑같은 데이터와 메쏘드가 반복 => 중복제거 => Vue 컴포넌트 

```html

    <div id="app">
        {{ name }}
        <button @click="changeText">Click</button>
    </div>
    <div id="app-1">
        {{ name }}
        <button @click="changeText">Click</button>
    </div>
    <script>
        const app = new Vue({
            el: '#app',
            data: {
                name : 'Jewdri'
            },
            methods:{
                changeText(){
                    this.name = 'Jewdri Updated'
                }
            }        
        
        })
        
        const app1 = new Vue({
            el: '#app-1',
            data: {
                name : 'Jewdri'
            },
            methods:{
                changeText(){
                    this.name = 'Jewdri Updated'
                }
            }        
        
        })
    </script>
```

- 컴포넌트는 Vue의 가장 강력한 기능중 하나
- HTML 엘리먼트를 확장하여 재사용 가능한 코드를 캡슐화
- Vue 컴포넌트는 Vue 인스턴스 이기도하다
- 옵션 객체를 사용



### Vue 컴포넌트 사용하기

#### 전역등록

- 뷰 컴포넌트는 아래와 같이 사용
- 인스턴스와 다른점은 data를 객체가 아니라 함수형태로 해서 반환해준다.
- 이유는 객체일 경우 재사용될때마다 주소가 참조되어서 값이 변경될때 다 같이 변경되기 때문에 
- 참고 삼아 알아두기 : 원시적 데이터 타입과 참조형 테이터타입의 차이 

```html
    <div id="app">
        <jewdri-button></jewdri-button>
    </div>
    <div id="app-1">
        <jewdri-button></jewdri-button>
    </div>
    <script>
        Vue.component('jewdri-button',{
            template: `
            <div>
                {{ name }}
                <button @click="changeText">Click</button>
            </div>
            `,
            data() {  //재 사용 컴포넌트라서 Object 쓰게 되면 주소가 참조해서 전부 다 값변형될때 업데이트 되기때문에  
                return {
                    name : 'Jewdri'
                }
            },
            methods:{
                changeText(){
                    this.name = 'Jewdri Updated';
                }
            }
        });
        const app = new Vue({
            el: '#app'
        
        })
        
        const app1 = new Vue({
            el: '#app-1'
        
        })
    </script>
```



##### 컴포넌트 안에서 컴포넌트 사용하기

```html

    <div id="app">
        <jewdri-button></jewdri-button>
    </div>
    <div id="app-1">
        <jewdri-button></jewdri-button>
    </div>
    <script>
        Vue.component('hello-world',{
            template: `
                <strong>Hello World</strong>
            `

        })
        Vue.component('jewdri-button',{
            template: `
            <div>
                <hello-world></hello-world><br>
                {{ name }}
                <button @click="changeText">Click</button>
            </div>
            `,
            data() {  //재 사용 컴포넌트라서 Object 쓰게 되면 주소가 참조해서 전부 다 값변형될때 업데이트 되기때문에  
                return {
                    name : 'Jewdri'
                }
            },
            methods:{
                changeText(){
                    this.name = 'Jewdri Updated';
                }
            }
        });
        const app = new Vue({
            el: '#app'
        
        })
        
        const app1 = new Vue({
            el: '#app-1'
        
        })
    </script>
```



#### 지역등록

- 빌드시스템을 사용하고 전역등록만 하게 될 경우,  어떤 컴포넌트를 사용하지 않더라도 최종빌드에는 들어가 있게 된다.
- 사요자가 내려받아야 하는 자바스크립트의 양이 불필요햐게 커지게됨
- 지역등록을 하여 사용할 수 있는 컴포넌트는 지역등록 하는것이 좋다.



1. ##### 컴포넌트를 변수안에 넣는다.

```javascript
 const JewdriButton = {
                template: `
                <div>
                    <hello-world></hello-world><br>
                    {{ name }}
                    <button @click="changeText">Click</button>
                </div>
                `,
                data() {  //재 사용 컴포넌트라서 Object 쓰게 되면 주소가 참조해서 전부 다 값변형될때 업데이트 되기때문에  
                    return {
                        name : 'Jewdri'
                    }
                },
                methods:{
                    changeText(){
                        this.name = 'Jewdri Updated';
                    }
                }

  }
```

2. ##### 사용하려는 인스턴스에 컴포넌트를 등록한다.

   : 태그이름(컴포넌트 이름 ) : 변수이름 

```javascript
const app = new Vue({
            el: '#app',
            components : {
                'jewdri-button':JewdriButton
            }
        
})
```



##### 두개 다 지역컴포넌트로 사용하기

```html

    <div id="app">
        <jewdri-button></jewdri-button>
    </div>

    <script>
        const helloWorld = {
            template: `
                <strong>Hello World</strong>
            `
        }


        const JewdriButton = {
            components:{
                'hello-world' : helloWorld
            },
            template: `
            <div>
                <hello-world></hello-world><br>
                {{ name }}
                <button @click="changeText">Click</button>
            </div>
            `,
            data() {  //재 사용 컴포넌트라서 Object 쓰게 되면 주소가 참조해서 전부 다 값변형될때 업데이트 되기때문에  
                return {
                    name : 'Jewdri'
                }
            },
            methods:{
                changeText(){
                    this.name = 'Jewdri Updated';
                }
            }

        }
        const app = new Vue({
            el: '#app',
            components : {
                'jewdri-button':JewdriButton
            }
        
        })
    </script>
```



