import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, Image, View, TextInput } from 'react-native';
import { Colors, Images } from '../../theme';
import styles from './Styles/index';

export interface Props {
  navigation: any;
  Heading?: string;
  Peregraph?: string;
}

function TextInputContent(props: any) {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <>
      {props.normalInput && (
        <View style={[styles.textInputRow, props.textInputRowStyle]}>
          <Image
            source={props.leftInputIcon}
            resizeMode="contain"
            style={[styles.textInputLeftIcon, props.textInputLeftIconStyle]}
          />
          <TextInput
            style={[styles.allInputStyle, props.inputStyle]}
            placeholder={props.placeholder}
            keyboardType={props.type}
            placeholderTextColor={Colors.lightBlack}
          />
        </View>
      )}
      {props.passwordInput && (
        <View style={[styles.textInputRow, props.textInputRowStyle]}>
          <Image
            source={props.leftInputIcon}
            resizeMode="contain"
            style={[styles.textInputLeftIcon, props.textInputLeftIconStyle]}
          />
          <TextInput
            style={[
              styles.allInputStyle,
              styles.passwordInputStyle,
              props.inputStyle
            ]}
            placeholder={props.placeholder}
            keyboardType={props.type}
            secureTextEntry={showPassword}
            placeholderTextColor={Colors.lightBlack}
          />
          <TouchableOpacity
            style={styles.passwordEyeImgBtn}
            onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={
                showPassword ? Images.HideEyeLineIcon : Images.ShowEyeLineIcon
              }
              style={styles.passwordEyeImg}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

export default TextInputContent;
