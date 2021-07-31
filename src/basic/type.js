//타입이 크게 2종류
/*
//원시타입

string
number
boolean
null
undefined

symbol
*/

typeof '텍스트' //string
typeof 10 //number

/*
//객체

함수, 객체 , 배열 등등

*/
//add 라는 함수는 숫자 두개를 더하는 함수다.
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return
  }
  return a + b
}
// 더 간단하게!
// function add (a:Number, b:number): number {
//     return a + b
// }

add(10, 20)
add('윤', '우정') //ERROR
