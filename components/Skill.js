import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Skill extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>{ value }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 5,
    borderRadius: 4,
    backgroundColor: '#005068'
  }, 
  text: {
    color: 'white',
    fontSize: 13
  }
});

export default Skill;
