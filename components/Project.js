import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Skill from './Skill';

class Project extends React.Component {
  skillCreate(item) {
    return <Skill value={ item } key={ item } />
  }
  
  render() {
    const { title, skills, date, overview, link } = this.props.data;
    return (
      <View>
        <Text>{ title }</Text>
        <Text>{ date }</Text>
        <View>{ data.skills.map(item => this.skillCreate(item)) }</View>
        <Text>{ overview }</Text>
        <Text>{ link }</Text>
      </View>
    );
  }
}

export default Project;
