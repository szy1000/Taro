import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'


import configStore from './store'

import './app.scss'
import Index from './pages/index'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/service/index',
      'pages/my/index',
      'pages/cart/index',
    ],
    window: {
      selectedColor: "#b4282d",
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '能量号',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      selectedColor: "#b4282d",
      list: [
        {
          pagePath: 'pages/index/index',
          iconPath: "./assets/tab-bar/home.png",
          selectedIconPath: "./assets/tab-bar/home-active.png",
          text: '首页'
        },
        {
          pagePath: 'pages/service/index',
          iconPath: "./assets/tab-bar/service.png",
          selectedIconPath: "./assets/tab-bar/service-active.png",
          text: '在线客服'
        },
        {
          pagePath: "pages/cart/index",
          iconPath: "./assets/tab-bar/cart.png",
          selectedIconPath: "./assets/tab-bar/cart-active.png",
          text: "购物车"
        },
        {
          pagePath: 'pages/my/index',
          iconPath: "./assets/tab-bar/user.png",
          selectedIconPath: "./assets/tab-bar/user-active.png",
          text: '个人'
        },
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
