// 자바스크립트 함수

//! 함수의 정의
// : 특정 동작을 수행하는 코드의 묶음(집합)
// : A -> B -> C 동작을 함수 'ABC'로 구현
// :  , 다른 위치(코드)에서 해당 절차 즉, ABC를 다시 사용 가능
// : 코드의 재사용성과 가독성을 향상 그리고 디버깅을 용이하게 함.

//! 함수의 사용 용도와 예제

//? 1. 코드 재사용
// : 같은 코드를 여러 번 작성하는 대신 함수를 정의하고
// : , 필요할 때마다 호출하여 사용

function multiply(a, b) {
  return a * b;
}

let result = multiply(2, 3)
console.log(result); //6
console.log(multiply(224, 397)); //88928

//? 2. 모듈화 및 추상화
// : 복잡한 작업을 수행하는 코드를 함수로 분리
// : 각 함수가 수행하는 작업에 집중

// 두 점의 거리를 계산하는 자바스크립트 함수
function calculateDistance(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;

  return Math.sqrt(dx*dx + dy*dy);
}

//? 3. 이벤트 처리
// : 웹 페이지에서 발생하는 다양한 이벤트(버튼 클릭, 폼 제출 등)를
// : , 처리하는데 사용

// 문서를 로드 후 버튼을 선택하고 클릭 이벤트 리스너를 추가

let btn = document.querySelector('button');
btn.addEventListener('click', function(){
  console.log('Button was clicked');
});


