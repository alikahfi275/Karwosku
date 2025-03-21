import React from 'react';
import HomeComponent from '../components/HomeComponent';
import {homeProps} from '../stores/type';
import {Editor, Payment, Shop, User} from '../../../utils';

const HomeContainer: React.FC<homeProps> = () => {
  const menu1 = [
    {
      id: 1,
      name: 'Shop',
      image: Editor,
      routeName: 'Shop',
    },
    {
      id: 2,
      name: 'Services',
      image: Shop,
      routeName: 'Shop',
    },
  ];

  const menu2 = [
    {
      id: 1,
      name: 'Manage',
      image: User,
      routeName: 'Shop',
    },
    {
      id: 2,
      name: 'Payment',
      image: Payment,
      routeName: 'Shop',
    },
  ];
  return <HomeComponent menu1={menu1} menu2={menu2} />;
};

export default HomeContainer;
