import { Dimensions, PixelRatio } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
export const width = Dimensions.get('screen').width;
export const height = Dimensions.get('screen').height;

let baseWidth = 414;
let baseHeight = 896;

const widthToDp = (widthPercentage) => {
  const widthValue =
    typeof widthPercentage == 'number'
      ? widthPercentage
      : parseFloat(widthPercentage);
  return PixelRatio.roundToNearestPixel(
    (width * ((100 * widthValue) / baseWidth)) / 100,
  );
};

const heightToDp = (heightPercentage) => {
  const heightValue =
    typeof heightPercentage == 'number'
      ? heightPercentage
      : parseFloat(heightPercentage);
  return PixelRatio.roundToNearestPixel(
    (height * ((100 * heightValue) / baseHeight)) / 100,
  );
};

const addOreintationListener = () => {
  Dimensions.addEventListener('change', (newDimension) => {
    width = newDimension.window.width;
    height = newDimension.window.height;
    if (width < height) {
      baseWidth = 375;
      baseHeight = 667;
    } else {
      baseWidth = 667;
      baseHeight = 375;
    }
  });
};

const removeOreintationListener = () => {
  Dimensions.removeEventListener('change', () => { });
};

const statusBarHeight = () => getStatusBarHeight()
export {
  statusBarHeight,
  widthToDp,
  heightToDp,
  addOreintationListener,
  removeOreintationListener,
};
