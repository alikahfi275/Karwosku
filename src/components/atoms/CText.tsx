import React, {FC} from 'react';
import {Text, TextStyle, ViewStyle} from 'react-native';
import {
  fontSizeScale,
  getFontFamily,
  horizontalScale,
  verticalScale,
} from '../../utils';

interface Props {
  children: any;
  fontSize?: number;
  color?: string;
  weight?: number;
  style?: ViewStyle | TextStyle;
  marginVertical?: number;
  marginHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  margin?: number;
  padding?: number;
  maxWidth?: number;
  textAlign?: 'center' | 'left' | 'right';
}

const CText: FC<Props> = props => {
  const {
    marginVertical,
    marginHorizontal,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingVertical,
    paddingHorizontal,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    children,
    fontSize,
    color,
    weight,
    style,
    margin,
    padding,
    maxWidth,
    textAlign,
  } = props;
  const marginValue = margin ? verticalScale(margin) : 0;
  const paddingValue = padding ? verticalScale(padding) : 0;
  return (
    <Text
      style={[
        {
          fontSize: fontSizeScale(fontSize || 14),
          fontFamily: getFontFamily('Poppins', weight),
          color: color || '#000000',
          marginTop: verticalScale(marginTop || marginVertical || marginValue),
          marginBottom: verticalScale(
            marginBottom || marginVertical || marginValue,
          ),
          marginLeft: horizontalScale(
            marginLeft || marginHorizontal || marginValue,
          ),
          marginRight: horizontalScale(
            marginRight || marginHorizontal || marginValue,
          ),
          paddingTop: verticalScale(
            paddingTop || paddingVertical || paddingValue,
          ),
          paddingBottom: verticalScale(
            paddingBottom || paddingVertical || paddingValue,
          ),
          paddingLeft: horizontalScale(
            paddingLeft || paddingHorizontal || paddingValue,
          ),
          paddingRight: horizontalScale(
            paddingRight || paddingHorizontal || paddingValue,
          ),
          maxWidth: maxWidth,
          textAlign: textAlign,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export default CText;
