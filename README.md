# 노마드코더와 함께하는 리액트 movieApp

### 1. Set up

### 2. JSX & Props
- React에서만 사용되는 jsx를 추가로 알고있으면 된다. 
- index.html 에서 ```<div id="App">```에 뿌려지게 된다.
<p align="center"><img width="500" src="https://user-images.githubusercontent.com/62678380/110234770-bafa5f00-7f6f-11eb-8ab4-4e9f94af8e4f.png"> </p>

### 3. Dynamic Component Generation
- 오늘의 핵심은 JavaScript 문법 중 map을 이용해서 array안에 내용을 자동으로 뿌려주자.
    ```JavaScript
    friends = ["a", "b", "c", "d"]
    friends.map(function(current) => {
        console.log(current);
        current += " 😀"
        return current
    })
    ```
    