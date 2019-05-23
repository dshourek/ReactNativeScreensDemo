import React from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';

export default class HobbiesScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>FlatList of hobbies:</Text>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} >
          <FlatList
            data={[
              { key: 'Sleeping' },
              { key: 'Coding' },
              { key: 'Dancing' },
              { key: 'Spent time with friends' },
              { key: 'Traveling' },
              { key: 'Cycling' },
              { key: 'Climbing' },
              { key: 'Pool' },
              { key: 'Watching football' },
            ]}
            renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
          />
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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  headerText: {
    margin: 10,
    color: 'rgba(96,100,109, 1)',
    fontFamily: 'Avenir',
    fontSize: 26,
    textAlign: 'left',
  },
  item: {
    color: 'rgba(96,100,109, 1)',
    textAlign: 'left',
    fontFamily: 'Avenir',
    fontSize: 18,
    height: 44,
    padding: 10,
  },
});
