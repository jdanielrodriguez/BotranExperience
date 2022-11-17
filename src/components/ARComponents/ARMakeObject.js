import React from 'react';

import { Viro3DObject, ViroSound } from '@viro-community/react-viro';
// import ARSpotLigth from './ARSpotLigth';
export default function ARMakeObject(props) {
  const quetzal = {
    src: require('./../../../assets/vrx/quetzal/01-MODULOS-QUETZAL-FLATTEN.vrx'),
    src1: require('./../../../assets/vrx/quetzal/01-MODULOS-QUETZAL-FLATTEN2.vrx'),
    src2: require('./../../../assets/vrx/quetzal/01-MODULOS-QUETZAL-FLATTEN2B.vrx'),
    srcc: require('./../../../assets/vrx/quetzal/01-MODULOS-QUETZAL-FLATTEN-C.vrx'),
    materials: [
      require('./../../../assets/vrx/quetzal/QUETZAL%20VOLANDO0000.png'),
      require('./../../../assets/vrx/quetzal/QUETZAL_VOLANDO_1.avi'),
    ],
  };
  const {
    selected,
    animationName,
    playAnim,
    _onFinish,
    _onFinishQuetzal,
    _onLoadStart,
    _onLoadEnd,
    _onError,
    key,
    _changeObject,
    foundAnchor,
    show3D,
    style,
    onFinishSound,
    column,
  } = props;

  if (!show3D) {
    return (
      <>
        <Viro3DObject
          key={`${key}quetzal`}
          source={quetzal.srcc}
          scale={[0.0004, 0.0004, 0.0004]}
          animation={{
            name: '',
            run: !show3D,
            loop: true,
            onFinish: () => {
              _onFinishQuetzal(column);
            },
          }}
          type="VRX"
          resources={quetzal.materials}
          // onLoadStart={_onLoadStart}
          // onLoadEnd={_onLoadEnd}
          position={[0, 0, 0]}
          // onError={_onError}
        />
      </>
    );
  }

  return (
    <>
      {/* <ARSpotLigth /> */}
      {show3D && playAnim && (
        <>
          <Viro3DObject
            key={`${key}Obj`}
            source={selected.src}
            onPress={_changeObject}
            onClick={_changeObject}
            onTouch={_changeObject}
            scale={selected.scale ? selected.scale : [0.00095, 0.001, 0.001]}
            lightReceivingBitMask={5}
            animation={{
              name: animationName,
              run: playAnim,
              loop: false,
              onFinish: _onFinish,
            }}
            shadowCastingBitMask={4}
            type="VRX"
            style={style}
            resources={selected.materials}
            onLoadStart={_onLoadStart}
            onLoadEnd={_onLoadEnd}
            position={
              selected.position ? selected.position : [-0.001, -0.101, 0]
            }
            onError={_onError}
            visible={playAnim}
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
  );
}
