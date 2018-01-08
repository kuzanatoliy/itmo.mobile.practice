import react, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import data from '../data/about-me.json';
import Skill from '../components/Skill';
import Education from '../components/Project';
import Employment from '../components/Employment';
import Project from '../components/Project';

class AboutMeScreen extends Component {
  static navigationOptions = {
    header: 'About me',
  };

  skillCreate(item) {
    return <Skill value={ item } key={ item }/>
  }

  projectCreate(item, index) {
    return <Project data={ item } key={ item.title }/>
  }

  render() {
    return(
      <View>
        <ScrollView>
          <Text>{ `My name is ${ data.name }` }</Text>
          <Text>My favorit skills:</Text>
          <View>
            { data.skills.map(item => this.skillCreate(item)) }
          </View>
          <Text>{ data.overview }</Text>
        </ScrollView>
      </View>
    );
  }
}

export default AboutMeScreen;
