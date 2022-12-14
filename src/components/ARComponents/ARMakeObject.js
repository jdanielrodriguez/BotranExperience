import React from 'react';

import {Viro3DObject, ViroSound} from '@viro-community/react-viro';
// import ARSpotLigth from './ARSpotLigth';
export default function ARMakeObject(props) {
    const quetzal = {
        srcc: require('./../../../assets/vrx/quetzal/01-MODULOS-QUETZAL-VER2-FLATTEN.vrx'),
        materials: [
            require('./../../../assets/vrx/quetzal/QUETZAL%20VOLANDO0000.png'),
            require('./../../../assets/vrx/quetzal/QUETZAL_VOLando02_0001_Layer-1.png'),
            require('./../../../assets/vrx/quetzal/QUETZAL_VOLando02_0000_Layer-2.png'),
            require('./../../../assets/vrx/quetzal/QUETZAL_VOLando02_0002_Layer-3.png'),
        ],
        sound: require('./../../../assets/mp3/narracion/BOTRAN_NATURE.mp3'),
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
        _key,
        _changeObject,
        objIndex,
        show3D,
        style,
        onFinishSound,
        column,
        _target,
    } = props;

    // Return quetzal when anchor is not available
    // if (!show3D && !playAnim) {
    //   return (
    //     <>
    //       <Viro3DObject
    //         key={`${_key}quetzal`}
    //         source={quetzal.srcc}
    //         scale={[0.0004, 0.0004, 0.0004]}
    //         rotation={[0, -90, 0]}
    //         animation={{
    //           name: '',
    //           run: !playAnim,
    //           loop: false,
    //           onFinish: () => {
    //             _onFinishQuetzal(column);
    //           },
    //         }}
    //         type="VRX"
    //         resources={quetzal.materials}
    //         // onLoadStart={_onLoadStart}
    //         // onLoadEnd={_onLoadEnd}
    //         position={[0, 0, 0]}
    //         // onError={_onError}
    //       />
    //       {quetzal.sound && (
    //         <ViroSound
    //           key={`${_key}SoundQuetzal`}
    //           source={quetzal.sound}
    //           onFinish={onFinishSound}
    //         />
    //       )}
    //     </>
    //   );
    // }

    // console.log(`${_target} ******************** ${_key}`);

    // Return null element in case is not the current anchor element
    if (_target !== _key) {
        return null;
    }

    console.log("Animation is ******",playAnim);

    return (
        <>
            {/* <ARSpotLigth /> */}
            {show3D && playAnim && (
                <>
                    <Viro3DObject
                        key={`${_key}Obj`}
                        source={selected.src}
                        // scale={selected.scale ? selected.scale : [0.00095, 0.001, 0.001]}
                        lightReceivingBitMask={5}
                        onClick={_changeObject}
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
                        position={[0, -0.155, 0]}
                        scale={[0.002, 0.002, 0.002]}
                        rotation={[10, 0, 0]}
                        onError={_onError}
                        visible={playAnim}
                        highAccuracyEvents={false}
                    />
                    {selected.sound && (
                        <ViroSound
                            key={`${_key}Sound`}
                            source={selected.sound}
                            onFinish={
                                (column === 0 || column === 1) && objIndex === 0
                                    ? onFinishSound
                                    : _changeObject
                            }
                            volume={1}
                            muted={!playAnim}
                            paused={!playAnim}
                        />
                    )}
                </>
            )}
        </>
    );
}
