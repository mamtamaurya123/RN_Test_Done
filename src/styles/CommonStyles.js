import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import Colors from './Colors';

const CommonStyles = StyleSheet.create({
  view: {
    paddingHorizontal: wp(6),
    paddingTop: 9,
    paddingBottom: hp(2),
    backgroundColor: Colors.$lightpink,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  viewcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Avatar: {width: 30,
     height: 30, 
     borderRadius: 30, 
     top: hp(1)
    },
    description:
    {
        color: '#000',
        marginTop: hp(2),
        paddingHorizontal: wp(2),
      },
      surface: {
        padding: 8,
        height: 'auto',
        width: wp(100),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        bottom: hp(4),
      },
      guestimage: {
        height: hp(35),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: hp(2.3),
        width: wp(99),
        backgroundColor: 'transparent',
        alignItems: 'flex-start',
      },
});
export {CommonStyles};
