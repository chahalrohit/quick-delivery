import * as React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Container, Content, Header } from '../../components';
import styles from './Styles/DeliveryAddressStyle';
import CommonBtn from '../../components/CommonBtn';
import TextInputContent from '../../components/TextInputContent';
import { deliveryAddressListData } from '../../assets/data';
import { Images } from '../../theme';

export interface Props {
  navigation: any;
}

function AddAddressScreen({ navigation }: any) {
  const renderItem = ({ item }: any) => (
    <>
      <TouchableOpacity style={styles.deliveryAddressContent}>
        <View style={styles.addressTypeDeleteBtn}>
          <Image
            source={item.addressTypeImg}
            resizeMode="contain"
            style={styles.addressImg}
          />
          <Text style={styles.addressTypeText}>{item.addressType}</Text>
          <Text style={styles.addressDeleteText}>{item.deleteText}</Text>
        </View>
        <Text style={styles.addressText}>{item.address}</Text>
      </TouchableOpacity>
    </>
  );
  return (
    <Container statusBarColorWhite conatinerStyle={styles.conatinerStyle}>
      <Header
        hasBackBtn
        title="Add New Address"
        onBackPress={() => navigation.goBack()}
      />
      <Content contentContainerStyle={styles.container}>
        <View style={styles.addAddressList}>
          <TextInputContent
            normalInput
            placeholder="Full name"
            leftInputIcon={Images.userLineIcon}
            type="default"
          />
          <TextInputContent
            normalInput
            placeholder="Mobile"
            leftInputIcon={Images.CallLineIcon}
            type="number-pad"
          />
          <TextInputContent
            normalInput
            placeholder="Street"
            leftInputIcon={Images.LocationLineIcon}
            type="default"
          />
          <TextInputContent normalInput placeholder="City" type="default" />
          <TextInputContent normalInput placeholder="State" type="default" />
          <TextInputContent normalInput placeholder="Country" type="default" />
          <TextInputContent normalInput placeholder="Pincode" type="default" />
        </View>
        <CommonBtn
          normalBtn
          commonBtnStyle={styles.addAddressBtn}
          btnText="Save"
          onPress={() => navigation.goBack()}
        />
      </Content>
    </Container>
  );
}

export default AddAddressScreen;
