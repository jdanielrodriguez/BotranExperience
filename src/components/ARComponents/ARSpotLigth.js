
import React from 'react';

import { ViroSpotLight, ViroOmniLight } from '@viro-community/react-viro';

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

export function OmniLigth() {
   return (
     <>
       <ViroOmniLight
         intensity={300}
         position={[-10, 10, 1]}
         color="#FFFFFF"
         attenuationStartDistance={20}
         attenuationEndDistance={30}
       />

       <ViroOmniLight
         intensity={300}
         position={[10, 10, 1]}
         color="#FFFFFF"
         attenuationStartDistance={20}
         attenuationEndDistance={30}
       />

       <ViroOmniLight
         intensity={300}
         position={[-10, -10, 1]}
         color="#FFFFFF"
         attenuationStartDistance={20}
         attenuationEndDistance={30}
       />

       <ViroOmniLight
         intensity={300}
         position={[10, -10, 1]}
         color="#FFFFFF"
         attenuationStartDistance={20}
         attenuationEndDistance={30}
       />

       <ViroSpotLight
         position={[0, 8, -2]}
         color="#ffffff"
         direction={[0, -1, 0]}
         intensity={50}
         attenuationStartDistance={5}
         attenuationEndDistance={10}
         innerAngle={5}
         outerAngle={20}
         castsShadow
       />
     </>
   )
}