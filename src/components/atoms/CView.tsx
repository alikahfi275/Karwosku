import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils';

interface CViewProps {
  children?: ReactNode;
  style?: ViewStyle | undefined;
  borderRadius?: number | undefined;
  flex?: number | undefined;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  padding?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  flexDirection?: 'row' | 'column' | 'column-reverse' | 'row-reverse';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}

const CView: React.FC<CViewProps> = props => {
  const {
    children,
    style,
    borderRadius,
    flex,
    backgroundColor,
    borderWidth,
    borderColor,
    flexDirection,
    alignItems,
    justifyContent,
    margin,
    padding,
    marginBottom,
    marginTop,
    marginVertical,
    marginHorizontal,
    marginRight,
    marginLeft,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingHorizontal,
    paddingVertical,
  } = props;
  const marginValue = verticalScale(margin || 0);
  const paddingValue = verticalScale(padding || 0);

  return (
    <View
      style={[
        {
          flex: flex || undefined,
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
          borderRadius: borderRadius || 0,
          borderWidth: borderWidth,
          borderColor: borderColor,
          flexDirection: flexDirection,
          alignItems: alignItems,
          justifyContent: justifyContent,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default CView;
