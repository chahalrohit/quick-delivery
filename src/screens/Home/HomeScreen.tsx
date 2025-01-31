import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Content } from '../../components';
import { Colors, Images } from '../../theme';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './Styles/HomeStyle';
import LocationModal from '../../components/LocationModal';
import CommonHeadingBtn from '../../components/CommonHeadingBtn';
import CommonSearchInput from '../../components/CommonSearchInput';
import RestaurantNearYou from '../../components/RestaurantNearYou';
import Sliders from '../../components/Sliders';
import { recommandedFoodData, repeatOrderData } from '../../assets/data';

export interface Props {
  navigation: any;
}

function HomeScreen({ navigation }: Props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    {
      label: '69 Hettinger Hill Apt. MI 6969',
      value: '69 Hettinger Hill Apt. MI 6969'
    },
    {
      label: '59 Hettinger Hill Apt. MI 5959',
      value: '59 Hettinger Hill Apt. MI 5959'
    }
  ]);

  return (
    <Container gradiantBg statusBarColor={Colors.transparent}>
      <Content contentContainerStyle={styles.container}>
        <View style={styles.customContainer}>
          <View style={styles.appNameDrawerIconRow}>
            <Text style={styles.appNameText}>
              Quick <Text style={styles.deliveryText}>Delivery</Text>
            </Text>
            <TouchableOpacity
              style={styles.drawerIconBtn}
              onPress={() => navigation.toggleDrawer()}>
              <Image
                source={Images.DrawerIcon}
                resizeMode="contain"
                style={styles.drawerIcon}
              />
            </TouchableOpacity>
          </View>
          <View>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={styles.dropDownStyle}
              listItemLabelStyle={styles.listItemLabelStyle}
              placeholderStyle={styles.placeholderStyle}
              textStyle={styles.textStyle}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              showTickIcon={false}
              modalTitle="Select Location"
              listMode="MODAL"
              modalProps={{
                animationType: 'fade'
              }}
              placeholder="Select Location"
              ArrowUpIconComponent={() => (
                <Image
                  source={Images.UpArrow}
                  resizeMode="contain"
                  style={styles.dropDownArrowIcon}
                />
              )}
              ArrowDownIconComponent={() => (
                <Image
                  source={Images.DownArrow}
                  resizeMode="contain"
                  style={styles.dropDownArrowIcon}
                />
              )}
            />
            <Image
              source={Images.ModalLocation}
              resizeMode="contain"
              style={styles.dropdownLocationIcon}
            />
          </View>
          <CommonSearchInput placeHolderText={Colors.searchYellowPlaceholder} />
        </View>
        <View style={styles.offerSliderStyle}>
          <Sliders offerSlider />
        </View>
        <View style={styles.customContainer}>
          <CommonHeadingBtn headingText="Recommended Foods" />
        </View>
        <View style={styles.recommandedFoodRow}>
          <Sliders
            recommandedSlider
            listSlider
            data={recommandedFoodData}
            onPress={() => navigation.navigate('RecommendedFood')}
          />
        </View>
        <View style={styles.customContainer}>
          <CommonHeadingBtn
            hasBtn
            headingText="Repeat Orders"
            headingBtnText="View history"
          />
        </View>
        <View style={styles.repeatOrderListRow}>
          <Sliders
            repeatSlider
            listSlider
            data={repeatOrderData}
            onPress={() => navigation.navigate('RepeatOrderRestaurantDetails')}
          />
        </View>
        <View style={styles.customContainer}>
          <CommonHeadingBtn headingText="Restaurants Near You" />
          <RestaurantNearYou
            notLiked
            onPress={() => navigation.navigate('RestaurantDetails')}
          />
        </View>
        {/* <LocationModal /> */}
      </Content>
    </Container>
  );
}

export default HomeScreen;
