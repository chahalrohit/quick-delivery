import * as React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { Container, Content, Header } from '../../components';
import { Images } from '../../theme';
import styles from './Styles/OrderStyle';
import OrderFoodList from '../../components/OrderFoodList';
import CommonBtn from '../../components/CommonBtn';
import { orderFoodBillListData, orderFoodListData } from '../../assets/data';

export interface Props {
  navigation: any;
}

function OrderScreen({ navigation }: any) {
  const renderItem = ({ item }: any) => (
    <View style={styles.billTextRow}>
      <Text style={styles.foodItemText}>{item.itemName}</Text>
      <Text style={styles.amountText}>{item.itemPrice}</Text>
    </View>
  );
  return (
    <Container statusBarColorWhite conatinerStyle={styles.conatinerStyle}>
      <Header
        hasBackBtn
        title="Your Orders"
        onBackPress={() => navigation.goBack()}
      />
      <Content contentContainerStyle={styles.container}>
        <View style={styles.deliveryAddressRow}>
          <Image
            source={Images.ModalLocation}
            resizeMode="contain"
            style={styles.deliveryAddressImg}
          />
          <Text style={styles.deliveryAddressText}>
            69 Hettinger Hill Apt. MI 6969
          </Text>
          <Text
            style={styles.changeDeliveryAddressText}
            onPress={() => navigation.navigate('RepeatOrderRestaurantDetails')}>
            Change
          </Text>
        </View>
        <View style={styles.orderTimeRow}>
          <Image
            source={Images.ClockIcon}
            resizeMode="contain"
            style={styles.orderTimeIcon}
          />
          <Text style={styles.orderTimeText}>10-15 mins</Text>
        </View>
        <OrderFoodList
          data={orderFoodListData}
          containerstyle={styles.orderFoodListContainerstyle}
        />
        <View style={styles.foodBiilList}>
          <FlatList
            bounces={false}
            data={orderFoodBillListData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <View style={styles.totalBillTextRow}>
            <Text style={styles.grandTotalText}>Grand Total</Text>
            <Text style={styles.totalAmountText}>$647</Text>
          </View>
        </View>
        <View style={styles.userDetaileContent}>
          <View style={styles.userDetaileHeadingRow}>
            <Text style={styles.userDetaileHeadingText}>Your Details</Text>
            <Text
              style={styles.changeDeliveryAddressText}
              onPress={() => navigation.navigate('ProfileEdit')}>
              Change
            </Text>
          </View>
          <View style={styles.userDetaileList}>
            <Image
              source={Images.userLineIcon}
              resizeMode="contain"
              style={styles.userDetaileLeftImg}
            />
            <View style={styles.userDetaileRightText}>
              <Text style={styles.userDetaileText}>Michelle Rodriguez</Text>
            </View>
          </View>
          <View style={[styles.userDetaileList, styles.userDetaileLastList]}>
            <Image
              source={Images.CallLineIcon}
              resizeMode="contain"
              style={styles.userDetaileLeftImg}
            />
            <View style={styles.userDetaileRightText}>
              <Text style={styles.userDetaileText}>+1 (783) 0986 8786</Text>
            </View>
          </View>
        </View>
        <CommonBtn
          normalBtn
          commonBtnStyle={styles.paymentBtn}
          btnText="Process to payment"
          onPress={() => navigation.navigate('PaymentMethod')}
        />
      </Content>
    </Container>
  );
}

export default OrderScreen;
