import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Education extends React.Component {
  render() {
    const { school, degree, study, start, end } = this.props;
    return (
      <View>
        <Text>{ school }</Text>
        <Text>{ degree }</Text>
        <Text>{ study }</Text>
        <Text>{ start }</Text>
        <Text>{ end }</Text>
      </View>
    );
  }
}

export default Education;
