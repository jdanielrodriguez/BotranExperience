import React, {useState} from 'react';
import {
    Dimensions,
    Image, Platform,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import ARObjects from '../../components/ARComponents/ARObjects';
import ARScene from '../../components/ARScene';

import BotranARComponent from '../../components/ARComponents/BotranARComponent';
import {clear} from "react-native/Libraries/LogBox/Data/LogBoxData";

let staticInterval = 0;

export default function HomeScreen() {
    const btnOrigin = require('./../../../assets/images/guatemala-origin-button.png');
    const btnDynamic = require('./../../../assets/images/dynamic-ageing-button.png');
    const btnAroundWorld = require('./../../../assets/images/around-the-world-button.png');
    const btnSustainable = require('./../../../assets/images/sustainable-button.png');
    const bottle12 = require('./../../../assets/images/botellas/punteadas/botella-altainfinite.png');
    const bottle18 = require('./../../../assets/images/botellas/punteadas/botella-baja-greyinfinite.png');
    const objects = ARObjects();
    const intervalID = setInterval(() => {
        let now = new Date();
        let seconds = (now.getTime() - lastUpdate.getTime()) / 1000;

        console.log("*** has been from tracking ***", seconds, now, lastUpdate);
        console.log("*** the interval id is ***", intervalID);
        console.log("*** the static interval id is ***", staticInterval);

        if (seconds > 2 && intervalID === staticInterval) {
            _onAnchorLost();
            now = null;
            seconds = 0;
        } else if (intervalID !== staticInterval) {
            clearInterval(intervalID);
        }
    }, 1500);

    staticInterval = intervalID;

    let index = 0;
    let column = 0;
    let isPlaying = false;
    let pauseTracking = false;
    let lastUpdate = new Date();
    let tempState = {};

    const targets = [
        // 'Botran12',
        'Botran12Normal',
        // 'Botran12Sombra',
        // 'Botran12Luz',
        // 'Botran15',
        'Botran15Normal',
        // 'Botran15Sombra',
        // 'Botran15Luz',
        // 'Botran18',
        'Botran18Normal',
        // 'Botran18Sombra',
        // 'Botran18Luz',
    ];

    const [state, setState] = useState({
        selected: objects[column][index],
        show3D: true,
        show32D: false,
        objects,
        pauseUpdates: true,
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
        lastTarget: ''
    });

    const _changeColumn = columnNew => {
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
        tempState = state;
        column = currentColumn;

        tempState.objIndex = index;
        tempState.column = currentColumn;
        tempState.selected = selectedNew;

        setState({...tempState});

        isPlaying = false;
        pauseTracking = false;
    };

    const _onFinish = () => {
        // TODO do something when the animation finish
    };

    const _onFinishQuetzal = columnNew => {
        // pauseTracking = true;
        //
        // let currentColumn = columnNew === objects.length ? 1 : columnNew;
        //
        // index = 0;
        //
        // if (!objects[currentColumn]) {
        //     currentColumn = 1;
        // }
        //
        // if (!objects[currentColumn][index]) {
        //     index = 0;
        // }
        // const selectedNew = objects[currentColumn][index];
        // // const temp = state;
        //
        // // Change resource online and indicate quetzal animation finish.
        // tempState.selected = selectedNew;
        // tempState.quetzal = false;
        //
        // setState({...tempState});
        //
        // // After 3 seconds fire new status to indicate tracking can continue
        // setTimeout(() => {
        //     isPlaying = false;
        //     pauseTracking = false;
        // }, 1000);
    };

    const onFinishSound = () => {
        console.log('*** Sound finish ***');
    };

    const _changeObject = () => {
        pauseTracking = true;

        let currentColumn = state.column;

        index = state.objIndex;

        if (objects) {
            // If the animation columns is the last one
            if (currentColumn === objects.length) {
                currentColumn = 1;
                index = 0;
            }

            // If the animation index is the last one
            if (index === objects[currentColumn].length - 1) {
                currentColumn = 1;
                index = 0;
            } else {
                index += 1;
            }
        }

        const newSelected = objects[currentColumn][index];

        tempState = state;

        tempState.objIndex = index;
        tempState.column = currentColumn;
        tempState.selected = newSelected;

        setState({...tempState});

        isPlaying = false;
        pauseTracking = false;
    };

    const _onAnchorFound = anchor => {
        tempState = state;
        const {anchorId} = state;

        // console.log("*** Anchor found and play ***", tempState.target)

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
            }

            setState({...tempState});
        }
    };

    const _onAnchorLost = () => {

        if (Platform.OS === 'ios') {
            tempState = state

            if (isPlaying) {
                tempState.isTracking = false;
                tempState.playAnim = false;
                tempState.pauseUpdates = false;
                tempState.show3D = false;
                tempState.show32D = false;
                tempState.anchorId = null;
                tempState.foundAnchor = null;
                tempState.animationName = 'NoAnimation';
                tempState.target = '';
                setState({...tempState});
            }
        }
    };

    const _onAnchorUpdate = (anchor, target) => {
        tempState = state;

        // console.log("*** targets are ***", tempState.target, target);


        if (Platform.OS === 'ios') {
            // if (tempState.target !== target && tempState.target !== '') {
            //     _onAnchorLost();
            //     return false;
            // }

            lastUpdate = new Date();

            console.log(lastUpdate);

            if (tempState.target === target && !isPlaying) {
                isPlaying = true;
                _onAnchorFound(anchor);
            }
        } else {
            _onAnchorUpdateAndroid(tempState, anchor, target)
        }

        if (tempState.target === '') {
            tempState.target = target;
            tempState.lastTarget = target;
            setState({...tempState});
        }
    };

    const _onAnchorUpdateAndroid = (anchor, target) => {
        if (tempState.anchorId !== anchor.anchorId && tempState.anchorId > 0) {
            return false;
        }

        if (!pauseTracking) {
            // Change status only if target is the same as selected
            if (tempState.target === target) {
                if (
                    !isPlaying &&
                    anchor.trackingMethod === 'tracking'
                ) {
                    isPlaying = true;
                    _onAnchorFound(anchor);
                } else if (
                    isPlaying &&
                    anchor.trackingMethod === 'lastKnownPose'
                ) {
                    tempState.isTracking = false;
                    tempState.playAnim = false;
                    tempState.pauseUpdates = false;
                    tempState.show3D = false;
                    tempState.show32D = false;
                    tempState.anchorId = null;
                    tempState.foundAnchor = null;
                    tempState.animationName = 'NoAnimation';
                    tempState.target = '';
                    setState({...tempState});
                }
            }
        }

        // Set target when status is tracking and is another element
        if (anchor.trackingMethod === 'tracking' && tempState.target === '') {
            tempState.target = target;
            tempState.lastTarget = target;
            setState({...tempState});
        }
    }

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

    const componentWillUnmount = () => {
        clearInterval(intervalID);
    }

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
                targets={targets}
                foundAnchor={state.foundAnchor}
                _changeObject={_changeObject}
                show3D={state.show3D}
                show32D={state.show32D}
                _target={state.target}
            />
            {(!state.show3D || !state.playAnim) && !pauseTracking && (
                <View style={styles.pointer_bottle_container}>
                    <Image
                        source={state.lastTarget.includes('Botran18') ? bottle18 : bottle12}
                        style={styles.pointer_bottle}
                    />
                </View>
            )}
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
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    section: {
        backfaceVisibility: 'hidden',
        position: 'absolute',
        bottom: 20,
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
    pointer_bottle_container: {
        backfaceVisibility: 'hidden',
        position: 'absolute',
        width,
        marginLeft: 'auto',
        marginRight: 'auto',
        height,
        zIndex: 0,
        marginTop: '21%',
    },
    pointer_bottle: {
        width: '70%',
        height: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: -150,
    },
});
