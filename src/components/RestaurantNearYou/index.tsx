import * as React from 'react';
import { Text, TouchableOpacity, Image, View, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { restaurantNearYouData } from '../../assets/data';
import { Images } from '../../theme';
import styles from './Styles/index';

export interface Props {
  navigation: any;
}

function RestaurantNearYou(props: any) {
  const [likeBtn, setLikeBtn] = React.useState(false);
  const restaurantNearYouItem = ({ item, index }: any) => (
    <TouchableOpacity
      style={
        index === restaurantNearYouData.length - 1
          ? [styles.restaurantColumn, styles.lastColumn]
          : styles.restaurantColumn
      }
      onPress={() => {
        if (props.onPress) {
          props.onPress();
        }
      }}>
      <LinearGradient
        colors={['rgba(253, 245, 219, 0.8)', 'rgba(253, 245, 219, 0.1)']}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 0.5, y: 0 }}
        style={styles.restaurantColumnBgGradiant}
      />
      <Image
        source={item.restaurantImg}
        resizeMode="cover"
        style={styles.restaurantImg}
      />
      <View style={styles.ratingLikeBtnRow}>
        <View style={styles.ratingStarRow}>
          <Text style={styles.totalRatingText}>{item.totalRatingText}</Text>
          <Image
            source={Images.ratingStar}
            resizeMode="contain"
            style={styles.ratingStarImg}
          />
          <Text style={styles.totalReviewText}>{item.totalReviewText}</Text>
        </View>
        <TouchableOpacity
          style={styles.likeBtn}
          onPress={() => setLikeBtn(props.notLiked ? item.id : !likeBtn)}>
          <Image
            source={
              props.notLiked
                ? likeBtn === item.id
                  ? Images.LikeYellowBtn
                  : Images.LikeWhiteBtn
                : Images.LikeYellowBtn
            }
            resizeMode="contain"
            style={styles.likeWhiteImg}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.restaurantOtherDetail}>
        <Text style={styles.restaurantName}>{item.restaurantName}</Text>
        <View style={styles.restaurantColumnOtherDetailRow}>
          <View style={styles.restaurantOtherDetailColumn}>
            <Image
              source={Images.DeliveryBoyIcon}
              resizeMode="contain"
              style={styles.restaurantOtherDetailImg}
            />
            <Text style={styles.restaurantOtherDetailText}>
              {item.freeDeliveryText}
            </Text>
          </View>
          <View style={styles.restaurantOtherDetailColumn}>
            <Image
              source={Images.ClockIcon}
              resizeMode="contain"
              style={styles.restaurantOtherDetailImg}
            />
            <Text style={styles.restaurantOtherDetailText}>
              {item.timeText}
            </Text>
          </View>
          <View style={styles.restaurantOtherDetailColumn}>
            <Image
              source={Images.DiscountIcon}
              resizeMode="contain"
              style={styles.restaurantOtherDetailImg}
            />
            <Text style={styles.restaurantOtherDetailText}>
              {item.discountText}
            </Text>
          </View>
        </View>
        <View style={styles.restaurantLabelRow}>
          <Text style={styles.restaurantLabelText}>{item.LabelTextOne}</Text>
          <Text style={styles.restaurantLabelText}>{item.LabelTextTwo}</Text>
          <Text style={styles.restaurantLabelText}>{item.LabelTextThree}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <>
      <FlatList
        bounces={false}
        data={restaurantNearYouData}
        renderItem={restaurantNearYouItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}

export default RestaurantNearYou;
