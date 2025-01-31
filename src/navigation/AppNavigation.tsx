import React from 'react';
import { Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import OrderScreen from '../screens/Order/OrderScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
// import SpalshScreen from '../screens/Spalsh/SpalshScreen';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import SignUpScreen from '../screens/SignUpLogin/SignUpScreen';
import LoginScreen from '../screens/SignUpLogin/LoginScreen';
import SignUpOtpScreen from '../screens/SignUpLogin/SignUpOtpScreen';
import SignUpOtpVerifyedScreen from '../screens/SignUpLogin/SignUpOtpVerifyedScreen';
import ForgotPasswordScreen from '../screens/SignUpLogin/ForgotPasswordScreen';
import ForgotVerifyedScreen from '../screens/SignUpLogin/ForgotVerifyedScreen';
import ForgotOtpScreen from '../screens/SignUpLogin/ForgotOtpScreen';
import ResetPasswordScreen from '../screens/SignUpLogin/ResetPasswordScreen';
import ProfileEditScreen from '../screens/Profile/ProfileEditScreen';
import RecommendedFoodScreen from '../screens/RecommendedFood/RecommendedFoodScreen';
import RecommendedFoodRestaurantScreen from '../screens/RecommendedFoodRestaurant/RecommendedFoodRestaurantScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetails/RestaurantDetailsScreen';
import DeliveryAddressScreen from '../screens/DeliveryAddress/DeliveryAddressScreen';
import AddAddressScreen from '../screens/DeliveryAddress/AddAddressScreen';
import PaymentMethodScreen from '../screens/PaymentMethod/PaymentMethodScreen';
import ProfilePaymentMethodScreen from '../screens/PaymentMethod/ProfilePaymentMethodScreen';
import SuccessPaymentScreen from '../screens/SuccessPayment/SuccessPaymentScreen';
import WishlistScreen from '../screens/Wishlist/WishlistScreen';
import MyOrdersScreen from '../screens/MyOrders/MyOrdersScreen';
import OrderSummaryScreen from '../screens/OrderSummary/OrderSummaryScreen';
import RepeatOrderRestaurantDetailsScreen from '../screens/RepeatOrderRestaurantDetails/RepeatOrderRestaurantDetailsScreen';
import PhotoDetailOneScreen from '../screens/PhotoDetail/PhotoDetailOneScreen';
import PhotoDetailTwoScreen from '../screens/PhotoDetail/PhotoDetailTwoScreen';
import NotificationScreen from '../screens/Notification/NotificationScreen';
import YourRatingScreen from '../screens/YourRating/YourRatingScreen';
import HelpFaqsScreen from '../screens/HelpFaqs/HelpFaqsScreen';
import { Images, Colors } from '../theme';

import { isIphoneX } from '../libs/Utils';
import styles from './Styles';
import DrawerNavigation from './DrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';

import { BottomFabBar } from 'rn-wave-bottom-bar';

const Tab = createBottomTabNavigator();

const DashboardNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FFAB00',
        tabBarActiveBackgroundColor: '#006653',
        tabBarInactiveBackgroundColor: '#006653'
      }}
      tabBar={(props) => (
        <BottomFabBar
          showLabel={false}
          mode={'default'}
          bottomBarContainerStyle={styles.bottomBarContainerStyle}
          labelPosition={'beside-icon'}
          inactiveTintColor={Colors.white}
          inactiveBackgroundColor={Colors.white}
          activeTintColor={Colors.black}
          {...props}
        />
      )}>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={Images.HomeUnActive}
              resizeMode="contain"
              style={styles.tabIconImg}
            />
          )
        }}
        name="home"
        component={DrawerNavigation}
      />
      <Tab.Screen
        name="order"
        options={{
          tabBarIcon: () => (
            <Image
              source={Images.OrderUnActive}
              resizeMode="contain"
              style={styles.tabIconImg}
            />
          )
        }}
        component={OrderScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={Images.WishlistUnActive}
              resizeMode="contain"
              style={styles.tabIconImg}
            />
          )
        }}
        name="whishlist"
        component={WishlistScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={Images.ProfileUnActive}
              resizeMode="contain"
              style={styles.tabIconImg}
            />
          )
        }}
        name="profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer independent>
      <Stack.Navigator headerMode="none">
        {/* <Stack.Screen name="Spalsh" component={SpalshScreen} /> */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUpOtp" component={SignUpOtpScreen} />
        <Stack.Screen
          name="SignUpOtpVerifyed"
          component={SignUpOtpVerifyedScreen}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ForgotOtp" component={ForgotOtpScreen} />
        <Stack.Screen name="ForgotOtpVerifyed" component={ForgotVerifyedScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="Home" component={DashboardNavigation} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Wishlist" component={WishlistScreen} />
        <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
        <Stack.Screen name="RecommendedFood" component={RecommendedFoodScreen} />
        <Stack.Screen
          name="RecommendedFoodRestaurant"
          component={RecommendedFoodRestaurantScreen}
        />
        <Stack.Screen
          name="RestaurantDetails"
          component={RestaurantDetailsScreen}
        />
        <Stack.Screen name="DeliveryAddress" component={DeliveryAddressScreen} />
        <Stack.Screen name="AddAddress" component={AddAddressScreen} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
        <Stack.Screen
          name="ProfilePaymentMethod"
          component={ProfilePaymentMethodScreen}
        />
        <Stack.Screen name="SuccessPayment" component={SuccessPaymentScreen} />
        <Stack.Screen name="MyOrders" component={MyOrdersScreen} />
        <Stack.Screen name="OrderSummary" component={OrderSummaryScreen} />
        <Stack.Screen
          name="RepeatOrderRestaurantDetails"
          component={RepeatOrderRestaurantDetailsScreen}
        />
        <Stack.Screen name="PhotoDetailOne" component={PhotoDetailOneScreen} />
        <Stack.Screen name="PhotoDetailTwo" component={PhotoDetailTwoScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="YourRating" component={YourRatingScreen} />
        <Stack.Screen name="HelpFaqs" component={HelpFaqsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
