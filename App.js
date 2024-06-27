import React from 'react';
import MyText from './component/MyText';
import {SafeAreaView, Image} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <MyText text={'Hello User, welcome !'} />
      <Image
        source={require('./assets/images/cake.png')}
        style={{width: '100%', height: '100%', backgroundColor: 'beige'}}
        resizeMode={'center'}
      />
    </SafeAreaView>
  );
};

export default App;
