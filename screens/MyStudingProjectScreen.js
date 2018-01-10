import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

class MyStudingProjectScreen extends Component {
  static navigationOptions = {
    title: 'My project',
  };
  
  render() {
    return(
      <View style={ styles.container }>
        <ScrollView style={ styles.container } contentContainerStyle={ styles.contentContainer }>
          <Text style={ styles.text }>In my research, I am engaged in the analysis of modern technology front-end development.</Text>
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

export default MyStudingProjectScreen;
