
import React from 'react';

import { Viro3DObject, ViroQuad } from '@viro-community/react-viro';
import ARSpotLigth from './ARSpotLigth';

export default function ARMakeObject(props) {

  const { selected, animationName, playAnim, _onFinish, _onLoadStart, _onLoadEnd, _onError, key, _changeObject, show3D } = props;
  return (
    <>
      <ARSpotLigth />
      {show3D && (
        <Viro3DObject
          key={`${key}Obj`}
          source={selected.src}
          scale={([1, 1, 1])}
          dragType="FixedToWorld"
          rotation={[0, 0, 0]}
          onClick={_changeObject}
          lightReceivingBitMask={5}
          animation={{ name: animationName, run: playAnim, loop: true, onFinish: _onFinish, }}
          shadowCastingBitMask={4}
          type="VRX"
          resources={selected.materials}
          onLoadStart={_onLoadStart}
          onLoadEnd={_onLoadEnd}
          onError={_onError}
        />
      )}
    </>
  )
}