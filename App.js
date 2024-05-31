import React from 'react';
import MyText from './component/MyText';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <MyText text={'Hello, Sayali here form props'} />
    </SafeAreaView>
  );
};

export default App;
