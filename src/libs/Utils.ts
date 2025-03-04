import { Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

/**
 * Check device
 */
export const isIphoneX = () => {
  return (
    // This has to be iOS duh
    Platform.OS === 'ios' &&
    // Accounting for the height in either orientation
    (height >= 812 || width >= 812)
  );
};

export const isIphone12And13ProMax = () => {
  return (
    // This has to be iOS duh
    Platform.OS === 'ios' &&
    // Accounting for the height in either orientation
    (height >= 900 || width >= 900)
  );
};

/**
 * Http query builder
 * @param d     Http paramter
 */
export const buildURLQuery = (d: any) =>
  Object.keys(d)
    .filter((k) => d[k] !== null)
    .map((k) => [k, d[k]].map(encodeURIComponent).join('='))
    .join('&');

/**
 * Curreny formatter
 * @param value   currency value
 */
export const numberFormat = (value: number) => {
  // new Intl.NumberFormat('en-PH', {
  //   style: 'currency',
  //   currency: 'PHP',
  //   currencyDisplay: 'symbol'
  // })
  //   .formatToParts(value)
  //   .filter((p) => p.type !== 'currency') // removes the currency part
  //   .reduce((s, p) => s + p.value, '') // joins the remaining values
  //   .trim();

  const currencyOptions = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP'
  }).resolvedOptions();

  return value.toLocaleString('en-PH', {
    ...currencyOptions,
    style: 'decimal'
  });
};
