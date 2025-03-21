import React from 'react';
import {NeomorphFlex} from 'react-native-neomorph-shadows';
import {CTextInput} from '../atoms';

const TextInputNeo = (props: any) => {
  const {placeholder = 'Search', value, onChangeText, keyboardType} = props;
  return (
    <NeomorphFlex
      inner // <- enable shadow inside of neomorph
      swapShadows // <- change zIndex of each shadow color
      lightShadowColor="#f0faff"
      darkShadowColor="#2b82b3"
      style={{
        shadowRadius: 10,
        borderRadius: 25,
        backgroundColor: '#DDDDDD',
        paddingHorizontal: 20,
        marginTop: 30,
      }}>
      <CTextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </NeomorphFlex>
  );
};

export default TextInputNeo;
