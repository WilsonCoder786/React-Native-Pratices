import React from 'react';

import {View, Text} from 'react-native';

function Screen2({route, navigation}) {
  console.log(route.params);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Screen 2</Text>
    </View>
  );
}
export default Screen2;
