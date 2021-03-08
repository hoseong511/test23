# 노마드코더와 함께하는 리액트 movieApp

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