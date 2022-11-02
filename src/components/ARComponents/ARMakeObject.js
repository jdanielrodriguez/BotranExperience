
import React from 'react';

import { Viro3DObject, ViroSound } from '@viro-community/react-viro';
import ARSpotLigth from './ARSpotLigth';

export default function ARMakeObject(props) {

  const { selected, animationName, playAnim, _onFinish, _onLoadStart, _onLoadEnd, _onError, key, _changeObject, show32D, show3D, style, onFinishSound } = props;
  if (!show32D) {
    <>
    </>
  }
  return (
    <>
      <ARSpotLigth />
      {(show3D && playAnim) && (
        <><Viro3DObject
          key={`${key}Obj`}
          source={selected.src}
          scale={([1, 1, 1])}
          position={[0, -150, -220]}
          dragType="FixedToWorld"
          rotation={[0, 0, -1]}
          onPress={_changeObject}
          onClick={_changeObject}
          onTouch={_changeObject}
          lightReceivingBitMask={5}
          animation={{ name: animationName, run: playAnim, loop: false, onFinish: _onFinish, }}
          shadowCastingBitMask={4}
          type="VRX"
          style={style}
          resources={selected.materials}
          onLoadStart={_onLoadStart}
          onLoadEnd={_onLoadEnd}
          onError={_onError}
        />
          {selected.sound && (
            <ViroSound
              key={`${key}Sound`}
              source={selected.sound}
              onFinish={onFinishSound}
            />
          )}
        </>
      )}
    </>
  )
}