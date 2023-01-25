import React, { useState } from 'react';
import { Platform, Dimensions } from 'react-native'
import Navigator from './navigation/Navigator';
import SelectAgeScreen from './selectAge/SelectAgeViewContainer';
import NoIpadScreen from './noIpad/NoIpadViewContainer';

export default function AppView() {
  const handleState = (e) => {
    setFirstTime(e);
  };
  const handleDate = (e) => {
    setDate(e);
  };
  const isIpad = aspectRatio<=1.6 && Platform.isPad;
  const {height, width} = Dimensions.get('window'); 
  const aspectRatio = height/width;
  const [firstTime, setFirstTime] = useState(false);
  const tempDate = new Date();
  const dd = String(tempDate.getDate()).padStart(2, '0');
  const mm = String(tempDate.getMonth() + 1).padStart(2, '0');
  const yyyy = tempDate.getFullYear() - 18;
  const [date, setDate] = useState(new Date(`${yyyy}-${mm}-${dd}`));
  if (firstTime) {
    return <SelectAgeScreen setFirstTime={handleState} firstTime={firstTime} setDate={handleDate} date={date} />;
  }
  if (isIpad) {
    return <NoIpadScreen />;
  }
  return <Navigator onNavigationStateChange={() => { console.log('changeds')}} uriPrefix="/app" />;
}
