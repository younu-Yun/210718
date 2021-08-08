//주소의 변경을 감지하고, 주소에 맞는 페이지를 노출한다.

class Router {
  constructor(routes) {
    //최초에 한번 생성 될 때 이벤트를 바인딩한다.
    this.routes = routes
    this.bindEvent()

    // 첫 진입시 페이지를 그리기 위해 실행
    this.renderPage()
  }

  push(pathname) {
    //ex. /main, /signin 등등
    window.location.hash = pathname.replace('/', '#')
  }

  bindEvent() {
    //이벤트를 추가는 바로 실행되지 않고, 후에 이벤트가 발생하면 실행된다.
    window.onhashchange = () => {
      //hash 값이 변경되었다는 것은 변경된 hash 값에 맞게 페이지를 새로 그린다.
      this.renderPage()
    }
  }

  renderPage() {
    const path = window.location.hash.replace('#', '/') || '/'

    const PageComponent = this.routes[path]

    if (!PageComponent) {
      const ErrorPageComponent = this.routes['/error']
      new ErrorPageComponent()
      //Error Page
      return
    }

    //페이지가 있을때 (path에 맞는 페이지가 있을때)
    new PageComponent({
      router: {
        push: this.push,
      },
    })

    // console.log('path', path)
  }
}

export default Router
