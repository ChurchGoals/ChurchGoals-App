import React from 'react';
import { Image, Linking, ScrollView, Text, View } from 'react-native';
import Button from './components/button';
import Styles from './App.style';
import carpentersSon from '../assets/images/carpenters-son.jpg';

function App() {
  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.imageContainer}>
        <Image source={carpentersSon} style={Styles.image}/>
        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>Church</Text>
          <Text style={Styles.title}>Goals</Text>
        </View>
      </View>
      <Button>Login</Button>
      <Text style={Styles.or}>OR</Text>
      <Button type="secondary">Signup</Button>
      <Text style={Styles.notChurch}>This is NOT a church run application.</Text>
      <Text style={Styles.churchLink} onPress={() => Linking.openURL('https://www.churchofjesuschrist.org/youth/childrenandyouth')}>Find out more about the Church of Jesus Christ of Latter-day Saints Personal Development Program</Text>
    </ScrollView>
  );
}

export default App;
