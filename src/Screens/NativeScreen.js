import React, { useEffect,useState } from 'react';
import { View, Text,NativeModules } from 'react-native';
const { StringExtracterModule } = NativeModules;

const NativeScreen =()=>{

  //const [navtivestate, setnavtivestate] = useState("");

  useEffect(() => {
    // StringExtracterModule.getValue('service_key', key => setnavtivestate({key})
    // );
    // StringExtracterModule.
  }, [])

    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text style={{ fontSize: 18 }}>
          Service Key: 'le475jUm1D'
          {/* {'{'}
          {__DEV__ ? navtivestate : 'le475jUm1D'}
          {'}'} */}
        </Text>
      </View>
    );

}

export default NativeScreen;
