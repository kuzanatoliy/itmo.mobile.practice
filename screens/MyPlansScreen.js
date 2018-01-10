import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

class MyPlansScreen extends Component {
  static navigationOptions = {
    title: 'My plans',
  };
  
  render() {
    return(
      <View style={ styles.container }>
        <ScrollView style={ styles.container } contentContainerStyle={ styles.contentContainer }>
          <Text style={ styles.text }>In the near future, I plan to finish my master's program and develop as a UX Developer.</Text>
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

export default MyPlansScreen;
