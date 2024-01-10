import React from 'react'
// import { UserOutlined } from '@ant-design/icons';
// import { Input } from 'antd';
export default class CustomInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isInput: true
    }
    this.handleDoubleClick = this.handleDoubleClick.bind(this)
    
  }

  handleDoubleClick() {
    this.setState(state => {
      return {
        isInput: !state.isInput
      }
    })
    console.log(this.state);
  }

  handleChange(e) {
    const { change } = this.props
    change(e.target.value)
  }
  render() {
    const { size, max, value } = this.props
    const { isInput } = this.state
    return (
      <div className='text-base bg-slate-300 w-32 flex' onDoubleClick={this.handleDoubleClick}>
        {
          // isInput ?
          // <Input
          // showCount
          // size={ size }
          // maxLength={ max }
          // value={ value }
          // onChange={ this.handleChange }
          // prefix={ <UserOutlined /> }
          // />
          // : value
          // value
        }
        {/* <h2 onClick={() => React.$bus.emit('addListener')}>123123</h2> */}
      </div>
    )
  }
}