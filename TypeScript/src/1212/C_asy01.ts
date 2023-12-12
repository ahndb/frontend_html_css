//! 외부 API 사용
// JSONPlaceholder
// : 간단한 테스트 및 프로토 타이핑을 위해 사용되는 가짜 온라인 REST API
// : 사용자 데이터나 게시물 데이터를 요청하는데 사용 가능
// https://jsonplaceholder.typicode.com/users

//! 비동기 처리 프로그래밍
// : 콜백 함수

//? 1. 정의
// : 다른 함수에 인자로 넘겨지는 '함수'

//? 2. 사용방법
// : 비동기 작업을 수행하는 함수에 콜백 함수를 인자로 전달
// : 비동기 작업이 완료되면, 해당 콜백 함수가 호출

function fetchData(callback: (data: any) => void) {
  // 비동기 작업 수행
  // : 작업이 완료되면 결과를 콜백 함수의 인자로 전달하여 호출

  // fetch() 함수
  // : HTTP 응답 객체를 반환
  // : 후속 처리 메서드인 then을 사용하여 객체를 전달받음
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log('오류 :',error))
}

// fetchData함수의 인자로 전달되는 콜백 함수
function handleData(data: any) {
  console.log('받은 데이터: ', data);
}
fetchData(handleData);