import React, { Component } from 'react';
import { Image, ScrollView, View, StyleSheet } from 'react-native';

class MyStudingScreen extends Component {
  static navigationOptions = {
    title: 'My studing',
  };
  
  render() {
    return(
      <View style={ styles.container }>
        <ScrollView style={ styles.container } contentContainerStyle={ styles.contentContainer }>
          <Image style={ styles.image } source={ require('../data/images/01.jpg') }/>
          <Image style={ styles.image } source={ require('../data/images/02.jpg') }/>
          <Image style={ styles.image } source={ require('../data/images/03.jpg') }/>
          <Image style={ styles.image } source={ require('../data/images/04.jpg') }/>
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
    padding: 30
  },
  text: {
    color: 'gray',
    fontSize: 20
  }
});

export default MyStudingScreen;
