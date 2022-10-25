
import React from 'react';

import { Viro3DObject, ViroQuad } from '@viro-community/react-viro';
import ARSpotLigth from './ARSpotLigth';

export default function ARMakeObject(props) {

  const { selected, animationName, playAnim, loopState, _onFinish, _onLoadStart, _onLoadEnd, _onError, key } = props;
  return (
    <>
      <ARSpotLigth />
      <Viro3DObject
        key={`${key}Obj`}
        source={selected.src}
        position={[1, -40, -100]}
        scale={(selected.scale || [.4, .4, .4])}
        rotation={[5, 0, -1]}
        lightReceivingBitMask={5}
        animation={{ name: animationName, run: playAnim, loop: loopState, onFinish: _onFinish, }}
        shadowCastingBitMask={4}
        type="VRX"
        dragType="FixedToWorld"
        resources={selected.materials}
        onLoadStart={_onLoadStart}
        onLoadEnd={_onLoadEnd}
        onError={_onError}
      />
      <ViroQuad
        rotation={[-90, 0, 0]}
        position={[1, -60, -100]}
        key={`${key}Quad`}
        width={250}
        height={250}
        arShadowReceiver
        lightReceivingBitMask={4}
      />
    </>
  )
}