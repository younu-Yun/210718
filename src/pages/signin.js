import './signin.scss'

class SigninPage {
  constructor(props) {
    this.props = props

    this.rootEl = document.getElementById('root')

    this.componentUpdate()
  }
  //내부의 값이 변경되었을때 동작하는 함수
  componentUpdate() {
    this.render() //변경된 겂을 다시 그린다.
    this.componentBindEvent() //렌더 후에 호출해야 함.
  }

  componentBindEvent() {
    const emailEl = document.getElementById('email')
    const passwordEl = document.getElementById('password')

    this.rootEl
      .querySelector('.btn_submit')
      .addEventListener('click', async () => {
        //인풋의 값이 하나라도 비었다면 Error
        if (!emailEl.value || !passwordEl.value) {
          alert('필수정보를 입력해 주세요.')
          return
        }

        //입력된 이메일을 가진 회원이 없다면
        const response = await fetch('http://localhost:8888/users')

        if (response.ok) {
          const users = await response.json()

          const user = users.find((user) => {
            //현재 가입된 회원에 대한 정보
            return user.email === emailEl.value //외부로부터 입력받은 이메일을 가진 회원이 있는가?
          })

          if (!user) {
            alert('입력받을 정보를 다시 획인해주세요')
            return
          }

          if (user.password !== passwordEl.value) {
            alert('입력받을 정보를 다시 획인해주세요')
            return
          }

          //로그인 성공!
          window.localStorage.setItem('user', JSON.stringify(user))
          //router는 외부러부터 넘겨받음 !
          this.props.router.push('/')
        }

        //동기
        //앞에 일이끝나지 않으면 기달려야함
        //비동기
        //앞에 일이 끝나지 않더라도 내 일을 처리하다가 앞에 일이 끝나면 작동

        //입력된 이메일을 가진 회원이 있지만 비밀번호가 틀렸을 때
      })
  }

  //페이지 내용을 그려주는 함수
  render() {
    this.rootEl.innerHTML = `
    <div class="wrap_signin">
      <input id="email" placeholder="이메일을 입력해주세요" />
      <input id="password" type="password" placeholder="비밀번호를 입력해주세요"/>
      <button class="btn_submit">로그인</button>
    </div>`
  }
}

export default SigninPage
