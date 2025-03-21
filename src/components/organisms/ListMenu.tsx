import React from 'react';
import {CText, CTouch, CView} from '../atoms';
import {Neomorph} from 'react-native-neomorph-shadows';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ListMenu = (props: any) => {
  const navigation: any = useNavigation();
  const {menu1, menu2} = props;
  return (
    <CView>
      <CView
        flexDirection="row"
        justifyContent="space-between"
        marginHorizontal={30}
        marginTop={40}>
        {menu1.map((item: any) => (
          <CTouch
            key={item.id}
            onPress={() => navigation.navigate(item.routeName)}>
            <Neomorph
              swapShadows
              lightShadowColor="#f0faff"
              darkShadowColor="#2b82b3"
              style={{
                shadowRadius: 10,
                borderRadius: 40,
                backgroundColor: '#DDDDDD',
                width: 140,
                height: 140,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={item.image} style={{width: 80, height: 80}} />
              <CText color="#2b82b3">{item.name}</CText>
            </Neomorph>
          </CTouch>
        ))}
      </CView>
      <CView
        flexDirection="row"
        justifyContent="space-between"
        marginHorizontal={30}
        marginTop={40}>
        {menu2.map((item: any) => (
          <CTouch key={item.id}>
            <Neomorph
              swapShadows
              lightShadowColor="#f0faff"
              darkShadowColor="#2b82b3"
              style={{
                shadowRadius: 10,
                borderRadius: 40,
                backgroundColor: '#DDDDDD',
                width: 140,
                height: 140,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={item.image} style={{width: 80, height: 80}} />
              <CText color="#2b82b3">{item.name}</CText>
            </Neomorph>
          </CTouch>
        ))}
      </CView>
    </CView>
  );
};

export default ListMenu;
