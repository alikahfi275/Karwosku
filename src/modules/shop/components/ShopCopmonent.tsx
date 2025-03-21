import React from 'react';
import {CText, CTouch, CView, TextInputNeo} from '../../../components';
import {Banner1, fontSizeScale, User} from '../../../utils';
import {Image, StatusBar} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';

const ShopCopmonent = () => {
  return (
    <CView flex={1} backgroundColor="#DDDDDD">
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={'transparent'}
      />
      <CView alignItems="center">
        <Image
          source={Banner1}
          style={{width: '100%', height: 240}}
          resizeMode="stretch"
        />
        <CTouch alignItems="center">
          <Neomorph
            swapShadows
            lightShadowColor="#f0faff"
            darkShadowColor="#2b82b3"
            style={{
              shadowRadius: 10,
              borderRadius: 40,
              backgroundColor: '#DDDDDD',
              width: 150,
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: -150,
            }}>
            <Image
              source={User}
              style={{width: 150, height: 150, borderRadius: 100}}
            />
          </Neomorph>
          <CText color="#2b82b3" marginTop={10}>
            Ganti Logo Steam
          </CText>
        </CTouch>
      </CView>
      <CView marginTop={10} marginHorizontal={20}>
        <TextInputNeo placeholder="Masukan Nama Steam" />
        <TextInputNeo placeholder="Masukan Alamat Steam" />
        <TextInputNeo
          placeholder="Masukan Nomor Telepon"
          keyboardType="phone-pad"
        />
      </CView>
      <CView alignItems="center" marginTop={35}>
        <CTouch onPress={() => {}}>
          <Neomorph
            swapShadows
            lightShadowColor="#f0faff"
            darkShadowColor="#2b82b3"
            style={{
              shadowRadius: 12,
              borderRadius: 20,
              backgroundColor: '#DDDDDD',
              width: fontSizeScale(350),
              height: fontSizeScale(50),
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 5,
            }}>
            <CText color="#2b82b3" weight={500} fontSize={fontSizeScale(20)}>
              SIMPAN
            </CText>
          </Neomorph>
        </CTouch>
      </CView>
    </CView>
  );
};

export default ShopCopmonent;
