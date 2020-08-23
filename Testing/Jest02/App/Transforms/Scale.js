import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const DESIGN_WIDTH = 375;

export default (scaleWidth) => {
  return (scaleWidth * width) / DESIGN_WIDTH;
};
