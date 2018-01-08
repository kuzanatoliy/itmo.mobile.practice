import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Employment extends React.Component {
  render() {
    const { company, position, start, end } = this.props;
    return (
      <View>
        <Text>{ company }</Text>
        <Text>{ position }</Text>
        <Text>{ start }</Text>
        <Text>{ end }</Text>
      </View>
    );
  }
}

export default Employment;
