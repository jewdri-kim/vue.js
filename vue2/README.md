## Vue.js 입문 - 다루기, 친해지기

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
                },
                inputData : 'hello',
                type:'number',
                link: 'https://www.naver.com'
            },
            methods:{
                nextYear :function(greeting){
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
                },
                inputData : 'hello',
                type:'number',
                link: 'https://www.naver.com'
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



# 데이터 바인딩 (Data Binding)

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



## (여기서부터 다음시간에) computed 와 watch



### computed 속성

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
        {{ message.split('').reverse().join('')}}
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                number : 1,
                message :'안녕하세요'
            },
            methods:{
            }
        })
    </script>
</body>
</html>
```

