import * as React from 'react';
import { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Share,
  Dimensions,
  FlatList
} from 'react-native';
import { Container, Content, Header } from '../../components';
import { Colors, Images } from '../../theme';
import RestaurantDetailSliderName from '../../components/RestaurantDetailSliderName';
import styles from './Styles/RestaurantDetailsStyle';
import CommonSearchInput from '../../components/CommonSearchInput';
import CommonHeadingBtn from '../../components/CommonHeadingBtn';
import AddCartFoodList from '../../components/AddCartFoodList';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import { BlurView } from '@react-native-community/blur';
import {
  FoodListData,
  restaurantDetailSliderData,
  FoodSliderListData,
  repeatOrderMenuList
} from '../../assets/data';

export interface Props {
  navigation: any;
}

export default function RestaurantDetailsScreen({ navigation }: any) {
  const windowHeight = Dimensions.get('window').height;
  const refRBSheet = useRef();
  const [blurActive, setBlurActive] = useState(false);
  const [vegSwitch, setVegSwitch] = useState(true);
  const [nonVegSwitch, setNonVegSwitch] = useState(false);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'https://zluck.com'
      });
    } catch (error) {
      // alert(error.message);
    }
  };

  const renderMenuListItem = ({ item, index }: any) => (
    <>
      <TouchableOpacity
        style={
          index === 0 ? [styles.menuList, { marginTop: 0 }] : styles.menuList
        }
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.menuItemName}>{item.menyItemName}</Text>
        <Image
          source={Images.CheckBoxLineIcon}
          resizeMode="contain"
          style={styles.checkBoxLineIcon}
        />
      </TouchableOpacity>
    </>
  );
  return (
    <>
      <Container gradiantBg statusBarColor>
        <Header
          hasBackBtn
          transparent
          hasShareLike
          onBackPress={() => navigation.goBack()}
          onSharePress={onShare}
        />
        <Content contentContainerStyle={styles.container}>
          <View style={styles.customContainer}>
            <RestaurantDetailSliderName data={restaurantDetailSliderData} />
            <CommonSearchInput
              greenInput
              searchRowStyle={styles.searchRowStyle}
              searchInputStyle={styles.searchInputStyle}
              placeHolderText={Colors.searchGreenPlaceholder}
            />
            <View style={styles.switchMenuBtnRow}>
              <View style={styles.switchRow}>
                <Text style={styles.switchText}>Veg</Text>
                <TouchableOpacity
                  style={styles.switchBtn}
                  onPress={() => setVegSwitch(!vegSwitch)}>
                  <View style={styles.vegSwitchBackLine} />
                  <View
                    style={
                      vegSwitch
                        ? styles.vegSwitchHandalOn
                        : styles.vegSwitchHandalOff
                    }
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.switchRow}>
                <Text style={styles.switchText}>Non-Veg</Text>
                <TouchableOpacity
                  style={styles.switchBtn}
                  onPress={() => setNonVegSwitch(!nonVegSwitch)}>
                  <View style={styles.nonVegSwitchBackLine} />
                  <View
                    style={
                      nonVegSwitch
                        ? styles.nonVegSwitchHandalOn
                        : styles.nonVegSwitchHandalOff
                    }
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.menuBtn}
                onPress={() => {
                  setBlurActive(true);
                  refRBSheet.current.open();
                }}>
                <Image
                  source={Images.MenuPlateIcon}
                  resizeMode="contain"
                  style={styles.menuBtnImg}
                />
                <Text style={styles.menuBtnText}>Menu</Text>
              </TouchableOpacity>
            </View>
            <CommonHeadingBtn headingText="Delicious Foods" />
            <AddCartFoodList
              listView
              addCartBtn
              data={FoodListData.slice(0, 4)}
              onPress={() => navigation.navigate('PhotoDetailOne')}
            />
            <CommonHeadingBtn
              headingText="Recommended Foods"
              containerStyle={styles.recommendedSliderHeading}
            />
          </View>
          <AddCartFoodList sliderView addCartBtn data={FoodSliderListData} />
          <View style={styles.customContainer}>
            <AddCartFoodList
              listView
              addCartBtn
              data={FoodListData.slice(4, 8)}
              containerstyle={styles.addCartBottomList}
            />
          </View>
        </Content>
      </Container>
      {blurActive && (
        <BlurView
          style={styles.absolute}
          blurType="dark"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
      )}
      <RBSheet
        closeOnDragDown
        closeOnPressMask
        animationType="slide"
        ref={refRBSheet}
        customStyles={{
          wrapper: {
            backgroundColor: Colors.transparent
          },
          draggableIcon: {
            backgroundColor: Colors.black,
            width: 60,
            height: 3,
            borderRadius: 2
          },
          container: {
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            paddingBottom: 20,
            paddingTop: 0,
            marginTop: 0,
            height: windowHeight - 200
          }
        }}
        onClose={() => setBlurActive(false)}>
        <LinearGradient
          colors={['rgba(253, 245, 219, 0.1)', 'rgba(253, 245, 219, 0.8)']}
          start={{ x: 0.5, y: 0.9 }}
          end={{ x: 0.5, y: 0 }}
          style={styles.bottomSheetBgGradiant}
        />
        <View style={styles.bottomSheetContainer}>
          <Text style={styles.menuHeading}>Filter Delicious Foods</Text>
          <FlatList
            bounces={false}
            data={repeatOrderMenuList}
            renderItem={renderMenuListItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </RBSheet>
    </>
  );
}
