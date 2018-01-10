import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Education extends React.Component {
  render() {
    const { school, degree, study, start, end } = this.props.data;
    return (
      <View>
        <Text style={ styles.title }>{ school }</Text>
        <Text style={ styles.text }>{ degree }</Text>
        <Text style={ styles.text }>{ study }</Text>
        <Text style={ styles.date }>{ `${ start } - ${ end || 'NOW' }` }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#005068'
  },
  date: {
    fontSize: 12,
    color: 'gray'
  },
  text: {
    fontSize: 12
  }
});

export default Education;
