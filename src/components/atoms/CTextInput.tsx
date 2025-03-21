import React, {FC} from 'react';
import {TextInput, TextInputProps} from 'react-native';

const CTextInput: FC<TextInputProps> = props => {
  const {
    style,
    value,
    onChangeText,
    placeholder,
    placeholderTextColor = '#A9A9A9',
    color = '#424242',
  } = props;
  return (
    <TextInput
      style={[
        {
          color: color,
        },
        style,
      ]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      {...props}
    />
  );
};

export default CTextInput;
