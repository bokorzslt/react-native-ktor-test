import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import { ktortest } from 'ktortestzsoltb/packages/ktorlib';

const HelloWorldApp = () => {

  useEffect(() => {
    console.log("Perform network request")
    new ktortest.JsGreeting().greeting()
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
})
  
  return (
    <View
      style={styles.center}>
      <Text>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default HelloWorldApp;