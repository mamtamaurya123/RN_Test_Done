import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const width = Dimensions.get('screen').width - 20;
const height = width / 1.33;
const DetailsScreen = ({route, navigation}) => {
  const {itemId, image, name, description, price, Dprice, discount} =
    route.params;
  return (
    <>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0,0,0,0.3)',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>


            <Text
              style={{
                fontSize: 20,
                textAlign:"center",
                marginTop:hp(2),
                marginBottom:wp(2),
                color: '#F4560C',
                width: Dimensions.get('screen').width - 55,
              }}
              numberOfLines={1}>
              {name}
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={{
            width,
            borderRadius: 5,
            marginVertical: 10,
            marginHorizontal: 5,
            marginBottom: hp(12),
          }}>
          <Image
            source={{uri: image}}
            style={{
              width,
              height,
              resizeMode: 'cover',
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
            }}
          />

          <View
            style={{
              paddingHorizontal: 12,
              paddingTop: 9,
              paddingBottom: 12,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{width: width - 60}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}
                  numberOfLines={2}>
                  {name}
                </Text>
                <Text style={{color: 'tomato', fontSize: 20}}>
                  {discount !== null && (
                    <Text style={{textDecorationLine: 'line-through'}}>
                      {price}
                    </Text>
                  )}
                  {Dprice}
                </Text>
              </View>

              <Image
                source={{uri: 'https://imageipsum.com/50x50'}}
                style={{width: 30, height: 30, borderRadius: 30}}
              />
            </View>
            <Text style={{color: 'rgba(0,0,0,0.6)', fontSize: 16}}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Description:{' '}
              </Text>
              {description}
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default DetailsScreen;
const styles = StyleSheet.create({
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
