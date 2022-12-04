
import React from 'react';

import { ViroButton } from '@viro-community/react-viro';

export default class ARButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _changeColumn: props._changeColumn,
      column: props.column,
    };
  }

  render() {
    const { column } = this.state
    const btnOrigin = require("./../../../assets/images/guatemala-origin-button.png");
    const btnDynamic = require("./../../../assets/images/dynamic-ageing-button.png");
    const btnAroundWorld = require("./../../../assets/images/around-the-world-button.png");
    const btnSustainable = require("./../../../assets/images/sustainable-button.png");
    return (
      <>
        <ViroButton
          source={column === 1 ? btnOrigin : btnOrigin}
          gazeSource={column === 1 ? btnOrigin : btnOrigin}
          tapSource={column === 1 ? btnOrigin : btnOrigin}
          position={[-15, 130, 160]}
          rotation={[-40, 0, 5]}
          height={7.2}
          width={12}
          onClick={() => { this.state._changeColumn(1) }}
        />
        <ViroButton
          source={column === 1 ? btnDynamic : btnDynamic}
          gazeSource={column === 1 ? btnDynamic : btnDynamic}
          tapSource={column === 1 ? btnDynamic : btnDynamic}
          position={[-3, 130, 160]}
          rotation={[-40, 0, 5]}
          height={7.2}
          width={12}
          onClick={() => { this.state._changeColumn(2) }}
        />
        <ViroButton
          source={column === 1 ? btnAroundWorld : btnAroundWorld}
          gazeSource={column === 1 ? btnAroundWorld : btnAroundWorld}
          tapSource={column === 1 ? btnAroundWorld : btnAroundWorld}
          position={[10, 130, 157]}
          rotation={[-40, 0, 5]}
          height={7.2}
          width={12}
          onClick={() => { this.state._changeColumn(3) }}
        />
        <ViroButton
          source={btnSustainable}
          gazeSource={btnSustainable}
          tapSource={btnSustainable}
          position={[0, 120, 160]}
          rotation={[50, 0, 5]}
          height={7.5}
          width={45}
          onClick={() => { this.state._changeColumn(4) }}
        />
      </>
    )
  }
}