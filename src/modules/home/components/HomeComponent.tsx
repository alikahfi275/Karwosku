import React from 'react';
import {CText, CView, ListMenu} from '../../../components';
import {Image, StatusBar} from 'react-native';
import {Banner, shadowStyle} from '../../../utils';
import {homeProps} from '../stores/type';
const {version} = require('../../../../package.json');

const HomeComponent: React.FC<homeProps> = props => {
  const {menu1, menu2} = props;
  return (
    <CView flex={1} backgroundColor="#DDDDDD">
      <StatusBar barStyle="dark-content" backgroundColor={'#7dbfe4'} />
      <CView style={shadowStyle}>
        <Image
          source={Banner}
          style={{width: '100%', height: 210}}
          resizeMode="stretch"
        />
      </CView>
      <ListMenu menu1={menu1} menu2={menu2} />
      <CView flex={1} alignItems="center" justifyContent="center">
        <CText color="#2b82b3">{version}</CText>
        <CText color="#2b82b3">Powered By Akael Xd Project</CText>
      </CView>
    </CView>
  );
};

export default HomeComponent;
