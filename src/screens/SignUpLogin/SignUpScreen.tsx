import * as React from 'react';
import { Image, View, Text } from 'react-native';
import { Container, Content } from '../../components';
import TextInputContent from '../../components/TextInputContent';
import CommonBtn from '../../components/CommonBtn';
import { Colors, Images } from '../../theme';

import styles from './Styles';

export interface Props {
  navigation: any;
}

function SignUpScreen({ navigation }: Props) {
  return (
    <>
      <Container gradiantBg gradiantBgImg statusBarColor>
        <Content contentContainerStyle={styles.container}>
          <Image
            source={Images.Logo}
            resizeMode="contain"
            style={styles.logo}
          />
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Sign up</Text>
            <View style={styles.inputContent}>
              <TextInputContent
                normalInput
                placeholder="alex.pinto@gmail.com"
                type="email-address"
                leftInputIcon={Images.attherateIcon}
              />
              <TextInputContent
                normalInput
                placeholder="Full name"
                type="default"
                leftInputIcon={Images.userLineIcon}
              />
              <TextInputContent
                normalInput
                placeholder="Mobile"
                type="phone-pad"
                leftInputIcon={Images.CallLineIcon}
              />
            </View>
            <Text style={styles.peragraph}>
              By signing up, you’re agree to our {''}
              <Text style={styles.greenText}>
                Terms and Conditions
              </Text> and {''}
              <Text style={styles.greenText}>Private Policy</Text>
            </Text>
            <CommonBtn
              normalBtn
              btnText="Get Started"
              commonBtnStyle={styles.signUpStartBtn}
              onPress={() => navigation.navigate('SignUpOtp')}
            />
            <Text style={styles.signUpLoginBottomText}>
              Joined us before?{' '}
              <Text
                style={styles.greenText}
                onPress={() => navigation.navigate('Login')}>
                Login
              </Text>
            </Text>
          </View>
        </Content>
      </Container>
    </>
  );
}

export default SignUpScreen;
