import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Navigation from './common/presenter/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
