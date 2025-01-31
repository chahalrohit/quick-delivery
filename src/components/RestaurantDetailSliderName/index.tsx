import * as React from 'react';
import { Text, TouchableOpacity, Image, View, FlatList } from 'react-native';
import { Images } from '../../theme';
import Sliders from '../Sliders';
import styles from './Styles/index';

export interface Props {
  navigation: any;
}

function RestaurantDetailSliderName(props: any) {
  return (
    <>
      <View>
        <View style={styles.restaurantDetailSlider}>
          <Sliders normalSlider data={props.data} />
        </View>
        <View style={styles.restaurantNameLabel}>
          <Text style={styles.restaurantName}>Peopel’s Dine</Text>
          <Text style={styles.restaurantLocationText}>
            696 Hettinger Hill Apt. MI 69169
          </Text>
          <View style={styles.restaurantServiceReviewsRow}>
            <View style={styles.restaurantServiceReviewsItem}>
              <Image
                source={Images.DeliveryBoyIcon}
                resizeMode="contain"
                style={styles.restaurantServiceImg}
              />
              <Text style={styles.restaurantServiceText}>Free delivery</Text>
            </View>
            <View style={styles.restaurantServiceReviewsItem}>
              <Image
                source={Images.ClockIcon}
                resizeMode="contain"
                style={styles.restaurantServiceImg}
              />
              <Text style={styles.restaurantServiceText}>10-15 mins</Text>
            </View>
            <View style={styles.restaurantServiceReviewsItem}>
              <Image
                source={Images.DiscountIcon}
                resizeMode="contain"
                style={styles.restaurantServiceImg}
              />
              <Text style={styles.restaurantServiceText}>30% off</Text>
            </View>
            <View style={styles.restaurantServiceReviewsItem}>
              <Text style={styles.restaurantRetingText}>4.5</Text>
              <Image
                source={Images.ratingStar}
                resizeMode="contain"
                style={styles.restaurantRatingStarImg}
              />
              <Text style={styles.restaurantTotalReviewText}>(25+)</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default RestaurantDetailSliderName;
