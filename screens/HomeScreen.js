import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={ styles.container }>
        <ScrollView style={ styles.container } contentContainerStyle={ styles.contentContainer }>
          <Image style={ styles.image } source={ require('../data/images/Icon.jpg') }/>
          <Text style={ styles.title }>Kuzmiankou Anatoli</Text>
          <Text style={ styles.text }>UX Developer (EPAM Systems Inc)</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    padding: 30,
    alignItems: 'center'
  },
  title: {
    color: '#005068',
    fontSize: 45,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  text: {
    fontSize: 15
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125
  }
});
