
import React from 'react';

import { ViroButton } from '@viro-community/react-viro';

export default class ARButtons extends React.Component {
   constructor(props) {
      super(props);

      // Set up initial state
      this.state = {
         _onTapped: props._onTapped
      };

      // Functions must be bound manually with ES6 classes
      // this.handleChange = this.handleChange.bind(this);
   }

   render() {
      return (
        <>
          <ViroButton
            source={require("./../../../assets/images/guatemala-origin-button.png")}
            gazeSource={require("./../../../assets/images/guatemala-origin-button.png")}
            tapSource={require("./../../../assets/images/guatemala-origin-button.png")}
            position={[-21, -50, -100]}
            height={10}
            width={20}
            onTap={this.state._onTapped}
          />
          <ViroButton
            source={require("./../../../assets/images/dynamic-ageing-button.png")}
            gazeSource={require("./../../../assets/images/dynamic-ageing-button.png")}
            tapSource={require("./../../../assets/images/dynamic-ageing-button.png")}
            position={[1, -50, -100]}
            height={10}
            width={20}
            onTap={this.state._onTapped}
          />
          <ViroButton
            source={require("./../../../assets/images/around-the-world-button.png")}
            gazeSource={require("./../../../assets/images/around-the-world-button.png")}
            tapSource={require("./../../../assets/images/around-the-world-button.png")}
            position={[21, -50, -100]}
            height={10}
            width={20}
            onTap={this.state._onTapped}
          />
          <ViroButton
            source={require("./../../../assets/images/sustainable-button.png")}
            gazeSource={require("./../../../assets/images/sustainable-button.png")}
            tapSource={require("./../../../assets/images/sustainable-button.png")}
            position={[1, -60, -100]}
            height={10}
            width={70}
            onTap={this.state._onTapped}
          />
        </>
      )
   }
}