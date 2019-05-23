import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class SummaryScreen extends React.Component {
  render() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.photoContainer}>
            <Image
              source={require('../assets/images/shourek.jpg')}
              style={styles.photoImage}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>Hello!</Text>
            <Text style={styles.mainText}>
              My name is Denys Shourek. I’m 26 years old. I was born and raised in Rivne.
              I'm learning programming for a 1.5 year. I’m open for learning new technologies and practices.
              Quickly adapt to the software environment. I just love to work in team,
              that’s why I want to improve my skills practically while teaming up with teammates to develop real project.
            </Text>
          </View>
        </ScrollView>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'ivory',
  },
  contentContainer: {
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  photoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  photoImage: {
    width: 220,
    height: 180,
    resizeMode: 'contain',
    marginTop: 3,
  },
  textContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  headerText: {
    margin: 10,
    color: 'rgba(96,100,109, 1)',
    fontFamily: 'Avenir',
    fontSize: 26,
  },
  mainText: {
    color: 'rgba(96,100,109, 1)',       
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 18,
  },
});
