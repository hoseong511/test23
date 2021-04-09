# 노마드코더와 함께하는 리액트 movieApp
프론트엔드 프레임워크인 react를 이용해서 정적웹페이지 만들기   
영화 관련한 내용은 yts의 API(노마드코더버전, https://yts-proxy.now.sh/list_movies.json )을 
이용했다.   
웹호스팅은 github Pages를 이용함.   

## 1. Set up

## 2. JSX & PROPS
### 2.1 Reusable Components with JSX + Props
- React에서만 사용되는 jsx를 추가로 알고있으면 된다. 
- index.html 에서 ```<div id="App">```에 뿌려지게 된다.
<p align="center"><img width="500" src="https://user-images.githubusercontent.com/62678380/110234770-bafa5f00-7f6f-11eb-8ab4-4e9f94af8e4f.png"> </p>

### 2.2 Dynamic Component Generation
- 핵심은 JavaScript 문법 중 map을 이용해서 array안에 내용을 반복적으로 뿌려주자.
    ```JavaScript
    friends = ["a", "b", "c", "d"]
    friends.map(current => (
        console.log(current);
        current += " 😀"
        return current
    ))
    ```
### 2.3 map Recap
- 오류 해결하기!
<p align="center"><img src="https://user-images.githubusercontent.com/62678380/110237182-b89f0180-7f7d-11eb-9018-48af1f36a142.png" width="500"></p>

```Html
<!-- 리스트에 id 값 넣어주기 -->
<ColorList key={color.id} name={color.name} image={color.image} />

``` 

### 2.4 Protection with PropTypes
- ```$ npm i prop-types``` PropTypes를 설치하자
- PropTypes로 string, number, array, object등 해당되는 것들을 확인할 수 있다.

## 3. STATE
### 3.1 Class Components and State
- 클래스 컴포넌트를 이용해야만 state를 이용할 수 있다.
- 변하는 데이터를 다루기 위해서 state를 이용한다.
- react는 button에 onClick 기능 제공

### 3.2  All you need to know about State
- setState를 이용하지 않으면 최신화된 state와 render function이 호출되지 않는다.
- setState를 이용해서 새로운 state와 render를 얻자.

### 3.3 Component Life Cycle
- constructor는 JavaScript!!
- constructor -> render -> componentDidMount -> componentDidUpdate -> componentWillUnmount

    ```이것이 component Life Cycle이다.```

### 3.4 Planning the Movie Component
- ES6!! -> ```const { isLoading } = this.state;``` 
- js의 setTimeout을 이용해서 data가 fetching 되기를 기다라보자
    ```JavaScript
    setTimeout(() => {
        this.setState({ isLoading: false });
    }, 6000);
    });
    ```

## 4. MAKING THE MOVIE APP
### 4.1 Fetching movies from API
- 데이터 담기
- axios! ```npm i axios``` async/await를 이용하여 axios에서 불러오는 데이터를 기다리자.
- 

### 4.2 Rendering the Movies
- movie 타이틀을 렌더링하기

### 4.3 Styling the Movies

### 4.4 Adding Genres

### 4.5 Styles Timelapse

### 4.6 Cutting the summary

## 5. CONCLUSIONS
- ```npm -i gh-pages``` gh-pages는 github.io를 이용하게 해주는 패키지임
- ```git remote -v```로 원격저장소를 확인한다.
- package.json 파일에 ```"homepage": "https://hoseong511.github.io/moviehoho/"```를 추가해줌
- 그 다음 아래와 같이 작성하고, ```npm run deploy```를 하기
    ```JavaScript
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "deploy":"gh-pages -d build",
        "predeploy": "npm run build"
    }
    ```
- https://hoseong511.github.io/moviehoho/ 에서 서비스!
- 수정되는 사항이 있을 때 마다 ```npm run deploy```하면 자동으로 수정되니 참고.

## 6. ROUTER
- 여러개의 페이지를 다루기 위해서 router를 이용함.
- ```npm i react-router-dom```을 이용해서 router를 설정함.
    <p align="center"><img src="https://user-images.githubusercontent.com/62678380/110758383-cf9c6700-828f-11eb-8a0d-9a30d9033b3e.png" width="500"></p>

- router에 해당되는 부분이 있으면 전부 렌더링되는 형식으로 이 부분을 해결하기 위해서는 ```exact={true}```를 추가해주어야함.
 - BrowserRouter, HashRouter
 - redirecting 설정
    ```JavaScript
    <!-- /movie-detail를 주소창으로 직접 접근하려 할때 redirecting 시킴 -->
    if(location.state === undefined){
            history.push("/");
        }
    ```
- props를 받아서 페이지를 이동하는 방식이 API를 이용하지않는 오프라인 방식이라니.. 


### css 수정.