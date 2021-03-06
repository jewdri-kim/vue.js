



- #### Vue.js 는 웹프론트엔드 프레임워크

  - 컴포넌트 (Component) 기반의 SPA(Single Page Application)를 구축할 수 있게 해주는 프레임워크

- #### 컴포넌트 (Component)

  - 웹을 구성하는 헤더, 레이어팝업, 퀵배너 등 웹페이지 내의 다양한 UI 요소
  - 재사용 가능하도록 구조화 한 것
  - ex : 우리  가이드 만들때 처럼 (재사용 가능하게)
  - html,css,javascript 형태가 한 파일 안에 있다고 생각하면됨 
    - 기존과는 조금 다르지만 vue.js만의 문법(사용법)이 있다.
    - 기존 html,css,js 와 거의 비슷한 형태 
    - webpack 과 같은 것들이 브라우저에서 해석할 수 있는 형태로(html,css,js) 변환 해준다.  
    - wbepack, npm, 바벨...등등..자세히 몰라도 된다 일단 사용법부터 익히고 나중에 차근차근 하나씩 알아가도록 하자

- #### SPA (Single Page Application)

  - 단일 페이지 어플리케이션
  - 하나의 페이지 안에서 필요한 영역 부분만 로딩되는 형태
  - 빠른페이지 변환
  - 적은 트래픽 양
  - 단점 ? (처음에 불러올때 느릴 수 있음)

- #### 개발환경 

  - node.js
    - https://nodejs.org/ko/
  - ![](https://github.com/jewdri-kim/vue.js/blob/master/vue1/img/nodejs.png)
  - visual studio code
    - https://code.visualstudio.com/

- #### 설치방법

  - cdn

    - 이미 구축되어있는 프로젝트에 vue도입
    - 일부 페이지만 vue 도입
    - 학습용 
    - vue 입문가기

    ```html
    <script src="/path/to/vue.js"></script>
    <script src="/path/to/vue-router.js"></script>
    ```

  - npm

    - webpack 이나 lint babel 등 직접 설치해줘야함 

    ```cmd
    #latest stable
    $npm install vue@next
    ```

  - Vue CLI

    - 기본적인 폴더구조, 기본설정들 갖춰진 상태로 프로젝트 

    - https://cli.vuejs.org/

    - node.js

      - https://nodejs.org/ko/
      - node js 설치되면?

      ```cmd
      $node -v
      ```

      ```cmd
      $npm -v
      ```

      ![](https://github.com/jewdri-kim/vue.js/blob/master/vue1/img/vue3.png)

    - 글로벌로 vue cli 설치해주기 

    ```cmd
    $npm install -g @vue/cli
    ```

    ![](https://github.com/jewdri-kim/vue.js/blob/master/vue1/img/vue2.png)

    - 설치 됐는지 확인하기

    ```cmd
    $vue $ vue --version
    ```

    - vue cli 로 프로젝트 생성해보기

    ![](https://github.com/jewdri-kim/vue.js/blob/master/vue1/img/vue5.png)

    -  Default : 기본적인것만 설치
    - 맨 마지막 Manually select featuers 

    ![](https://github.com/jewdri-kim/vue.js/blob/master/vue1/img/vue6.png)

    - 많이 사용하는 Router, Vuex 선택
    - CSS Pro-processors 도 선택

    ![](https://github.com/jewdri-kim/vue.js/blob/master/vue1/img/vue9.png)

    - https://www.npmtrends.com/dart-sass-vs-node-sass 참고하여 Sass/SCSS (with node--sass) 선택  

    ![](https://github.com/jewdri-kim/vue.js/blob/master/vue1/img/vue10.png)

    

    - Vue Cli 로 된 프로젝트 실행해보기

    ```cmd
    $npm run serve
    ```

    

     

    

    

    






































