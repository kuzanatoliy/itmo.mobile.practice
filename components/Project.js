import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Skill from './Skill';
import { WebBrowser } from 'expo';

class Project extends React.Component {
  skillCreate(item) {
    return <Skill value={ item } key={ item } />
  }

  _linkPress(link) {
    WebBrowser.openBrowserAsync(link);
  }
  
  render() {
    const { title, skills, date, overview, link } = this.props.data;
    return (
      <View>
        <Text style={ styles.title }>{ title }</Text>
        <Text style={ styles.date }>{ date }</Text>
        <View style={ styles.skills }>{ skills.map(item => this.skillCreate(item)) }</View>
        <Text style={ styles.overview }>{ overview }</Text>
        <TouchableOpacity onPress={ () => this._linkPress(link) }>
          <Text style={ styles.link }>{ link }</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  title: {
    fontSize: 18,
    color: '#005068'
  },
  date: {
    fontSize: 12,
    color: 'gray'
  },
  skills: {
    flexDirection: 'row'
  },
  overview: {
    fontSize: 12
  },
  link: {
    color: '#005068',
    fontSize: 12
  }
}

export default Project;
