import { Rnd } from 'react-rnd'
import React from 'react'
import { getComponentMap } from './js/index'
export default class CanvasRnd extends React.Component {
  
  constructor(props) {
    super()
    this.props = props
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
  }


  render() {
    const { stages } = this.state

    return (
      <div>
        {
          stages.map(stage => {
            const { uuid, component } = stage
            const { x, y, width, height,   } = stage.style
            return <Rnd
                size={{
                  width,
                  height
                }}
                position={{
                  x,
                  y
                }}
                key={ uuid }
                bounds={ 'window' }
              >
                { component }
              </Rnd>
          })
        }
      </div>

    )
  }
}