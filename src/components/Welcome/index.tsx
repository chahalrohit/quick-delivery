import * as React from 'react';
import { Text, Image } from 'react-native';
import styles from './Styles/index';

export interface Props {
  navigation: any;
  Heading?: string;
  Peregraph?: string;
}

function Welcome(props: any) {
  return (
    <>
      <Text style={styles.welcomeScreenHeading}>{props.heading}</Text>
      <Image
        source={props.image}
        resizeMode="contain"
        style={styles.welcomeScreenImages}
      />
    </>
  );
}

export default Welcome;
