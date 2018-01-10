import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

class ContactsScreen extends React.Component {
  static navigationOptions = {
    title: 'Contacts',
  };
  
  render() {
    return(
      <View style={ styles.container }>
        <ScrollView style={ styles.container } contentContainerStyle={ styles.contentContainer }>
          <Text style={ styles.title }>Phone:</Text>
          <Text style={ styles.link }>+375298526443</Text>
          <Text style={ styles.title }>Web site:</Text>
          <Text style={ styles.link }>kuzanatoli.ru</Text>
          <Text style={ styles.title }>Skype:</Text>
          <Text style={ styles.link }>Kuzmainkou Anatoli</Text>
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
  title: {
    color: 'gray',
    fontSize: 25
  },
  link: {
    color: '#005068',
    fontSize: 20
  }
});

export default ContactsScreen;
