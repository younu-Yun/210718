class MyPage {
  constructor() {
    // console.log('hello my page')
    this.rootEl = document.getElementById('root')
    this.render()
  }

  //EVent
  //=> 로그아웃 버튼을 누르고
  //=> 로컬스토리지 데이터 삭제

  //페이지 내용을 그려주는 함수
  render() {
    this.rootEl.innerHTML = `
    <h1> Mypage </h1>
    <button>로그아웃</button>
    `
  }
}

export default MyPage
