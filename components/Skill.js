import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Skill extends React.Component {
  render() {
    const { value } = this.props.value;
    return (
      <View>
        <Text>{ value }</Text>
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
  }
});
