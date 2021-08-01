//예시
// const webtoon = {
//   image: '',
//   title: '',
//   author: '',
//   summary: '',
// }

/*
const todo = {
  id: 0,
  label: '밥먹기',
  isDone: false, //완료여부 체크 상태값
}

const todo2 = {
  id: 0,
  label: '밥먹기',
  isDone: false, //완료여부 체크 상태값
}

const todo3 = {
  id: 0,
  label: '밥먹기',
  isDone: false, //완료여부 체크 상태값
}
*/

//이걸 묶어서

const todos = [
  {
    id: 0,
    label: '밥먹기',
    isDone: false, //완료여부 체크 상태값
  },
  {
    id: 1,
    label: '공부하기',
    isDone: true, //완료여부 체크 상태값
  },
]
/*
// 새로운 TODO 만들기

push => [] 보다는 spreadOperator를 더 많이 사용
전개구문을 이용하여 값을 추가하는것이 대부분이다.
 */

const addedTodos = [
  ...todos,
  {
    id: 2,
    label: '추가된 TODO',
    isDone: false, // 방금 추가된 값들은 항상 isDone false로 끝나게끔
  },
] //... -> 알맹이 풀어내기

console.log('addedTodos', addedTodos)

/*
// 값의 삭제

slice, splice 사용 안함
filter를 이용하여 값을 삭재한다.
 */

const removedTodos = addedTodos.filter((todo) => {
  return todo.id !== 2
})

console.log('removedTodos', removedTodos)

/*
// 값의 업데이트

map => 원본 배열을 가지고 새로운 배열을 만들어낸다.

0의 id를 가진 todo의 isDone 값을 true 로 바꾸고싶다.
=> 업데이트가 완료된 배열에는 0번째 id 를 가진 todo는 isDone이 true이다
 */

const updatedTodos = addedTodos.map((todo) => {
  //   if (todo.id === 0) {
  //     // 업데이트 해야됨!!
  //     return { ...todo, isDone: !todo.isDone } // 현재 상태를 뒤집는다.
  //   } else {
  //     return todo
  //   }

  return todo.id === 0 ? { ...todo, isDone: !todo.isDone } : todo
})
console.log('updatedTodos', updatedTodos)

/**
 * some(OR) || , every(AND) &&
 */
// 리턴값이 모두 true
const isAllCompleted = todos.every((todo) => {
  return todo.isDone
})
console.log('isAllCompleted', isAllCompleted)

// 리턴값이 하나라도 true 면 true
const hasCompleted = todos.some((todo) => {
  return todo.isDone
})
console.log('hasCompleted', hasCompleted)
