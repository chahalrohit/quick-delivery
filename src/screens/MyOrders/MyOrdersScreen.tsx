import * as React from 'react';
import { Container, Content, Header } from '../../components';
import MyOrderList from '../../components/MyOrderList';
import { myOrderFoodItemList } from '../../assets/data';
import styles from './Styles/MyOrdersStyle';

export interface Props {
  navigation: any;
}

function MyOrdersScreen({ navigation }: any) {
  return (
    <Container statusBarColorWhite conatinerStyle={styles.conatinerStyle}>
      <Header
        hasBackBtn
        title="My Orders"
        onBackPress={() => navigation.goBack()}
      />
      <Content contentContainerStyle={styles.container}>
        <MyOrderList
          data={myOrderFoodItemList}
          onPress={() => navigation.navigate('OrderSummary')}
        />
      </Content>
    </Container>
  );
}

export default MyOrdersScreen;
