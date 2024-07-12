import React from 'react';

import {View, Text, Button} from 'react-native';

function Screen1({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Screen 2"
        onPress={() =>
          navigation.navigate('Screen', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }></Button>
    </View>
  );
}
export default Screen1;
