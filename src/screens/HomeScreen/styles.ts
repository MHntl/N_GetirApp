import {StyleSheet, Dimensions} from 'react-native';
import {ColorsApp} from '../../constants';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  headerMain: {
    height: height * 0.064,
    backgroundColor: ColorsApp.yellow,
  },
  headerOne: {
    backgroundColor: ColorsApp.white,
    height: height * 0.064,
    width: '80%',
    flex: 1,
    flexDirection: 'row',
    alignItems: `center`,
    paddingHorizontal: '4%',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  image: {
    width: 30,
    height: 30,
  },
  headerOneView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    paddingLeft: 8,
    borderLeftColor: ColorsApp.borderColor,
    borderLeftWidth: 2,
  },
  headerTwo: {
    width: '20%',
    height: height * 0.065,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10,
  },
});

export default styles;
