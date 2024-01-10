import { Rnd } from 'react-rnd'
import React, { forwardRef, useRef } from 'react'
import { getComponentMap } from './js/index'
import { ThemeContext, TextContext } from '@/utils/context/index'
export default class CanvasRnd extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      stages: [
        {
          uuid: React.$createUUID(),
          style: {
            x: 0,
            y: 0,
            z: 0,
            width: 100,
            height: 100
          },
          component: 'customInput'
        }
      ]
    }
    console.log('constructor');
  }
  addListener() {
    console.log('addListener');
  }

  componentDidMount() {
    React.$bus.addListener('addListener', this.addListener.bind(this))
    console.log('componentDidMount');
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    React.$bus.removeListener('addListener', this.addListener.bind(this))
    console.log(prevProps, prevState, snapshot, 'componentDidUpdate');

  }

  shouldComponentUpdate(nextProps, nextState) {
    // 在组件接收到新的props或state时调用的函数。用于判断是否需要重新渲染组件，默认返回true。
    console.log(nextProps, nextState, 'shouldComponentUpdate');

    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps, prevState, 'getSnapshotBeforeUpdate');
    // 在组件更新之前调用的函数。它可以在组件更新之前捕获当前的DOM状态，通常与componentDidUpdate一起使用。
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }


  /**
   * 
   * @param {*组件唯一ID} uuid 
   * @returns 返回列表中当前的组件数据
   */
  uuid2Component(uuid) {
    const stage = this.state.stages.find(item => item.uuid === uuid)
    return stage
  }

  /**
   * 
   * @param {*拖拽停止参数} params 
   * @returns 
   */
  onDragStop(params = {}) {
    const { uuid, e, d } = params
    const stage = this.uuid2Component(uuid)
    if(!stage) return
    console.log('onDragStop', params);
    const { stages, ...otherParams } = this.state
    const { style } = stage
    style.x = d.x
    style.y = d.y
    this.setState({
      stages,
      ...otherParams,
    })
  }

  /**
   * 
   * @param {*修改大小参数} params 
   */
  onResizeStop(params = {}) {
    const { uuid, e, direction, ref, delta, position } = params
    const stage = this.uuid2Component(uuid)
    if(!stage) return
    console.log('onResizeStop', params);
    const { stages, ...otherParams } = this.state
    const { style } = stage
    style.width = ref.style.width
    style.height = ref.style.height
    style.x = position.x
    style.y = position.y
    this.setState({
      stages,
      ...otherParams,
    })
  }

  
  render() {
    const { stages } = this.state
    // console.log(this.context, 'context');
    console.log('render');
    return (
      <div style={{
        width: '100%',
        height: '100%'
      }}>
        {
          stages.map((stage, index) => {
            const { uuid, component } = stage
            const { x, y, width, height } = stage.style
            return <Rnd
              size={{ width, height }}
              position={{ x, y }}
              key={ uuid }
              bounds="#canvas"
              onDragStop={ (e, d) => this.onDragStop({uuid, e, d}) }
              onResizeStop={(e, direction, ref, delta, position) => this.onResizeStop({uuid, e, direction, ref, delta, position})}
              >
              { component }
            </Rnd>
          })
        }
        <TextContext.Consumer>
          {
            value => {
              return <h2>{value.text}</h2>
            }
          }
        </TextContext.Consumer>
      </div>
    )
  }
}
CanvasRnd.contextType = ThemeContext