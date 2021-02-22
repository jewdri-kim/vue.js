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



- 지금까지 배운거 가지고 에러문구와 에러스타일 해보기!!

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

