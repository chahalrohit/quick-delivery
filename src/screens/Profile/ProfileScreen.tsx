import * as React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Container, Content, Header } from '../../components';
import { Images } from '../../theme';
import { profileList } from '../../assets/data';
import styles from './Styles/ProfileStyle';

export interface Props {
  navigation: any;
}

export default function ProfileScreen({ navigation }: any) {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.userProfileListItem}
      key={item.id}
      onPress={() => navigation.navigate(item.navigation)}>
      <Image
        source={item.image}
        resizeMode="contain"
        style={styles.userProfileListIcon}
      />
      <View style={styles.userProfileListName}>
        <Text style={styles.userProfileListText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <Container>
      <Content statusBarColorWhite contentContainerStyle={styles.container}>
        <Image
          source={Images.UserProfile}
          resizeMode="contain"
          style={styles.profileImage}
        />
        <TouchableOpacity onPress={() => navigation.navigate('ProfileEdit')}>
          <Text style={styles.userNameText}>Michelle Rodriguez</Text>
          <Text style={styles.userEmailText}>michellerodriguez@gmail.com</Text>
        </TouchableOpacity>
        <View style={styles.userProfileList}>
          <FlatList
            data={profileList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </Content>
    </Container>
  );
}
