import react, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import data from '../data/about-me.json';
import Skill from '../components/Skill';

class AboutMeScreen extends Component {
  static navigationOptions = {
    header: 'About me',
  };

  skillCreate(item) {
    return <Skill value={ item } />
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
