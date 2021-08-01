const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

// modules.exports 밖에서 가져다 쓸 수 있도록 내보낸다.
module.exports = {
  // __dirname = 지금 나의(=파일) 경로
  // => webpack.config.js 를 기준으로 ./src/index.js 경로

  //entry 시작점
  entry: path.resolve(__dirname, './src/index.js'),
  //output 빌드 결과물을 내보내는 곳
  output: {
    filename: 'bundle.[hash].js',
    //나를 기준으로 ./dist 폴더 안에 빌드 결과물을 생성 할 것 이다.
    path: path.resolve(__dirname, 'dist'),
  },
  //webpack은 파일을 가져 올 수는 있지만 안에 있는 코드를 해석하지는 못한다.
  //부가적인 loader (=예시, 파일을 읽는 규칙들을 추가 할 수 있는 곳)들을 추가 할 수 있다.
  //sass -> css 변화 한다던가
  //react -> 순수 js로 변환한다던가
  //ES6 -> ES5로 변화한다던가
  module: {
    rules: [
      {
        test: /\.(js)$/, //JS로 끝나는 파일들을 읽어온다.
        use: 'babel-loader', // 읽어온 파일을 babel로 변화시킨다.
        exclude: /node_modules/,
      },
    ],
  },
  //모듈시스템
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    open: true,
  },
}
