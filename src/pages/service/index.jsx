import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTextarea, AtButton } from 'taro-ui'

import './index.scss'

class Service extends Component {
  config = {
    navigationBarTitleText: '在线客服'
  }

  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      sending: false
    }
  }
  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  submit = () => {
    this.setState({
      sending: true,
    })
    setTimeout(() => {
      this.setState({
        sending: false,
      })
    }, 1500)
  }

  render () {
    const { sending } = this.state
    return (
      <View className='service'>
        <AtTextarea
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          maxLength={200}
          placeholder='你的问题是...'
        />
        <AtButton
          onClick={this.submit}
          loading={sending}
          type='primary'
        >提交问题</AtButton>
      </View>
    )
  }
}

export default Service
