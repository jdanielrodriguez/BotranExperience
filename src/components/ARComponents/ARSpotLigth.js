
import React from 'react';

import { ViroSpotLight } from '@viro-community/react-viro';

export default class ARSpotLigth extends React.Component {
   constructor(props) {
      super(props);

      // Set up initial state
      this.state = {
         key: props.key
      };

      // Functions must be bound manually with ES6 classes
      // this.handleChange = this.handleChange.bind(this);
   }

   render() {
      return (
        <>
          <ViroSpotLight
            innerAngle={5}
            key={this.state.key}
            outerAngle={45}
            direction={[0, 0, 0]}
            position={[0, 0, 0]}
            color="#ffffff"
            castsShadow
            influenceBitMask={4}
            shadowMapSize={1024}
            shadowNearZ={2}
            shadowFarZ={5}
            shadowOpacity={.7}
          />
        </>
      )
   }
}