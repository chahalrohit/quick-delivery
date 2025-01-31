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

function LoginScreen({ navigation }: Props) {
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
            <Text style={styles.heading}>Login</Text>
            <View style={styles.inputContent}>
              <TextInputContent
                normalInput
                placeholder="Email id"
                type="email-address"
                leftInputIcon={Images.attherateIcon}
              />
              <TextInputContent
                passwordInput
                placeholder="Password"
                type="default"
                leftInputIcon={Images.lockLineIcon}
                textInputRowStyle={styles.loginPasswordInput}
              />
            </View>
            <Text
              style={[styles.greenText, styles.forgotPasswordText]}
              onPress={() => navigation.navigate('ForgotPassword')}>
              Forgot Password?
            </Text>
            <CommonBtn
              normalBtn
              btnText="Get Started"
              commonBtnStyle={styles.signUpStartBtn}
              onPress={() => navigation.navigate('Home')}
            />
            <View style={styles.orTextRow}>
              <View style={styles.orTextRowLine} />
              <Text style={styles.orText}>OR</Text>
              <View style={styles.orTextRowLine} />
            </View>
            <CommonBtn
              imageBtn
              btnText="Login with Google"
              btnImg={Images.googleIcon}
              commonBtnStyle={styles.loginGoogleBtn}
              commonBtnTextStyle={styles.loginGoogleTextBtn}
            />
            <Text style={styles.signUpLoginBottomText}>
              New to Logistics?{' '}
              <Text
                style={styles.greenText}
                onPress={() => navigation.navigate('SignUp')}>
                Register
              </Text>
            </Text>
          </View>
        </Content>
      </Container>
    </>
  );
}

export default LoginScreen;
