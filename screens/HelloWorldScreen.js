import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

export default class HelloWorldScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.headerText}>Hello World</Text>
          <Text style={styles.mainText}>from first React Native App</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ivory',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    margin: 10,
    color: 'rgba(96,100,109, 1)',
    fontFamily: 'Avenir',
    fontSize: 26,
  },
  mainText: {
    marginHorizontal: 20,
    color: 'rgba(96,100,109, 1)',       
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 18,
  },
});
