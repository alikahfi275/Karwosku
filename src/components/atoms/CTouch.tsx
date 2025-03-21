import React, {ReactNode} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils';

interface CustomTouchProps {
  onPress?: () => void;
  disabled?: boolean;
  styleContainer?: ViewStyle;
  margin?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  padding?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  backgroundColor?: string;
  children?: ReactNode;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  flexDirection?: 'row' | 'column' | 'column-reverse' | 'row-reverse';
}

const CTouch: React.FC<CustomTouchProps> = props => {
  const {
    onPress,
    disabled = false,
    styleContainer = {},
    margin,
    padding,
    marginBottom,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginTop,
    marginVertical,
    paddingBottom,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingVertical,
    backgroundColor,
    children,
    alignItems,
    justifyContent,
    borderWidth,
    borderColor,
    borderRadius,
    flexDirection,
  } = props;
  const marginValue = verticalScale(margin || 0);
  const paddingValue = verticalScale(padding || 0);

  return (
    <TouchableOpacity
      style={[
        {
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
          backgroundColor: backgroundColor,
          alignItems: alignItems,
          justifyContent: justifyContent,
          borderWidth: borderWidth,
          borderColor: borderColor,
          borderRadius: borderRadius,
          flexDirection: flexDirection,
        },
        styleContainer,
      ]}
      onPress={onPress}
      disabled={disabled}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default CTouch;
