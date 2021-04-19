# Style Guide





# 스타일 가이드



이 문서는 Vue 코드에 대한 공식 스타일 가이드입니다. 

만약 현재 Vue를 사용하여 프로젝트를 진행중이라면 이 문서는 에러와 바이크쉐딩(bikeshedding), 안티패턴을 피하는 좋은 참조가 될것 입니다. 그러나 이 문서에서 제시하는 스타일 가이드가 당신의 프로젝트에 무조건 적합한 것은 아닙니다. 그러므로 당신의 경험과 기술스택, 개인적 통찰력을 바탕으로 이 스타일 가이드가 적용되는 것을 권장해드립니다.

대부분의 경우 우리는 HTML과 자바스크립트에 대한 제안은 일반적으로 피합니다. 우리는 당신이 세미콜론이나 쉼표(trailing commas)에 대한 사용여부는 신경쓰지 않습니다. 우리는 당신이 HTML의 속성값을 위해 작음따옴표를 사용하지는 큰따옴표를 사용하는지 신경쓰지 않습니다. 그러나 특정 패턴이 뷰 컨텍스트에서 유용하다고 발견된 경우 예외가 존재합니다.

> **Soon, we’ll also provide tips for enforcement.** Sometimes you’ll simply have to be disciplined, but wherever possible, we’ll try to show you how to use ESLint and other automated processes to make enforcement simpler.





## [우선순위 A 규칙: 필수 (에러 방지)](https://kr.vuejs.org/v2/style-guide/#우선순위-A-규칙-필수-에러-방지)



### [컴포넌트 이름에 합성어 사용필수](https://kr.vuejs.org/v2/style-guide/#컴포넌트-이름에-합성어-사용-필수)

**root 컴포넌트인 `App` 과 `<transition>`, `<component>`등 Vue에서 제공되는 빌트인 컴포넌트를 제외하고 컴포넌트의 이름은 항상 합성어를 사용해야한다.**

모든 HTML 엘리먼트의 이름은 한 단어이기 때문에 합성어를 사용하는 것은 기존 그리고 향후 HTML엘리먼트와의 [충돌을 방지해줍니다](https://w3c.github.io/webcomponents/spec/custom/#valid-custom-element-name).

#### 나쁨

Vue.component(‘todo’, {
// …
})

```javascript
export default {
  name: 'Todo',
  // ...
}
```

#### 좋음

```javascript
Vue.component('todo-item', {
  // ...
})
export default {
  name: 'TodoItem',
  // ...
}
```



### [컴포넌트 데이터필수](https://kr.vuejs.org/v2/style-guide/#컴포넌트-데이터-필수)

**컴포넌트의 `data` 는 반드시 함수여야 합니다.**

컴포넌트(i.e. `new Vue`를 제외한 모든곳)의 `data` 프로퍼티의 값은 반드시 객체(object)를 반환하는 함수여야 한다.

<details style="border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); display: block; position: relative; color: rgb(48, 68, 85); font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="cursor: pointer; padding: 1.6em; margin: -1.6em; outline: none;"><h4 style="font-weight: 600; color: rgb(39, 56, 73); margin: 0px; display: inline-block;">자세한 설명</h4><span>&nbsp;</span></summary></details>

#### 나쁨

```javascript
Vue.component('some-comp', {
  data: {
    foo: 'bar'
  }
})
export default {
  data: {
    foo: 'bar'
  }
}
```

#### 좋음

```javascript
Vue.component('some-comp', {
  data: function () {
    return {
      foo: 'bar'
    }
  }
})
// In a .vue file
export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}
// It's OK to use an object directly in a root
// Vue instance, since only a single instance
// will ever exist.
new Vue({
  data: {
    foo: 'bar'
  }
})
```



### [Props 정의필수](https://kr.vuejs.org/v2/style-guide/#Props-정의-필수)

**Prop은 가능한 상세하게 정의되어야 합니다.**

커밋 된 코드에서, prop 정의는 적어도 타입은 명시되도록 가능한 상세하게 정의되어야 합니다.

<details style="border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); display: block; position: relative; color: rgb(48, 68, 85); font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="cursor: pointer; padding: 1.6em; margin: -1.6em; outline: none;"><h4 style="font-weight: 600; color: rgb(39, 56, 73); margin: 0px; display: inline-block;">자세한 설명</h4><span>&nbsp;</span></summary></details>

#### 나쁨

```javascript
// This is only OK when prototyping
props: ['status']
```

#### 좋음

```javascript
props: {
  status: String
}
// Even better!
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```





### [`v-for` 에 `key` 지정필수](https://kr.vuejs.org/v2/style-guide/#v-for-에-key-지정-필수)

**`v-for`는 `key`와 항상 함께 사용합니다.**

서브트리의 내부 컴포넌트 상태를 유지하기 위해 `v-for`는 *항상* `key`와 함께 요구됩니다. 비록 엘리먼트이긴 하지만 에니메이션의 [객체 불변성](https://bost.ocks.org/mike/constancy/)과 같이 예측 가능한 행동을 유지하는것은 좋은 습관입니다.

<details style="border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); display: block; position: relative; color: rgb(48, 68, 85); font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="cursor: pointer; padding: 1.6em; margin: -1.6em; outline: none;"><h4 style="font-weight: 600; color: rgb(39, 56, 73); margin: 0px; display: inline-block;">자세한 설명</h4><span>&nbsp;</span></summary></details>

#### 나쁨

```html
<ul>
  <li v-for="todo in todos">
    {{ todo.text }}
  </li>
</ul>
```

#### 좋음

```html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```







### [`v-if`와 `v-for`를 동시에 사용하지 마세요필수](https://kr.vuejs.org/v2/style-guide/#v-if와-v-for를-동시에-사용하지-마세요-필수)

**`v-for`가 사용된 엘리먼트에 절대 `v-if`를 사용하지 마세요.**

사용 가능해 보이는 두 가지 일반적인 경우가 있습니다:

- 리스트 목록을 필터링하기 위해서 입니다 (e.g. `v-for="user in users" v-if="user.isActive"`). 이 경우 users을 새로운 computed 속성으로 필더링된 목록으로 대체하십시오(e.g. `activeUsers`).
- 숨기기 위해 리스트의 랜더링을 피할 때 입니다 (e.g. `v-for="user in users" v-if="shouldShowUsers"`). 이 경우 `v-if`를 컨테이너 엘리먼트로 옮기세요 (e.g. `ul`, `ol`).

<details open="" style="border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); display: block; position: relative; color: rgb(48, 68, 85); font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="cursor: pointer; padding: 1.6em; margin: -1.6em; outline: none;"><h4 style="font-weight: 600; color: rgb(39, 56, 73); margin: 0px; display: inline-block;">자세한 설명</h4></summary><p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1;">When Vue processes directives,<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">v-for</code><span>&nbsp;</span>has a higher priority than<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">v-if</code>, so that this template:</p><figure class="highlight html" style="margin: 1.2em 0px;"><table><tbody><tr><td class="code"><pre style="border-radius: 2px; position: relative; font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial;"><code class="hljs html" style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85rem; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(82, 82, 82); padding: 1.2em 1.4em; margin: 0px 2px; border-radius: 2px; white-space: pre; overflow-x: auto; line-height: 1.6rem; display: block;"><span class="hljs-tag" style="color: rgb(41, 115, 183);">&lt;<span class="hljs-name">ul</span>&gt;</span><br>  <span class="hljs-tag" style="color: rgb(41, 115, 183);">&lt;<span class="hljs-name">li</span></span><br><span class="hljs-tag" style="color: rgb(41, 115, 183);">    <span class="hljs-attr">v-for</span>=<span class="hljs-string" style="color: rgb(66, 185, 131);">"user in users"</span></span><br><span class="hljs-tag" style="color: rgb(41, 115, 183);">    <span class="hljs-attr">v-if</span>=<span class="hljs-string" style="color: rgb(66, 185, 131);">"user.isActive"</span></span><br><span class="hljs-tag" style="color: rgb(41, 115, 183);">    <span class="hljs-attr">:key</span>=<span class="hljs-string" style="color: rgb(66, 185, 131);">"user.id"</span></span><br><span class="hljs-tag" style="color: rgb(41, 115, 183);">  &gt;</span><br>    {{ user.name }}<br>  <span class="hljs-tag" style="color: rgb(41, 115, 183);">&lt;/<span class="hljs-name">li</span>&gt;</span><br><span class="hljs-tag" style="color: rgb(41, 115, 183);">&lt;/<span class="hljs-name">ul</span>&gt;</span><br></code></pre></td></tr></tbody></table></figure><p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1;">Will be evaluated similar to:</p><figure class="highlight js" style="margin: 1.2em 0px;"><table><tbody><tr><td class="code"><pre style="border-radius: 2px; position: relative; font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial;"><code class="hljs js" style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85rem; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(82, 82, 82); padding: 1.2em 1.4em; margin: 0px 2px; border-radius: 2px; white-space: pre; overflow-x: auto; line-height: 1.6rem; display: block;"><span class="hljs-built_in" style="color: rgb(66, 185, 131);">this</span>.users.map(<span class="hljs-function"><span class="hljs-keyword" style="color: rgb(214, 50, 0);">function</span> (<span class="hljs-params">user</span>) </span>{<br>  <span class="hljs-keyword" style="color: rgb(214, 50, 0);">if</span> (user.isActive) {<br>    <span class="hljs-keyword" style="color: rgb(214, 50, 0);">return</span> user.name<br>  }<br>})<br></code></pre></td></tr></tbody></table></figure><p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1;">So even if we only render elements for a small fraction of users, we have to iterate over the entire list every time we re-render, whether or not the set of active users has changed.</p><p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1;">By iterating over a computed property instead, like this:</p><figure class="highlight js" style="margin: 1.2em 0px;"><table><tbody><tr><td class="code"><pre style="border-radius: 2px; position: relative; font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial;"><code class="hljs js" style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85rem; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(82, 82, 82); padding: 1.2em 1.4em; margin: 0px 2px; border-radius: 2px; white-space: pre; overflow-x: auto; line-height: 1.6rem; display: block;">computed: {<br>  activeUsers: <span class="hljs-function"><span class="hljs-keyword" style="color: rgb(214, 50, 0);">function</span> (<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-keyword" style="color: rgb(214, 50, 0);">return</span> <span class="hljs-built_in" style="color: rgb(66, 185, 131);">this</span>.users.filter(<span class="hljs-function"><span class="hljs-keyword" style="color: rgb(214, 50, 0);">function</span> (<span class="hljs-params">user</span>) </span>{<br>      <span class="hljs-keyword" style="color: rgb(214, 50, 0);">return</span> user.isActive<br>    })<br>  }<br>}<br></code></pre></td></tr></tbody></table></figure><figure class="highlight html" style="margin: 1.2em 0px;"><table><tbody><tr><td class="code"><pre style="border-radius: 2px; position: relative; font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial;"><code class="hljs html" style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85rem; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(82, 82, 82); padding: 1.2em 1.4em; margin: 0px 2px; border-radius: 2px; white-space: pre; overflow-x: auto; line-height: 1.6rem; display: block;"><span class="hljs-tag" style="color: rgb(41, 115, 183);">&lt;<span class="hljs-name">ul</span>&gt;</span><br>  <span class="hljs-tag" style="color: rgb(41, 115, 183);">&lt;<span class="hljs-name">li</span></span><br><span class="hljs-tag" style="color: rgb(41, 115, 183);">    <span class="hljs-attr">v-for</span>=<span class="hljs-string" style="color: rgb(66, 185, 131);">"user in activeUsers"</span></span><br><span class="hljs-tag" style="color: rgb(41, 115, 183);">    <span class="hljs-attr">:key</span>=<span class="hljs-string" style="color: rgb(66, 185, 131);">"user.id"</span></span><br><span class="hljs-tag" style="color: rgb(41, 115, 183);">  &gt;</span><br>    {{ user.name }}<br>  <span class="hljs-tag" style="color: rgb(41, 115, 183);">&lt;/<span class="hljs-name">li</span>&gt;</span><br><span class="hljs-tag" style="color: rgb(41, 115, 183);">&lt;/<span class="hljs-name">ul</span>&gt;</span><br></code></pre></td></tr></tbody></table></figure><p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1;">다음과 같은 이점을 얻을 수 있다:</p><ul style="line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: inherit; z-index: 1; padding-left: 1.5em;"><li>The filtered list will<span>&nbsp;</span><em style="color: rgb(79, 89, 89);">only</em><span>&nbsp;</span>be re-evaluated if there are relevant changes to the<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">users</code><span>&nbsp;</span>array, making filtering much more efficient.</li><li>Using<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">v-for="user in activeUsers"</code>, we<span>&nbsp;</span><em style="color: rgb(79, 89, 89);">only</em><span>&nbsp;</span>iterate over active users during render, making rendering much more efficient.</li><li>Logic is now decoupled from the presentation layer, making maintenance (change/extension of logic) much easier.</li></ul><p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1;">We get similar benefits from updating:</p><figure class="highlight html" style="margin: 1.2em 0px;"><table><tbody><tr><td class="code"><pre style="border-radius: 2px; position: relative; font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial;"><code class="hljs html" style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85rem; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(82, 82, 82); padding: 1.2em 1.4em; margin: 0px 2px; border-radius: 2px; white-space: pre; overflow-x: auto; line-height: 1.6rem; display: block;"><span class="hljs-tag" style="color: rgb(41, 115, 183);">&lt;<span class="hljs-name">ul</span>&gt;</span><br>  <span class="hljs-tag" style="color: rgb(41, 115, 183);">&lt;<span class="hljs-name">li</span></span><br><span class="hljs-tag" style="color: rgb(41, 115, 183);">    <span class="hljs-attr">v-for</span>=<span class="hljs-string" style="color: rgb(66, 185, 131);">"user in users"</span></span><br><span class="hljs-tag" style="color: rgb(41, 115, 183);">    <span class="hljs-attr">v-if</span>=<span class="hljs-string" style="color: rgb(66, 185, 131);">"shouldShowUsers"</span></span><br><span class="hljs-tag" style="color: rgb(41, 115, 183);">    <span class="hljs-attr">:key</span>=<span class="hljs-string" style="color: rgb(66, 185, 131);">"user.id"</span></span><br><span class="hljs-tag" style="color: rgb(41, 115, 183);">  &gt;</span><br>    {{ user.name }}<br>  <span class="hljs-tag" style="color: rgb(41, 115, 183);">&lt;/<span class="hljs-name">li</span>&gt;</span><br><span class="hljs-tag" style="color: rgb(41, 115, 183);">&lt;/<span class="hljs-name">ul</span>&gt;</span><br></code></pre></td></tr></tbody></table></figure><p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1;">to:</p><figure class="highlight html" style="margin: 1.2em 0px;"><table><tbody><tr><td class="code"><pre style="border-radius: 2px; position: relative; font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial;"><code class="hljs html" style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85rem; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(82, 82, 82); padding: 1.2em 1.4em; margin: 0px 2px; border-radius: 2px; white-space: pre; overflow-x: auto; line-height: 1.6rem; display: block;"><span class="hljs-tag" style="color: rgb(41, 115, 183);">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string" style="color: rgb(66, 185, 131);">"shouldShowUsers"</span>&gt;</span><br>  <span class="hljs-tag" style="color: rgb(41, 115, 183);">&lt;<span class="hljs-name">li</span></span><br><span class="hljs-tag" style="color: rgb(41, 115, 183);">    <span class="hljs-attr">v-for</span>=<span class="hljs-string" style="color: rgb(66, 185, 131);">"user in users"</span></span><br><span class="hljs-tag" style="color: rgb(41, 115, 183);">    <span class="hljs-attr">:key</span>=<span class="hljs-string" style="color: rgb(66, 185, 131);">"user.id"</span></span><br><span class="hljs-tag" style="color: rgb(41, 115, 183);">  &gt;</span><br>    {{ user.name }}<br>  <span class="hljs-tag" style="color: rgb(41, 115, 183);">&lt;/<span class="hljs-name">li</span>&gt;</span><br><span class="hljs-tag" style="color: rgb(41, 115, 183);">&lt;/<span class="hljs-name">ul</span>&gt;</span><br></code></pre></td></tr></tbody></table></figure><p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px 0px; padding-bottom: 0px; position: relative; z-index: 1;">By moving the<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">v-if</code><span>&nbsp;</span>to a container element, we’re no longer checking<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">shouldShowUsers</code><span>&nbsp;</span>for<span>&nbsp;</span><em style="color: rgb(79, 89, 89);">every</em><span>&nbsp;</span>user in the list. Instead, we check it once and don’t even evaluate the<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">v-for</code><span>&nbsp;</span>if<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">shouldShowUsers</code><span>&nbsp;</span>is false.</p></details>

#### 나쁨

```html
<ul>
  <li
    v-for="user in users"
    v-if="user.isActive"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
<ul>
  <li
    v-for="user in users"
    v-if="shouldShowUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

#### 좋음

```html
<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```





### [컴포넌트 스타일 스코프필수](https://kr.vuejs.org/v2/style-guide/#컴포넌트-스타일-스코프-필수)

애플리케이션의 경우 최상위 '앱' 구성요소 및 레이아웃 구성요소의 스타일은 전역적일 수 있지만 다른 구성요소는 항상 범위가 지정되어야 합니다.

<details open="" style="border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); display: block; position: relative; color: rgb(48, 68, 85); font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="cursor: pointer; padding: 1.6em; margin: -1.6em; outline: none;"><h4 style="font-weight: 600; color: rgb(39, 56, 73); margin: 0px; display: inline-block;">자세한 설명</h4></summary><p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1;">If you are developing a large project, working with other developers, or sometimes include 3rd-party HTML/CSS (e.g. from Auth0), consistent scoping will ensure that your styles only apply to the components they are meant for.</p><p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px 0px; padding-bottom: 0px; position: relative; z-index: 1;">Beyond the<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">scoped</code><span>&nbsp;</span>attribute, using unique class names can help ensure that 3rd-party CSS does not apply to your own HTML. For example, many projects use the<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">button</code>,<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">btn</code>, or<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">icon</code><span>&nbsp;</span>class names, so even if not using a strategy such as BEM, adding an app-specific and/or component-specific prefix (e.g.<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">ButtonClose-icon</code>) can provide some protection.</p></details>

#### 나쁨

```html
<template>
  <button class="btn btn-close">X</button>
</template>

<style>
.btn-close {
  background-color: red;
}
</style>
```

#### 좋음

```html
<template>
  <button class="button button-close">X</button>
</template>

<!-- Using the `scoped` attribute -->
<style scoped>
.button {
  border: none;
  border-radius: 2px;
}

.button-close {
  background-color: red;
}
</style>
<template>
  <button :class="[$style.button, $style.buttonClose]">X</button>
</template>

<!-- Using CSS modules -->
<style module>
.button {
  border: none;
  border-radius: 2px;
}

.buttonClose {
  background-color: red;
}
</style>
<template>
  <button class="c-Button c-Button--close">X</button>
</template>

<!-- Using the BEM convention -->
<style>
.c-Button {
  border: none;
  border-radius: 2px;
}

.c-Button--close {
  background-color: red;
}
</style>
```





### [Private 속성 이름필수](https://kr.vuejs.org/v2/style-guide/#Private-속성-이름-필수)

**플러그인, mixin 등에서 커스텀 사용자 private 프로터피에는 항상 접두사 `$_`를 사용하라. 그 다음 다른 사람의 코드와 충돌을 피하려면 named scope를 포함하라. (e.g. `$_yourPluginName_`).**

<details style="border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); display: block; position: relative; color: rgb(48, 68, 85); font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="cursor: pointer; padding: 1.6em; margin: -1.6em; outline: none;"><h4 style="font-weight: 600; color: rgb(39, 56, 73); margin: 0px; display: inline-block;">자세한 설명</h4><span>&nbsp;</span></summary></details>

#### 나쁨

```html
var myGreatMixin = {
  // ...
  methods: {
    update: function () {
      // ...
    }
  }
}
var myGreatMixin = {
  // ...
  methods: {
    _update: function () {
      // ...
    }
  }
}
var myGreatMixin = {
  // ...
  methods: {
    $update: function () {
      // ...
    }
  }
}
var myGreatMixin = {
  // ...
  methods: {
    $_update: function () {
      // ...
    }
  }
}
```

#### 좋음

```html
var myGreatMixin = {
  // ...
  methods: {
    $_myGreatMixin_update: function () {
      // ...
    }
  }
}
// Even better!
var myGreatMixin = {
  // ...
  methods: {
    publicMethod() {
      // ...
      myPrivateFunction()
    }
  }
}

function myPrivateFunction() {
  // ...
}

export default myGreatMixin
```





## [우선순위 B 규칙: 매우 추천함 (가독성 향상을 위함)](https://kr.vuejs.org/v2/style-guide/#우선순위-B-규칙-매우-추천함-가독성-향상을-위함)



### [컴포넌트 파일매우 추천함](https://kr.vuejs.org/v2/style-guide/#컴포넌트-파일-매우-추천함)

**Whenever a build system is available to concatenate files, each component should be in its own file.**

This helps you to more quickly find a component when you need to edit it or review how to use it.

#### 나쁨

```javascript
Vue.component('TodoList', {
  // ...
})

Vue.component('TodoItem', {
  // ...
})
```

#### 좋음

```javascript
components/
|- TodoList.js
|- TodoItem.js
components/
|- TodoList.vue
|- TodoItem.vue
```





### [싱글 파일 컴포넌트 이름 규칙 지정(casing)매우 추천함](https://kr.vuejs.org/v2/style-guide/#싱글-파일-컴포넌트-이름-규칙-지정-casing-매우-추천함)

**Filenames of [single-file components](https://kr.vuejs.org/v2/guide/single-file-components.html) 의 파일 이름은 항상 PascalCase이거나 항상 케밥 케이스여야 합니다.****

PascalCase works best with autocompletion in code editors, as it’s consistent with how we reference components in JS(X) and templates, wherever possible. However, mixed case filenames can sometimes create issues on case-insensitive file systems, which is why kebab-case is also perfectly acceptable.

**=> 우리는 PascalCase

#### 나쁨

```javascript
components/
|- mycomponent.vue
components/
|- myComponent.vue
```

#### 좋음

```javascript
components/
|- MyComponent.vue
components/
|- my-component.vue
```



### [베이스 컴포넌트 이름매우 추천함](https://kr.vuejs.org/v2/style-guide/#베이스-컴포넌트-이름-매우-추천함)

**Base components (a.k.a. presentational, dumb, or pure components) that apply app-specific styling and conventions should all begin with a specific prefix, such as `Base`, `App`, or `V`.**



=> Base 로!

<details open="" style="border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); display: block; position: relative; color: rgb(48, 68, 85); font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="cursor: pointer; padding: 1.6em; margin: -1.6em; outline: none;"><h4 style="font-weight: 600; color: rgb(39, 56, 73); margin: 0px; display: inline-block;">자세한 설명</h4></summary><p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1;">These components lay the foundation for consistent styling and behavior in your application. They may<span>&nbsp;</span><strong style="font-weight: 600; color: rgb(39, 56, 73);">only</strong><span>&nbsp;</span>contain:</p><ul style="line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: inherit; z-index: 1; padding-left: 1.5em;"><li>HTML elements,</li><li>other base components, and</li><li>3rd-party UI components.</li></ul><p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1;">But they’ll<span>&nbsp;</span><strong style="font-weight: 600; color: rgb(39, 56, 73);">never</strong><span>&nbsp;</span>contain global state (e.g. from a Vuex store).</p><p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1;">Their names often include the name of an element they wrap (e.g.<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">BaseButton</code>,<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">BaseTable</code>), unless no element exists for their specific purpose (e.g.<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">BaseIcon</code>). If you build similar components for a more specific context, they will almost always consume these components (e.g.<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">BaseButton</code><span>&nbsp;</span>may be used in<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">ButtonSubmit</code>).</p><p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1;">Some advantages of this convention:</p><ul style="line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: inherit; z-index: 1; padding-left: 1.5em;"><li><p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px 0px; padding-bottom: 0px; position: relative; z-index: 1;">When organized alphabetically in editors, your app’s base components are all listed together, making them easier to identify.</p></li><li><p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px 0px; padding-bottom: 0px; position: relative; z-index: 1;">Since component names should always be multi-word, this convention prevents you from having to choose an arbitrary prefix for simple component wrappers (e.g.<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">MyButton</code>,<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">VueButton</code>).</p></li><li><p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1;">Since these components are so frequently used, you may want to simply make them global instead of importing them everywhere. A prefix makes this possible with Webpack:</p><figure class="highlight js" style="margin: 1.2em 0px 0px; padding-bottom: 0px;"><table><tbody><tr><td class="code"><pre style="border-radius: 2px; position: relative; font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial;"><code class="hljs js" style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85rem; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(82, 82, 82); padding: 1.2em 1.4em; margin: 0px 2px; border-radius: 2px; white-space: pre; overflow-x: auto; line-height: 1.6rem; display: block;"><span class="hljs-keyword" style="color: rgb(214, 50, 0);">var</span> requireComponent = <span class="hljs-built_in" style="color: rgb(66, 185, 131);">require</span>.context(<span class="hljs-string" style="color: rgb(66, 185, 131);">"./src"</span>, <span class="hljs-literal" style="color: rgb(163, 46, 255);">true</span>, <span class="hljs-regexp" style="color: rgb(66, 185, 131);">/^Base[A-Z]/</span>)<br>requireComponent.keys().forEach(<span class="hljs-function"><span class="hljs-keyword" style="color: rgb(214, 50, 0);">function</span> (<span class="hljs-params">fileName</span>) </span>{<br>  <span class="hljs-keyword" style="color: rgb(214, 50, 0);">var</span> baseComponentConfig = requireComponent(fileName)<br>  baseComponentConfig = baseComponentConfig.default || baseComponentConfig<br>  <span class="hljs-keyword" style="color: rgb(214, 50, 0);">var</span> baseComponentName = baseComponentConfig.name || (<br>    fileName<br>      .replace(<span class="hljs-regexp" style="color: rgb(66, 185, 131);">/^.+\//</span>, <span class="hljs-string" style="color: rgb(66, 185, 131);">''</span>)<br>      .replace(<span class="hljs-regexp" style="color: rgb(66, 185, 131);">/\.\w+$/</span>, <span class="hljs-string" style="color: rgb(66, 185, 131);">''</span>)<br>  )<br>  Vue.component(baseComponentName, baseComponentConfig)<br>})<br></code></pre></td></tr></tbody></table></figure></li></ul></details>

#### 나쁨

```
components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue
```

#### 좋음

```
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue
components/
|- AppButton.vue
|- AppTable.vue
|- AppIcon.vue
components/
|- VButton.vue
|- VTable.vue
|- VIcon.vue
```



### [싱글 인스턴스 컴포넌트 이름매우 추천함](https://kr.vuejs.org/v2/style-guide/#싱글-인스턴스-컴포넌트-이름-매우-추천함)

**Components that should only ever have a single active instance should begin with the `The` prefix, to denote that there can be only one.**

This does not mean the component is only used in a single page, but it will only be used once *per page*. These components never accept any props, since they are specific to your app, not their context within your app. If you find the need to add props, it’s a good indication that this is actually a reusable component that is only used once per page *for now*.



=> TheHeader.vue, TheFooter.vue

#### 나쁨

```
components/
|- Heading.vue
|- MySidebar.vue
```

#### 좋음

```
components/
|- TheHeading.vue
|- TheSidebar.vue
```



### [강한 연관성을 가진 컴포넌트 이름매우 추천함](https://kr.vuejs.org/v2/style-guide/#강한-연관성을-가진-컴포넌트-이름-매우-추천함)

**Child components that are tightly coupled with their parent should include the parent component name as a prefix.**

If a component only makes sense in the context of a single parent component, that relationship should be evident in its name. Since editors typically organize files alphabetically, this also keeps these related files next to each other.

<details style="border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); display: block; position: relative; color: rgb(48, 68, 85); font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="cursor: pointer; padding: 1.6em; margin: -1.6em; outline: none;"><h4 style="font-weight: 600; color: rgb(39, 56, 73); margin: 0px; display: inline-block;">자세한 설명</h4><span>&nbsp;</span></summary></details>

#### 나쁨

```
components/
|- TodoList.vue
|- TodoItem.vue
|- TodoButton.vue
components/
|- SearchSidebar.vue
|- NavigationForSearchSidebar.vue
```

#### 좋음

```
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue
components/
|- SearchSidebar.vue
|- SearchSidebarNavigation.vue
```



### [컴포넌트 이름의 단어 순서 정렬매우 추천함](https://kr.vuejs.org/v2/style-guide/#컴포넌트-이름의-단어-순서-정렬-매우-추천함)

**Component names should start with the highest-level (often most general) words and end with descriptive modifying words.**

<details style="border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); display: block; position: relative; color: rgb(48, 68, 85); font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="cursor: pointer; padding: 1.6em; margin: -1.6em; outline: none;"><h4 style="font-weight: 600; color: rgb(39, 56, 73); margin: 0px; display: inline-block;">자세한 설명</h4><span>&nbsp;</span></summary></details>

#### 나쁨

```
components/
|- ClearSearchButton.vue
|- ExcludeFromSearchInput.vue
|- LaunchOnStartupCheckbox.vue
|- RunSearchButton.vue
|- SearchInput.vue
|- TermsCheckbox.vue
```

#### 좋음

```
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
|- SettingsCheckboxLaunchOnStartup.vue
```





### [셀프 클로징 컴포넌트매우 추천함](https://kr.vuejs.org/v2/style-guide/#셀프-클로징-컴포넌트-매우-추천함)

**Components with no content should be self-closing in [single-file components](https://kr.vuejs.org/v2/guide/single-file-components.html), string templates, and [JSX](https://kr.vuejs.org/v2/guide/render-function.html#JSX) - but never in DOM templates.**

Components that self-close communicate that they not only have no content, but are **meant** to have no content. It’s the difference between a blank page in a book and one labeled “This page intentionally left blank.” Your code is also cleaner without the unnecessary closing tag.

Unfortunately, HTML doesn’t allow custom elements to be self-closing - only [official “void” elements](https://www.w3.org/TR/html/syntax.html#void-elements). That’s why the strategy is only possible when Vue’s template compiler can reach the template before the DOM, then serve the DOM spec-compliant HTML.

#### 나쁨

```html
<!-- In single-file components, string templates, and JSX -->
<MyComponent></MyComponent>
<!-- In DOM templates -->
<my-component/>
```

#### 좋음

```html
<!-- In single-file components, string templates, and JSX -->
<MyComponent/>
<!-- In DOM templates -->
<my-component></my-component>
```





### [템플릿에서 컴포넌트 이름 규칙 지정(casing)매우 추천함](https://kr.vuejs.org/v2/style-guide/#템플릿에서-컴포넌트-이름-규칙-지정-casing-매우-추천함)

**In most projects, component names should always be PascalCase in [single-file components](https://kr.vuejs.org/v2/guide/single-file-components.html) and string templates - but kebab-case in DOM templates.**

PascalCase has a few advantages over kebab-case:

- Editors can autocomplete component names in templates, because PascalCase is also used in JavaScript.
- `<MyComponent>` is more visually distinct from a single-word HTML element than `<my-component>`, because there are two character differences (the two capitals), rather than just one (a hyphen).
- If you use any non-Vue custom elements in your templates, such as a web component, PascalCase ensures that your Vue components remain distinctly visible.

Unfortunately, due to HTML’s case insensitivity, DOM templates must still use kebab-case.

Also note that if you’ve already invested heavily in kebab-case, consistency with HTML conventions and being able to use the same casing across all your projects may be more important than the advantages listed above. In those cases, **using kebab-case everywhere is also acceptable.**



=> HTML  DOM 템플릿은 케밥 케이스로

#### 나쁨

```html
<!-- In single-file components and string templates -->
<mycomponent/>
<!-- In single-file components and string templates -->
<myComponent/>
<!-- In DOM templates -->
<MyComponent></MyComponent>
```

#### 좋음

```html
<!-- Everywhere -->
<my-component></my-component>
```





### [JS/JSX에서 컴포넌트 이름 규칙 지정(casing)매우 추천함](https://kr.vuejs.org/v2/style-guide/#JS-JSX에서-컴포넌트-이름-규칙-지정-casing-매우-추천함)

**Component names in JS/[JSX](https://kr.vuejs.org/v2/guide/render-function.html#JSX) should always be PascalCase, though they may be kebab-case inside strings for simpler applications that only use global component registration through `Vue.component`.**

=> js, JSX는 PascalCase

<details open="" style="border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); display: block; position: relative; color: rgb(48, 68, 85); font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="cursor: pointer; padding: 1.6em; margin: -1.6em; outline: none;"><h4 style="font-weight: 600; color: rgb(39, 56, 73); margin: 0px; display: inline-block;">자세한 설명</h4></summary><p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1;">In JavaScript, PascalCase is the convention for classes and prototype constructors - essentially, anything that can have distinct instances. Vue components also have instances, so it makes sense to also use PascalCase. As an added benefit, using PascalCase within JSX (and templates) allows readers of the code to more easily distinguish between components and HTML elements.</p><p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1;">However, for applications that use<span>&nbsp;</span><strong style="font-weight: 600; color: rgb(39, 56, 73);">only</strong><span>&nbsp;</span>global component definitions via<span>&nbsp;</span><code style="font-family: &quot;Roboto Mono&quot;, Monaco, courier, monospace; font-size: 0.85em; background-color: rgb(248, 248, 248); -webkit-font-smoothing: initial; color: rgb(214, 50, 0); padding: 3px 5px; margin: 0px 2px; border-radius: 2px; white-space: nowrap;">Vue.component</code>, we recommend kebab-case instead. The reasons are:</p><ul style="line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: inherit; z-index: 1; padding-left: 1.5em;"><li>It’s rare that global components are ever referenced in JavaScript, so following a convention for JavaScript makes less sense.</li><li>These applications always include many in-DOM templates, where<span>&nbsp;</span><a href="https://kr.vuejs.org/v2/style-guide/#Component-name-casing-in-templates-strongly-recommended" style="text-decoration: none; color: rgb(66, 185, 131); font-weight: 600;">kebab-case<span>&nbsp;</span><strong style="font-weight: 600; color: rgb(39, 56, 73);">must</strong><span>&nbsp;</span>be used</a>.</li></ul></details>

#### 나쁨

```javascript
Vue.component('myComponent', {
  // ...
})
import myComponent from './MyComponent.vue'
export default {
  name: 'myComponent',
  // ...
}
export default {
  name: 'my-component',
  // ...
}
```

#### 좋음

```javascript
Vue.component('MyComponent', {
  // ...
})

import MyComponent from './MyComponent.vue'
export default {
  name: 'MyComponent',
  // ...
}
```



### [전체 이름 컴포넌트 이름매우 추천함](https://kr.vuejs.org/v2/style-guide/#전체-이름-컴포넌트-이름-매우-추천함)

**Component names should prefer full words over abbreviations.**

The autocompletion in editors make the cost of writing longer names very low, while the clarity they provide is invaluable. Uncommon abbreviations, in particular, should always be avoided.

#### 나쁨

```
components/
|- SdSettings.vue
|- UProfOpts.vue
```

#### 좋음

```
components/
|- StudentDashboardSettings.vue
|- UserProfileOptions.vue
```





### [Prop 이름 규칙 지정(casing)매우 추천함](https://kr.vuejs.org/v2/style-guide/#Prop-이름-규칙-지정-casing-매우-추천함)

**Prop names should always use camelCase during declaration, but kebab-case in templates and [JSX](https://kr.vuejs.org/v2/guide/render-function.html#JSX).**

We’re simply following the conventions of each language. Within JavaScript, camelCase is more natural. Within HTML, kebab-case is.

=> html 에서는 케밥케이스 (하이픈)

#### 나쁨

```javascript
props: {
  'greeting-text': String
}
<WelcomeMessage greetingText="hi"/>
```

#### 좋음

```javascript
props: {
  greetingText: String
}
<WelcomeMessage greeting-text="hi"/>
```



### [다중 속성 엘리먼트매우 추천함](https://kr.vuejs.org/v2/style-guide/#다중-속성-엘리먼트-매우-추천함)

**Elements with multiple attributes should span multiple lines, with one attribute per line.**

In JavaScript, splitting objects with multiple properties over multiple lines is widely considered a good convention, because it’s much easier to read. Our templates and [JSX](https://kr.vuejs.org/v2/guide/render-function.html#JSX) deserve the same consideration.

#### 나쁨

```
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo">
<MyComponent foo="a" bar="b" baz="c"/>
```

#### 좋음

```
<img
  src="https://vuejs.org/images/logo.png"
  alt="Vue Logo"
>
<MyComponent
  foo="a"
  bar="b"
  baz="c"
/>
```



### [템플릿에서 단순한 표현식매우 추천함](https://kr.vuejs.org/v2/style-guide/#템플릿에서-단순한-표현식-매우-추천함)

**Component templates should only include simple expressions, with more complex expressions refactored into computed properties or methods.**

Complex expressions in your templates make them less declarative. We should strive to describe *what* should appear, not *how* we’re computing that value. Computed properties and methods also allow the code to be reused.

#### 나쁨

```javascript
{{
  fullName.split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')
}}
```

#### 좋음

```javascript
<!-- In a template -->
{{ normalizedFullName }}
// The complex expression has been moved to a computed property
computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
```



### [단순한 계산된 속성매우 추천함](https://kr.vuejs.org/v2/style-guide/#단순한-계산된-속성-매우-추천함)

**Complex computed properties should be split into as many simpler properties as possible.**

<details style="border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); display: block; position: relative; color: rgb(48, 68, 85); font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="cursor: pointer; padding: 1.6em; margin: -1.6em; outline: none;"><h4 style="font-weight: 600; color: rgb(39, 56, 73); margin: 0px; display: inline-block;">자세한 설명</h4><span>&nbsp;</span></summary></details>

#### 나쁨

```javascript
computed: {
  price: function () {
    var basePrice = this.manufactureCost / (1 - this.profitMargin)
    return (
      basePrice -
      basePrice * (this.discountPercent || 0)
    )
  }
}
```

#### 좋음

```javascript
computed: {
  basePrice: function () {
    return this.manufactureCost / (1 - this.profitMargin)
  },
  discount: function () {
    return this.basePrice * (this.discountPercent || 0)
  },
  finalPrice: function () {
    return this.basePrice - this.discount
  }
}
```



### [속성 값에 따옴표매우 추천함](https://kr.vuejs.org/v2/style-guide/#속성-값에-따옴표-매우-추천함)

**Non-empty HTML attribute values should always be inside quotes (single or double, whichever is not used in JS).**

While attribute values without any spaces are not required to have quotes in HTML, this practice often leads to *avoiding* spaces, making attribute values less readable.

#### 나쁨

```html
<input type=text>
<AppSidebar :style={width:sidebarWidth+'px'}>
```

#### 좋음

```html
<input type="text">
<AppSidebar :style="{ width: sidebarWidth + 'px' }">
```



### [축약형 디렉티브매우 추천함](https://kr.vuejs.org/v2/style-guide/#축약형-디렉티브-매우-추천함)

**Directive shorthands (`:` for `v-bind:`, `@` for `v-on:` and `#` for `v-slot`) should be used always or never.**

#### 나쁨

```html
<input
  v-bind:value="newTodoText"
  :placeholder="newTodoInstructions"
>
<input
  v-on:input="onInput"
  @focus="onFocus"
>
<template v-slot:header>
  <h1>Here might be a page title</h1>
</template>

<template #footer>
  <p>Here's some contact info</p>
</template>
```

#### 좋음

```html
<input
  :value="newTodoText"
  :placeholder="newTodoInstructions"
>
<input
  v-bind:value="newTodoText"
  v-bind:placeholder="newTodoInstructions"
>

<!-- 이걸로 ? -->
<input
  @input="onInput"
  @focus="onFocus"
>


<input
  v-on:input="onInput"
  v-on:focus="onFocus"
>
<template v-slot:header>
  <h1>Here might be a page title</h1>
</template>

<template v-slot:footer>
  <p>Here's some contact info</p>
</template>
<template #header>
  <h1>Here might be a page title</h1>
</template>

<template #footer>
  <p>Here's some contact info</p>
</template>
```





## [우선순위 C 규칙: 추천함 (선택의 혼란 또는 판단 오버헤드 최소화)

## [](https://kr.vuejs.org/v2/style-guide/#우선순위-C-규칙-추천함-선택의-혼란-또는-판단-오버헤드-최소화)



### [컴포넌트/인스턴스 옵션 순서추천함](https://kr.vuejs.org/v2/style-guide/#컴포넌트-인스턴스-옵션-순서-추천함)

**컴포넌트/인스턴스 옵션의 순서는 언제나 일정한 순서로 정렬되어야 합니다.**

아래는 권장하는 컴포넌트 옵션 순서입니다. 유형별로 나누어 놓았으므로, 플러그인으로 추가되는 새로운 옵션들 역시 이에 맞추어 정렬하면 됩니다.

1. **사이드 이펙트(Side Effects)** (컴포넌트 외부에 효과가 미치는 옵션)
   - `el`
2. **전역 인지(Global Awareness)** (컴포넌트 바깥의 지식을 필요로 하는 옵션)
   - `name`
   - `parent`
3. **컴포넌트 유형(Component Type)** (컴포넌트의 유형을 바꾸는 옵션)
   - `functional`
4. **템플릿 변경자(Template Modifiers)** (템플릿이 컴파일되는 방식을 바꾸는 옵션)
   - `delimiters`
   - `comments`
5. **템플릿 의존성(Template Dependencies)** (템플릿에 이용되는 요소들을 지정하는 옵션)
   - `components`
   - `directives`
   - `filters`
6. **컴포지션(Composition)** (다른 컴포넌트의 속성을 가져와 합치는 옵션)
   - `extends`
   - `mixins`
7. **인터페이스(Interface)** (컴포넌트의 인터페이스를 지정하는 옵션)
   - `inheritAttrs`
   - `model`
   - `props`/`propsData`
8. **지역 상태(Local State)** (반응적인 지역 속성들을 설정하는 옵션)
   - `data`
   - `computed`
9. **이벤트(Events)** (반응적인 이벤트에 의해 실행되는 콜백을 지정하는 옵션)
   - `watch`
   - 라이프사이클 이벤트 (호출 순서대로 정렬)
     - `beforeCreate`
     - `created`
     - `beforeMount`
     - `mounted`
     - `beforeUpdate`
     - `updated`
     - `activated`
     - `deactivated`
     - `beforeDestroy`
     - `destroyed`
10. **비반응적 속성(Non-Reactive Properties)** (시스템의 반응성과 관계 없는 인스턴스 속성을 지정하는 옵션)
    - `methods`
11. **렌더링(Rendering)** (컴포넌트 출력을 선언적으로 지정하는 옵션)
    - `template`/`render`
    - `renderError`
    - 

### [엘리먼트 속성 순서추천함](https://kr.vuejs.org/v2/style-guide/#엘리먼트-속성-순서-추천함)

**엘리먼트 및 컴포넌트의 속성은 언제나 일정한 순서로 정렬되어야 합니다.**

아래는 권장하는 엘리먼트 속성 순서입니다. 유형별로 나누어 놓았으므로, 커스텀 속성이나 directive 역시 이에 맞추어 정렬하면 됩니다.

1. **정의(Definition)** (컴포넌트 옵션을 제공하는 속성)

   - `is`

2. **리스트 렌더링(List Rendering)** (같은 엘리먼트의 변형을 여러 개 생성하는 속성)

   - `v-for`

3. **조건부(Conditionals)** (엘리먼트가 렌더링되는지 혹은 보여지는지 여부를 결정하는 속성)

   - `v-if`
   - `v-else-if`
   - `v-else`
   - `v-show`
   - `v-cloak`

4. **렌더 변경자(Render Modifiers)** (엘리먼트의 렌더링 방식을 변경하는 속성)

   - `v-pre`
   - `v-once`

5. **전역 인지(Global Awareness)** (컴포넌트 바깥의 지식을 요구하는 속성)

   - `id`

6. **유일한 속성(Unique Attributes)** (유일한 값을 가질 것을 요구하는 속성)

   - `ref`
   - `key`
   - `slot`

7. **양방향 바인딩(Two-Way Binding)** (바인딩과 이벤트를 결합하는 속성)

   - `v-model`

8. **기타 속성** (따로 언급하지 않은 속성들)

9. **이벤트(Events)** (컴포넌트 이벤트 리스너를 지정하는 속성)

   - `v-on`

10. **내용(Content)** (엘리먼트의 내용을 덮어쓰는 속성)

    - `v-html`
    - `v-text`

    

### [컴포넌트/인스턴스 옵션간 빈 줄추천함](https://kr.vuejs.org/v2/style-guide/#컴포넌트-인스턴스-옵션간-빈-줄-추천함)

**You may want to add one empty line between multi-line properties, particularly if the options can no longer fit on your screen without scrolling.**

When components begin to feel cramped or difficult to read, adding spaces between multi-line properties can make them easier to skim again. In some editors, such as Vim, formatting options like this can also make them easier to navigate with the keyboard.

#### 좋음

```javascript
props: {
  value: {
    type: String,
    required: true
  },

  focused: {
    type: Boolean,
    default: false
  },

  label: String,
  icon: String
},

computed: {
  formattedValue: function () {
    // ...
  },

  inputClasses: function () {
    // ...
  }
}
// No spaces are also fine, as long as the component
// is still easy to read and navigate.
props: {
  value: {
    type: String,
    required: true
  },
  focused: {
    type: Boolean,
    default: false
  },
  label: String,
  icon: String
},
computed: {
  formattedValue: function () {
    // ...
  },
  inputClasses: function () {
    // ...
  }
}
```



### [싱글 파일 컴포넌트 최상위 엘리먼트 순서추천함](https://kr.vuejs.org/v2/style-guide/#싱글-파일-컴포넌트-최상위-엘리먼트-순서-추천함)

**[Single-file components](https://kr.vuejs.org/v2/guide/single-file-components.html) should always order `<script>`, `<template>`, and `<style>` tags consistently, with `<style>` last, because at least one of the other two is always necessary.**

#### 나쁨

```html
<style>/* ... */</style>
<script>/* ... */</script>
<template>...</template>
<!-- ComponentA.vue -->
<script>/* ... */</script>
<template>...</template>
<style>/* ... */</style>

<!-- ComponentB.vue -->
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>
```

#### 좋음

```html
<!-- ComponentA.vue -->
<script>/* ... */</script>
<template>...</template>
<style>/* ... */</style>

<!-- ComponentB.vue -->
<script>/* ... */</script>
<template>...</template>
<style>/* ... */</style>
<!-- ComponentA.vue -->
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>

<!-- ComponentB.vue -->
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>
```



## [우선순위 D 규칙: 주의요함 (잠재적인 위험을 내포한 패턴)](https://kr.vuejs.org/v2/style-guide/#우선순위-D-규칙-주의요함-잠재적인-위험을-내포한-패턴)

### [`key`가 없는 `v-if`/`v-if-else`/`v-else`주의요함](https://kr.vuejs.org/v2/style-guide/#key가-없는-v-if-v-if-else-v-else-주의요함)

**It’s usually best to use `key` with `v-if` + `v-else`, if they are the same element type (e.g. both `<div>` elements).**

By default, Vue updates the DOM as efficiently as possible. That means when switching between elements of the same type, it simply patches the existing element, rather than removing it and adding a new one in its place. This can have [unintended consequences](https://jsfiddle.net/chrisvfritz/bh8fLeds/) if these elements should not actually be considered the same.

#### 나쁨

```html
<div v-if="error">
  Error: {{ error }}
</div>
<div v-else>
  {{ results }}
</div>
```

#### 좋음

```html
<div
  v-if="error"
  key="search-status"
>
  Error: {{ error }}
</div>
<div
  v-else
  key="search-results"
>
  {{ results }}
</div>
```



### [`scoped`에서 엘리먼트 셀렉터 사용주의요함](https://kr.vuejs.org/v2/style-guide/#scoped에서-엘리먼트-셀렉터-사용-주의요함)

**Element selectors should be avoided with `scoped`.**

Prefer class selectors over element selectors in `scoped` styles, because large numbers of element selectors are slow.

<details style="border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); display: block; position: relative; color: rgb(48, 68, 85); font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="cursor: pointer; padding: 1.6em; margin: -1.6em; outline: none;"><h4 style="font-weight: 600; color: rgb(39, 56, 73); margin: 0px; display: inline-block;">자세한 설명</h4><span>&nbsp;</span></summary></details>

#### 나쁨

```html
<template>
  <button>X</button>
</template>

<style scoped>
button {
  background-color: red;
}
</style>
```

#### 좋음

```html
<template>
  <button class="btn btn-close">X</button>
</template>

<style scoped>
.btn-close {
  background-color: red;
}
</style>
```



### [부모-자식간 의사소통주의요함](https://kr.vuejs.org/v2/style-guide/#부모-자식간-의사소통-주의요함)

**Props and events should be preferred for parent-child component communication, instead of `this.$parent` or mutating props.**

An ideal Vue application is props down, events up. Sticking to this convention makes your components much easier to understand. However, there are edge cases where prop mutation or `this.$parent` can simplify two components that are already deeply coupled.

The problem is, there are also many *simple* cases where these patterns may offer convenience. Beware: do not be seduced into trading simplicity (being able to understand the flow of your state) for short-term convenience (writing less code).

#### 나쁨

```html
Vue.component('TodoItem', {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  template: '<input v-model="todo.text">'
})
Vue.component('TodoItem', {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeTodo () {
      var vm = this
      vm.$parent.todos = vm.$parent.todos.filter(function (todo) {
        return todo.id !== vm.todo.id
      })
    }
  },
  template: `
    <span>
      {{ todo.text }}
      <button @click="removeTodo">
        X
      </button>
    </span>
  `
})
```

#### 좋음

```html
Vue.component('TodoItem', {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  template: `
    <input
      :value="todo.text"
      @input="$emit('input', $event.target.value)"
    >
  `
})
Vue.component('TodoItem', {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  template: `
    <span>
      {{ todo.text }}
      <button @click="$emit('delete')">
        X
      </button>
    </span>
  `
})
```





### [전역 상태 관리주의요함](https://kr.vuejs.org/v2/style-guide/#전역-상태-관리-주의요함)

**전역 상태 관리에는 `this.$root` 나 글로벌 이벤트 버스(global event bus)보다는 [Vuex](https://github.com/vuejs/vuex)를 이용하는 것이 좋습니다.**

전역 상태 관리에 `this.$root`나 [글로벌 이벤트 버스](https://vuejs.org/v2/guide/migration.html#dispatch-and-broadcast-replaced)를 이용하는 것은 아주 단순한 경우에는 편리할 수 있지만 대부분의 Application에는 부적절합니다. Vuex는 상태를 관리하는 중앙 저장소를 제공하는 것만이 아니라 상태 변화를 체계화하고, 추적하며, 디버깅을 용이하게 하는 도구들을 제공합니다.

#### 나쁨

```javascript
// main.js
new Vue({
  data: {
    todos: []
  },
  created: function () {
    this.$on('remove-todo', this.removeTodo)
  },
  methods: {
    removeTodo: function (todo) {
      var todoIdToRemove = todo.id
      this.todos = this.todos.filter(function (todo) {
        return todo.id !== todoIdToRemove
      })
    }
  }
})
```

#### 좋음

```javascript
// store/modules/todos.js
export default {
  state: {
    list: []
  },
  mutations: {
    REMOVE_TODO (state, todoId) {
      state.list = state.list.filter(todo => todo.id !== todoId)
    }
  },
  actions: {
    removeTodo ({ commit, state }, todo) {
      commit('REMOVE_TODO', todo.id)
    }
  }
}
<!-- TodoItem.vue -->
<template>
  <span>
    {{ todo.text }}
    <button @click="removeTodo(todo)">
      X
    </button>
  </span>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: mapActions(['removeTodo'])
}
</script>
```









https://kr.vuejs.org/v2/style-guide/#%EC%85%80%ED%94%84-%ED%81%B4%EB%A1%9C%EC%A7%95-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%A4%EC%9A%B0-%EC%B6%94%EC%B2%9C%ED%95%A8

https://velog.io/@cada/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%94%EB%94%A9-%EB%B0%8F-%EB%84%A4%EC%9D%B4%EB%B0%8D-%EC%BB%A8%EB%B2%A4%EC%85%98-1%ED%8E%B8

