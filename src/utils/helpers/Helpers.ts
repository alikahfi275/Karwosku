import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const isSmall = width <= 375 && !DeviceInfo.hasNotch();

const guideLineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};
const guideLineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 375) {
    return 620;
  }
  return 680;
};
const guideLineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

export const horizontalScale = (size: any) =>
  (width / guideLineBaseWidth()) * size;

export const verticalScale = (size: any) =>
  (height / guideLineBaseHeight()) * size;

export const fontSizeScale = (size: any) =>
  Math.round(width / guideLineBaseFonts()) * size;

export const sizeScale = (size: any) =>
  Math.round(width / guideLineBaseFonts()) * size;

export const getFontFamily = (baseFont = 'Poppins', weight: any) => {
  switch (weight) {
    case 100:
      return `${baseFont}-Thin`;
    case 200:
      return `${baseFont}-ExtraLight`;
    case 300:
      return `${baseFont}-Light`;
    case 'normal':
    case 400:
      return `${baseFont}-Regular`;
    case 500:
      return `${baseFont}-Medium`;
    case 600:
      return `${baseFont}-SemiBold`;
    case 'bold':
    case 700:
      return `${baseFont}-Bold`;
    case 800:
      return `${baseFont}-ExtraBold`;
    case 900:
      return `${baseFont}-Black`;
    default:
      return `${baseFont}-Regular`;
  }
};

export const Constants = {
  ABOUT:
    'Smart Courier adalah aplikasi smartphone yang secara efisien mengirimkan paket terutama dokumen. Dimana Anda dapat memperbarui pekerjaan untuk hari ini dengan mudah. Unduh dan feel smart untuk mengirimkan paket',
  PRIVACY_POLICY: {
    TITLE: 'Kebijakan Privasi',
    SUB_TITLE_1: 'Penangguhan dan Pemutusan Layanan',
    SUB_TITLE_2: 'Kebijakan-kebijakan tersebut di antaranya:',
    CONTENT_1:
      'RDS Express tunduk terhadap kebijakan perlindungan data pribadi Pengguna sebagaimana yang diatur dalam Peraturan Menteri Komunikasi dan Informatika Nomor 20 Tahun 2016 Tentang Perlindungan Data Pribadi Dalam Sistem Elektronik yang mengatur dan melindungi penggunaan data dan informasi penting para Pengguna. RDS Express melindungi segala informasi yang diberikan Pengguna pada saat pendaftaran, mengakses, dan menggunakan seluruh layanan aplikasi Smart Courier.',
    CONTENT_2:
      'RDS Express berhak menggunakan data dan informasi para Pengguna demi meningkatkan mutu dan pelayanan di aplikasi Smart Courier.',
    CONTENT_3:
      'RDS Express tidak bertanggung jawab atas pertukaran data yang dilakukan sendiri di antara pengguna aplikasi Smart Courier.',
    CONTENT_4:
      'RDS Express hanya dapat memberitahukan data dan informasi yang dimiliki oleh para Pengguna bila diwajibkan dan/atau diminta oleh institusi yang berwenang berdasarkan ketentuan hukum yang berlaku, perintah resmi dari Pengadilan, dan/atau perintah resmi dari instansi atau aparat yang bersangkutan.',
    CONTENT_5:
      'RDS Express tunduk terhadap UU Hak Cipta Nomor 28 tahun 2014 dan seluruh konten di dalamnya dilindungi oleh UU di atas.',
    CONTENT_6:
      'RDS Express tunduk terhadap UU Nomor 11 tahun 2008 tentang Informasi dan Transaksi Elektronik (ITE).',
  },
};

export const shadowStyle = {
  shadowColor: '#7dbfe4',
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.0,
  elevation: 24,
};
