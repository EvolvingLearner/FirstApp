import React from 'react';
import {View, Text} from 'react-native';
import Style from './Style';
import PropTypes from 'prop-types';

const MyText = ({text}) => {
  const handleTextClick = () => {
    alert('You just pressed the text component');
  };

  return (
    <View>
      <Text style={Style.text} onPress={() => handleTextClick()}>
        {text}
      </Text>
    </View>
  );
};

MyText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MyText;
