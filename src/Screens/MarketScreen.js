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

import {Surface} from 'react-native-paper';
import {dummyData} from '../Data/localData';
import Colors from '../styles/Colors';
import {CommonStyles} from '../styles/CommonStyles';

const width = Dimensions.get('screen').width - 20;

const MarketScreen = ({navigation}) => {
  const ItemArrayList = dummyData.map((key, index) => {
    return PropertyStatus(key, index);
  });

  function PropertyStatus(key, index) {
    let Dprice =
      ' ' +
      Math.round(
        key.discount == null
          ? key.price / 100
          : (key.discount_type == 'percentage'
              ? key.price - (key.price / 100) * key.discount
              : key.price - key.discount) / 100,
      ).toFixed(2);
    key.price = Math.round(key.price / 100).toFixed(2);

    if (Dprice == 0.0) Dprice = ' Free';
    else Dprice = ' £' + Dprice;

    if (key.discount != null) key.price = '£ ' + key.price;

    return (
      <>
        <Surface style={CommonStyles.surface}>
          <Image
            resizeMode="cover"
            source={{uri: key.image}}
            style={CommonStyles.guestimage}
          />

          <View style={CommonStyles.view}>
            <View style={CommonStyles.viewcontainer}>
              <View style={{width: width - 60}}>
                <Text style={{color: Colors.$blackcolor, fontSize: 15}} numberOfLines={2}>
                  Title : {key.name}
                </Text>
                <Text style={{color: Colors.$whitecolor, fontSize: 19}}>
                  {key.discount !== null && (
                    <Text style={{textDecorationLine: 'line-through'}}>
                      {key.price}
                    </Text>
                  )}
                  {Dprice}
                </Text>
              </View>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('DetailsScreen', {
                    itemId: key.id,
                    image: key.image,
                    name: key.name,
                    description: key.description,
                    price: key.price,
                    Dprice: Dprice,
                    discount: key.discount,
                  })
                }>
                <Image
                  source={{uri: 'https://imageipsum.com/50x50'}}
                  style={CommonStyles.Avatar}
                />
              </TouchableOpacity>
            </View>
            <Text style={CommonStyles.description} numberOfLines={2}>
              Description : {key.short_description}
            </Text>
          </View>
        </Surface>
      </>
    );
  }

  return (
    <>
      <View>
        <ScrollView>{ItemArrayList}</ScrollView>
      </View>
    </>
  );
};

export default MarketScreen;
