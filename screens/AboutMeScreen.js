import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import data from '../data/about-me.json';
import Skill from '../components/Skill';
import Education from '../components/Education';
import Employment from '../components/Employment';
import Project from '../components/Project';

class AboutMeScreen extends Component {
  static navigationOptions = {
    title: 'About me',
  };

  skillCreate(item) {
    return <Skill value={ item } key={ item } />
  }

  projectCreate(item, index) {
    return <Project data={ item } key={ index }/>
  }

  employmentCreatee(item, index) {
    return <Employment data={ item } key={ index }/>
  }

  educationCreate(item, index) {
    return <Education data={ item } key={ index }/>
  }

  render() {
    return(
      <View style={ styles.container }>
        <ScrollView style={ styles.container } contentContainerStyle={ styles.contentContainer }>
          <Text style={ styles.title1 }>{ `My name is ${ data.name }` }</Text>
          <Text style={ styles.title2 }>My favorit skills:</Text>
          <View style={ styles.row }>{ data.skills.map( item => this.skillCreate(item) ) }</View>
          <Text>{ data.overview }</Text>
          <View style={ styles.section }>
            <Text style={ styles.title2 }>Projects:</Text>
            <View>{ data.projects.map( (item, index) => this.projectCreate(item, index) ) }</View>
          </View>
          <View style={ styles.section }>
            <Text style={ styles.title2 }>Employment:</Text>
            <View>{ data.employment.map( (item, index) => this.employmentCreatee(item, index) ) }</View>
          </View>
          <View style={ styles.section }>
            <Text style={ styles.title2 }>Education:</Text>
            <View>{ data.education.map( (item, index) => this.educationCreate(item, index) ) }</View>
          </View>
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
  title1: {
    color: '#005068',
    fontSize: 25
  },
  title2: {
    color: '#005068',
    fontSize: 20
  },
  row: {
    flexDirection: 'row'
  },
  section: {
    marginTop: 10
  }
});

export default AboutMeScreen;
