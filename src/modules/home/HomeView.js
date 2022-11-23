import React, {useState} from 'react';
import {
    Dimensions, Image, StyleSheet, TouchableOpacity, View
} from 'react-native';

import ARObjects from '../../components/ARComponents/ARObjects';
import ARScene from '../../components/ARScene';

import BotranARComponent from '../../components/ARComponents/BotranARComponent';

export default function HomeScreen() {
    const btnOrigin = require('./../../../assets/images/guatemala-origin-button.png');
    const btnDynamic = require('./../../../assets/images/dynamic-ageing-button.png');
    const btnAroundWorld = require('./../../../assets/images/around-the-world-button.png');
    const btnSustainable = require('./../../../assets/images/sustainable-button.png');
    const objects = ARObjects();
    let index = 0;
    let column = 0;
    let isPlaying = false;
    let pauseTracking = false;
    let tempState = {};

    const [state, setState] = useState({
        selected: objects[column][index],
        show3D: true,
        show32D: false,
        objects,
        pauseUpdates: false,
        isTracking: false,
        playAnim: false,
        quetzal: false,
        objIndex: index,
        component: BotranARComponent,
        column,
        targets: ['Botran12'],
        animationName: '',
        foundAnchor: null,
        position: [0, 0, 0],
        anchorId: null,
        target: '',
    });

    const _changeColumn = columnNew => {
        let currentColumn = columnNew === objects.length ? 1 : columnNew;

        index = 0;

        if (!objects[currentColumn]) {
            currentColumn = 1;
        }

        if (!objects[currentColumn][index]) {
            index = 0;
        }

        const selectedNew = objects[currentColumn][index];
        tempState = state;
        column = currentColumn;

        tempState.animationName = '01';
        tempState.playAnim = false;
        tempState.objIndex = index;
        tempState.loop = false;
        tempState.selected = null;
        tempState.column = currentColumn;
        tempState.show3D = false;
        tempState.show32D = false;
        // tempState.quetzal = true;
        isPlaying = true;
        tempState.selected = selectedNew;
        setState({...tempState});
        // setTimeout(() => {
        // tempState.selected = selectedNew;
        // tempState.loop = true;
        // tempState.animationName = '';
        // tempState.playAnim = true;
        // tempState.show32D = true;
        // tempState.show3D = true;
        // setState({ ...tempState });
        // }, 100);
    };

    const _onFinish = () => {
        const temp = state;
        tempState.animationName = '';
        // tempState.playAnim = false;
        // tempState.column = column;
        // setState({ ...tempState });

        // setTimeout(() => {
        //   console.log('cambio!!!!')
        //   _changeObject()
        // }, 1000);
    };

    const _onFinishQuetzal = columnNew => {
        pauseTracking = true;

        let currentColumn = columnNew === objects.length ? 1 : columnNew;

        index = 0;

        if (!objects[currentColumn]) {
            currentColumn = 1;
        }

        if (!objects[currentColumn][index]) {
            index = 0;
        }
        const selectedNew = objects[currentColumn][index];
        const temp = state;

        // Change resource online and indicate quetzal animation finish.
        tempState.selected = selectedNew;
        tempState.quetzal = false;

        setState({...tempState});

        // After 3 seconds fire new status to indicate tracking can continue
        setTimeout(() => {
            isPlaying = false;
            pauseTracking = false;
        }, 1000);
    };

    const onFinishSound = () => {
        console.log('sonido acabado');
    };

    const _changeObject = () => {
        let currentColumn = state.column;

        if (objects) {
            if (currentColumn === objects.length) {
                currentColumn = 1;
            }

            index = state.objIndex === objects[currentColumn].length - 1 ? 0 : state.objIndex + 1;

            if (!objects[currentColumn][index]) {
                currentColumn = 1;
                index = 0;
            }

            // if (index === (objects[currentColumn].length)) {
            //   currentColumn += 1;
            // }
        }

        const newSelected = objects[currentColumn][index];

        tempState = state;

        tempState.objIndex = index;
        tempState.column = currentColumn;
        tempState.selected = newSelected;

        setState({...tempState});

        // After 3 seconds fire new status to indicate tracking can continue
        setTimeout(() => {
            isPlaying = false;
            pauseTracking = false;
        }, 500);
    };
    const _onAnchorFound = anchor => {
        console.log(`FOUND************* ${anchor.trackingMethod}`);

        tempState = state;
        const {anchorId} = state;

        if (!tempState.playAnim) {
            tempState.animationName = '';
            tempState.pauseUpdates = true;
            tempState.playAnim = true;
            tempState.show32D = true;
            tempState.isTracking = true;
            tempState.show3D = true;

            if (anchorId !== anchor.anchorId) {
                tempState.foundAnchor = anchor || null;
                tempState.anchorId = anchor ? anchor.anchorId : null;
                tempState.show3D = true;
                tempState.isTracking = true;
                tempState.show32D = true;
            }

            setState({...tempState});
        }
    };

    const _onAnchorLost = anchor => {
        console.log('ANCHORLost********:', anchor);
        // tempState = state;
        // tempState.animationName = '01';
        // tempState.pauseUpdates = true;
        // tempState.playAnim = true;
        // tempState.show32D = false;
        // tempState.column = 1;
        // tempState.foundAnchor = anchor;
        // tempState.anchorId = anchor? anchor.anchorId : null;
        // setState({ ...tempState });
    };

    const _onAnchorUpdate = (anchor, target) => {
        tempState = state;

        console.log(
            `UPDATE* ${anchor.trackingMethod} - ${isPlaying} - ${target} - ${tempState.target} - Q: ${tempState.quetzal} - P ${pauseTracking}`,
        );

        if (!pauseTracking) {
            // Change status only if target is the same as selected
            if (tempState.target === target) {
                if (!tempState.quetzal && !isPlaying && anchor.trackingMethod === 'tracking') {
                    isPlaying = true;
                    _onAnchorFound(anchor);
                } else if (!tempState.quetzal && isPlaying && anchor.trackingMethod === 'lastKnownPose') {
                    tempState.isTracking = false;
                    tempState.playAnim = false;
                    tempState.pauseUpdates = false;
                    tempState.show3D = false;
                    tempState.show32D = false;
                    tempState.anchorId = null;
                    tempState.foundAnchor = null;
                    tempState.animationName = 'NoAnimation';

                    setState({...tempState});
                }
            }
        }

        // Set target when status is tracking and is another element
        if (anchor.trackingMethod === 'tracking' && tempState.target !== target) {
            tempState.target = target;
            setState({...tempState});
        }
    };

    const _onCameraTransformUpdate = anchor => {
        tempState = state;

        if (anchor.trackingMethod === 'tracking') {
            tempState.anchorId = anchor.anchorId;
            tempState.foundAnchor = anchor;
            tempState.animationName = '';
            tempState.pauseUpdates = false;
            tempState.isTracking = true;
            tempState.playAnim = true;
            tempState.show3D = true;
            tempState.show32D = true;
            setState({...tempState});
            // console.log('anchor: ', anchor);
        } else if (anchor.trackingMethod === 'lastKnownPose') {
            tempState.isTracking = false;
            tempState.playAnim = false;
            tempState.pauseUpdates = true;
            tempState.show3D = false;
            tempState.show32D = false;
            tempState.anchorId = null;
            tempState.foundAnchor = null;
            tempState.animationName = 'NoAnimation';
            setState({...tempState});
            // console.log('STATE: ', state);
        }
    };

    return (
        <View style={styles.container}>
            <ARScene
                {...state}
                style={{zIndex: 1}}
                column={state.column}
                objIndex={state.objIndex}
                selected={state.selected}
                objects={objects}
                _onFinish={_onFinish}
                _onFinishQuetzal={_onFinishQuetzal}
                _onAnchorFound={_onAnchorFound}
                _onAnchorLost={_onAnchorLost}
                _onAnchorUpdate={_onAnchorUpdate}
                onFinishSound={onFinishSound}
                setState={setState}
                _onCameraTransformUpdate={_onCameraTransformUpdate}
                pauseUpdates
                playAnim={state.playAnim}
                targets={['Botran12', 'Botran15', 'Botran18']}
                foundAnchor={state.foundAnchor}
                _changeObject={_changeObject}
                show3D={state.show3D}
                show32D={state.show32D}
                _target={state.target}
            />
            <View style={styles.section}>
                <View style={{...styles.container2, marginLeft: 'auto'}}>
                    <TouchableOpacity
                        onPress={() => {
                            _changeColumn(2);
                        }}
                        style={{...styles.btn}}
                    >
                        <Image source={btnOrigin} style={styles.img}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            _changeColumn(3);
                        }}
                        style={styles.btn}
                    >
                        <Image source={btnDynamic} style={styles.img}/>
                    </TouchableOpacity>
                </View>
                <View style={{...styles.container2, marginLeft: 'auto'}}>
                    <TouchableOpacity
                        onPress={() => {
                            _changeColumn(4);
                        }}
                        style={{...styles.btn}}
                    >
                        <Image source={btnAroundWorld} style={styles.img}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            _changeColumn(5);
                        }}
                        style={{...styles.btn}}
                    >
                        <Image source={btnSustainable} style={styles.img}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    section: {
        backfaceVisibility: 'hidden',
        position: 'absolute',
        bottom: 90,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 150,
        zIndex: 9,
    },
    img: {
        maxWidth: 150,
        maxHeight: 62,
        width: '100%',
        height: '100%',
    },
    btn: {
        width: '45%',
    },
});
