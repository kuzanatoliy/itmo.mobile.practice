import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Employment extends React.Component {
  render() {
    const { company, position, start, end } = this.props.data;
    return (
      <View>
        <Text style={ styles.title }>{ company }</Text>
        <Text style={ styles.position }>{ position }</Text>
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
  position: {
    fontSize: 12,
  }
});

export default Employment;
