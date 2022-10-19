import React, { useState } from 'react';

import Navigator from './navigation/Navigator';
import SelectAgeScreen from './selectAge/SelectAgeViewContainer';

export default function AppView() {
  const handleState = (e) => {
    setFirstTime(e);
  };
  const handleDate = (e) => {
    setDate(e);
  };
  const [firstTime, setFirstTime] = useState(true);
  const tempDate = new Date();
  const dd = String(tempDate.getDate()).padStart(2, '0');
  const mm = String(tempDate.getMonth() + 1).padStart(2, '0');
  const yyyy = tempDate.getFullYear() - 18;
  const [date, setDate] = useState(new Date(`${yyyy}-${mm}-${dd}`));
  if (firstTime) {
    return <SelectAgeScreen setFirstTime={handleState} firstTime={firstTime} setDate={handleDate} date={date} />;
  }
  return <Navigator onNavigationStateChange={() => { }} uriPrefix="/app" />;
}
